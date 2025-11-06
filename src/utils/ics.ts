// Enhanced utility for generating ICS (iCalendar) files for calendar events

interface EventDetails {
  title: string;
  description?: string;
  location?: string;
  startDate: Date;
  endDate: Date;
  url?: string;
}

// Legacy interface for backward compatibility
interface LegacyEventDetails {
  title: string;
  start: Date;
  end: Date;
  location?: string;
}

export function generateICS(event: EventDetails): string {
  const formatDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const escapeText = (text: string): string => {
    return text
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\n/g, '\\n');
  };

  const now = new Date();
  const uid = `${Date.now()}@wedding-website.com`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding Website//Wedding Event//EN',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${formatDate(now)}`,
    `DTSTART:${formatDate(event.startDate)}`,
    `DTEND:${formatDate(event.endDate)}`,
    `SUMMARY:${escapeText(event.title)}`,
  ];

  if (event.description) {
    icsContent.push(`DESCRIPTION:${escapeText(event.description)}`);
  }

  if (event.location) {
    icsContent.push(`LOCATION:${escapeText(event.location)}`);
  }

  if (event.url) {
    icsContent.push(`URL:${event.url}`);
  }

  icsContent.push(
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  );

  return icsContent.join('\r\n');
}

export function downloadICSFromEvent(event: EventDetails, filename?: string): void {
  const icsContent = generateICS(event);
  const blob = new Blob([icsContent], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename || `${event.title.replace(/\s+/g, '-').toLowerCase()}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Legacy function for backward compatibility
export function downloadICS({ title, start, end, location }: LegacyEventDetails) {
  const pad = (n: number) => String(n).padStart(2, '0');
  const fmt = (d: Date) => 
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;
  
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//BJ Wedding//EN',
    'BEGIN:VEVENT',
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${title}`,
    location ? `LOCATION:${location}` : '',
    'END:VEVENT',
    'END:VCALENDAR'
  ].filter(Boolean).join('\r\n');
  
  const blob = new Blob([ics], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${title}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

// Helper function to create wedding ceremony event
export function createCeremonyEvent(weddingDate: string, ceremonyTime: string, venue: { name: string; address: string }): EventDetails {
  const [year, month, day] = weddingDate.split('-').map(Number);
  const [time, period] = ceremonyTime.split(' ');
  const [hours, minutes] = time.split(':').map(Number);
  
  let hour24 = hours;
  if (period === 'PM' && hours !== 12) hour24 += 12;
  if (period === 'AM' && hours === 12) hour24 = 0;

  const startDate = new Date(year, month - 1, day, hour24, minutes);
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour duration

  return {
    title: 'Wedding Ceremony - Brynd & Joanna',
    description: 'Join us as we exchange vows and begin our journey together.',
    location: `${venue.name}, ${venue.address}`,
    startDate,
    endDate
  };
}

// Helper function to create wedding reception event  
export function createReceptionEvent(weddingDate: string, receptionTime: string, venue: { name: string; address: string }): EventDetails {
  const [year, month, day] = weddingDate.split('-').map(Number);
  const [time, period] = receptionTime.split(' ');
  const [hours, minutes] = time.split(':').map(Number);
  
  let hour24 = hours;
  if (period === 'PM' && hours !== 12) hour24 += 12;
  if (period === 'AM' && hours === 12) hour24 = 0;

  const startDate = new Date(year, month - 1, day, hour24, minutes);
  const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000); // 4 hour duration

  return {
    title: 'Wedding Reception - Brynd & Joanna',
    description: 'Join us for cocktails, dinner, dancing, and celebration!',
    location: `${venue.name}, ${venue.address}`,
    startDate,
    endDate
  };
}