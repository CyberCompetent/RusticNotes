import React from 'react';

const SettingsButton: React.FC = () => {
  return (
    <button
      id="settings-button"
      className="bg-gray-800 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-700"
    >
      ⚙️ Settings
    </button>
  );
};

export default SettingsButton;
