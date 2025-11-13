import React from 'react';

const CharacterTest: React.FC = () => {
  if (import.meta.env.PROD) return null;

  const testCharacters = [
    { name: 'Ampersand', char: '&', code: '&amp;' },
    { name: 'Copyright', char: '©', code: '&copy;' },
    { name: 'Trademark', char: '™', code: '&trade;' },
    { name: 'Em Dash', char: '—', code: '&mdash;' },
    { name: 'Quote Left', char: '"', code: '&ldquo;' },
    { name: 'Quote Right', char: '"', code: '&rdquo;' },
    { name: 'Apostrophe', char: "'", code: '&rsquo;' },
    { name: 'Spanish N', char: 'n', code: '&ntilde;' },
    { name: 'A with tilde', char: 'a', code: '&atilde;' },
  ];

  return (
    <div className="fixed bottom-4 left-4 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <h4 className="font-bold mb-2">Character Encoding Test</h4>
      <div className="text-xs space-y-1">
        {testCharacters.map((test, index) => (
          <div key={index} className="flex justify-between">
            <span>{test.name}:</span>
            <span className="font-mono">{test.char}</span>
          </div>
        ))}
      </div>
      <p className="text-xs mt-2 text-gray-600">
        Document charset: {document.characterSet}
      </p>
    </div>
  );
};

export default CharacterTest;