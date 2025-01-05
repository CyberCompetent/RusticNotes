import React from 'react';

interface SmallButtonProps {
  id: string;
  svg?: string;  // Optional svg prop
  children: React.ReactNode;
  onClick?: () => void; // Optional onClick handler
  isActive?: boolean; // Optional isActive prop for conditional styling
  className?: string; // Optional className for custom styling
}

const SmallButton: React.FC<SmallButtonProps> = ({ id, svg, children, onClick, isActive = false, className = '' }) => {
  return (
    <button
      id={id}
      className={`text-white py-2 px-2 rounded-lg flex items-center gap-2 ${isActive ? 'bg-gray-900 hover:bg-black' : 'bg-gray-700 hover:bg-gray-800'} ${className}`}
      onClick={onClick}
    >
      {svg && <span className="material-icons text-xl">{svg}</span>} {/* Conditionally render the SVG if provided */}
      {children}
    </button>
  );
};

export default SmallButton;