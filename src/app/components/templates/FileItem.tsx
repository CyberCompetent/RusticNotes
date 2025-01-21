import React, { useState } from "react";
import SmallButton from "./SmallButton"; // Adjust the import path if necessary

interface FileItemProps {
  file: {
    name: string;
    type: "workspace" | "note";
    children?: FileItemProps["file"][];
  };
  onToggleExpand?: () => void;
  isExpanded?: boolean;
}

const FileItem: React.FC<FileItemProps> = ({ file, onToggleExpand, isExpanded = false }) => {
  const [isHovered, setIsHovered] = useState(false); // Hover state
  const [isArrowRotated, setIsArrowRotated] = useState(isExpanded); // Arrow rotation state

  const fileIcon = file.type === "workspace" ? "workspaces" : "description";
  const arrowIcon = isArrowRotated ? "keyboard_arrow_down" : "keyboard_arrow_right";

  const handleArrowClick = () => {
    setIsArrowRotated((prev) => !prev); // Toggle the rotation state
    onToggleExpand?.(); // Trigger parent callback to show/hide children
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative" // Ensure that the parent div is set to relative to control positioning of inner elements
    >
      <SmallButton
        id={`file-${file.name}`}
        svg={isHovered ? arrowIcon : fileIcon} // Show arrow on hover, file icon otherwise
        onClick={() => handleArrowClick()} // Use an inline function to call handleArrowClick without arguments
        isActive={isExpanded}
        hover
        buttons={isHovered ? "plus option" : undefined} // Show icons only on hover
        className="w-full text-left p-2 flex items-center justify-between"
      >
        {/* File name - truncates only on hover */}
        <span
          className={`ml-2 flex-grow transition-all duration-200 ${isHovered ? "truncate" : ""}`}
          title={file.name}
        >
          {file.name}
        </span>
      </SmallButton>

      {/* Children - only visible when expanded */}
      {file.children && isExpanded && (
        <ul className="pl-4">
          {file.children.map((child, index) => (
            <FileItem key={index} file={child} onToggleExpand={onToggleExpand} isExpanded={isExpanded} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileItem;
