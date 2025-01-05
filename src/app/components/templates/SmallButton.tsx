import React from 'react';

interface SmallButtonProps {
  id: string;
  svg?: string;  // Optional svg prop
  children: React.ReactNode;
}

const SmallButton: React.FC<SmallButtonProps> = ({ id, svg, children }) => {
  return (
    <button
      id={id}
      className="bg-gray-800 text-white py-2 px-4 rounded-lg flex items-center gap-2"
    >
      {svg && <span className="material-icons text-xl">{svg}</span>} {/* Conditionally render the SVG if provided */}
      {children}
    </button>
  );
};

export default SmallButton;
