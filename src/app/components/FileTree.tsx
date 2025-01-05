'use client'; // Add this at the very top of your file
import React, { useState } from "react";

type File = {
  name: string;
  type: "workspace" | "note";
  children?: File[];
};

const fileTreeData: File[] = [
  {
    name: "Private Workspace",
    type: "workspace",
    children: [
      {
        name: "Example Note Page",
        type: "note",
        children: [{ name: "Example Note Page", type: "note", children: [] }],
      },
    ],
  },
  {
    name: "School Workspace",
    type: "workspace",
    children: [
      {
        name: "Example Note Page",
        type: "note",
        children: [{ name: "Example Note Page", type: "note", children: [] }],
      },
    ],
  },
  {
    name: "Friends Workspace",
    type: "workspace",
    children: [
      {
        name: "Example Note Page",
        type: "note",
        children: [{ name: "Example Note Page", type: "note", children: [] }],
      },
    ],
  },
];

const FileTree: React.FC = () => {
  const renderFileTree = (files: File[]) => {
    return (
      <ul className="list-none">
        {files.map((file, index) => (
          <FileTreeNode key={index} file={file} />
        ))}
      </ul>
    );
  };

  return (
    <div className="p-5 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">File Tree</h2>
      <div className="file-tree">{renderFileTree(fileTreeData)}</div>
    </div>
  );
};

const FileTreeNode: React.FC<{ file: File }> = ({ file }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <li>
      <div
        className="file-item flex items-center cursor-pointer p-2 rounded hover:bg-gray-300 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Arrow Icon */}
        {file.children && file.children.length > 0 && isHovered && (
          <span
            className={`material-icons hover:text-gray-700 transform transition-transform ${
              isExpanded ? "rotate-90" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand();
            }}
          >
            keyboard_arrow_right
          </span>
        )}

        {/* Workspace Icon */}
        {file.type === "workspace" && !(isHovered && file.children?.length > 0) && (
          <span className="material-icons text-xl transition-opacity">
            workspaces
          </span>
        )}

        {/* Note Icon */}
        {file.type === "note" && !(isHovered && file.children?.length > 0) && (
          <span className="material-icons text-xl transition-opacity">
            description
          </span>
        )}

        {/* File Name */}
        <span
          className="ml-2 flex-grow truncate"
          title={file.name} // Tooltip for full name on hover
        >
          {file.name}
        </span>

        {/* Plus Icon */}
        {isHovered && (
          <span
            className="material-icons hover:text-gray-700 mx-2"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Add clicked for:", file.name);
            }}
          >
            add
          </span>
        )}

        {/* Menu Icon */}
        {isHovered && (
          <span
            className="material-icons hover:text-gray-700"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Menu clicked for:", file.name);
            }}
          >
            more_vert
          </span>
        )}
      </div>

      {/* Children */}
      {file.children && isExpanded && (
        <ul className="pl-2">
          {file.children.map((child, index) => (
            <FileTreeNode key={index} file={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default FileTree;
