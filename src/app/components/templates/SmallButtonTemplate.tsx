import React from 'react';

interface SmallButtonProps {
  id: string;
  svg?: string;  // Optional svg prop
  children: React.ReactNode;
  onClick?: () => void;  // Optional onClick handler
  isActive?: boolean;    // Optional isActive prop for conditional styling
  className?: string;    // Optional className for custom styling
  hover?: boolean;       // NEW: Optional hover prop to control hover effect
}

const SmallButton: React.FC<SmallButtonProps> = ({
  id,
  svg,
  children,
  onClick,
  isActive = false,
  className = '',
  hover = true,  // Default to true for backwards compatibility
}) => {
  // Conditionally apply hover classes
  const baseClass = isActive ? 'bg-gray-900' : 'bg-gray-700';
  const hoverClass = hover ? (isActive ? 'hover:bg-black' : 'hover:bg-gray-800') : '';

  return (
    <button
      id={id}
      className={`text-white py-2 px-2 rounded-lg flex items-center gap-2 ${baseClass} ${hoverClass} ${className}`}
      onClick={onClick}
    >
      {svg && <span className="material-icons text-xl">{svg}</span>}
      {children}
    </button>
  );
};

export default SmallButton;
