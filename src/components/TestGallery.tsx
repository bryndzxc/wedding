import React from 'react';
import Section from '../ui/Section';

const TestGallery: React.FC = () => {
  return (
    <Section 
      id="test-gallery" 
      title="Test Gallery" 
      intro="Simple test gallery for iOS debugging"
      background="paper"
    >
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {/* Simple colored divs instead of images */}
        <div className="aspect-square bg-blue-300 rounded-lg flex items-center justify-center text-white font-bold">
          Test 1
        </div>
        <div className="aspect-square bg-green-300 rounded-lg flex items-center justify-center text-white font-bold">
          Test 2
        </div>
        <div className="aspect-square bg-red-300 rounded-lg flex items-center justify-center text-white font-bold">
          Test 3
        </div>
        <div className="aspect-square bg-yellow-300 rounded-lg flex items-center justify-center text-black font-bold">
          Test 4
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-bold mb-2">Simple Text Test</h3>
        <p>This is a simple text paragraph to test character rendering on iOS Safari.</p>
        <ul className="mt-2">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item with special chars: test</li>
        </ul>
      </div>
    </Section>
  );
};

export default TestGallery;