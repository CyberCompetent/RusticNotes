'use client';
import React, { useState } from "react";
import FileItem from "./templates/FileItem"; // Import the new component

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
      { name: "Example Note Page", type: "note", children: [] },
    ],
  },
  {
    name: "School Workspace",
    type: "workspace",
    children: [
      { name: "Example Note Page", type: "note", children: [] },
    ],
  },
  {
    name: "Friends Workspace",
    type: "workspace",
    children: [
      { name: "Example Note Page", type: "note", children: [] },
    ],
  },
];

const FileTree: React.FC = () => {
  // Recursively render the file tree
  const renderFileTree = (files: File[]) => (
    <ul className="list-none">
      {files.map((file, index) => (
        <FileTreeNode key={index} file={file} />
      ))}
    </ul>
  );

  return (
    <div className="p-5 overflow-y-auto">
      {renderFileTree(fileTreeData)}
    </div>
  );
};

const FileTreeNode: React.FC<{ file: File }> = ({ file }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Updated toggleExpand to match the expected type
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <li>
      {/* Pass the toggleExpand handler and expanded state to FileItem */}
      <FileItem
        file={file}
        onToggleExpand={toggleExpand} // Matches the type () => void
        isExpanded={isExpanded}
      />
      {file.children && isExpanded && (
        <ul className="pl-4">
          {file.children.map((child, index) => (
            <FileTreeNode key={index} file={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default FileTree;
