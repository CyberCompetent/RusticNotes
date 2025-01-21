import React from 'react';
import SmallButtonTemplate from './SmallButtonTemplate'; // Adjust the import path as needed

interface SmallButtonProps {
  id: string;
  buttons?: "plus" | "option" | "plus option" | "option plus";  // Control which icons to render
  svg: string;  // Always shown on the left
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  hover?: boolean;  // NEW: Optional hover prop to control hover effect
}

const SmallButton: React.FC<SmallButtonProps> = ({
  id,
  buttons,
  svg,
  children,
  onClick,
  isActive = false,
  className = '',
  hover = true,  // Default to true
}) => {
  // Determine the icons to render on the right side
  const renderIcons = () => {
    if (buttons) {
      const icons = buttons.split(" ");
      return (
        <>
          {icons.includes("plus") && <span
            className="material-icons rounded hover:bg-gray-700 mx-2"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Add clicked for:", file.name);
            }}
          >
            add
          </span>}
          {icons.includes("option") && <span
            className="material-icons rounded hover:bg-gray-700"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Menu clicked for:", file.name);
            }}
          >
            more_vert
          </span>}
        </>
      );
    }
    return null;
  };

  return (
    <SmallButtonTemplate
      id={id}
      svg={svg}
      onClick={onClick}
      isActive={isActive}
      className={className}
      hover={hover}  // Pass the hover prop down to the template
    >
      {children}
      {renderIcons()} {/* Additional icons appended after children */}
    </SmallButtonTemplate>
  );
};

export default SmallButton;
