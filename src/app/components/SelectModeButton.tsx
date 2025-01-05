import React from 'react';
import SmallButton from './templates/SmallButton'; // Import the SmallButton component

const exportee: React.FC = () => {
  return (
    <SmallButton id="select-mode-button" svg="select_all">Select Mode
    </SmallButton>
  );
};

export default exportee;
