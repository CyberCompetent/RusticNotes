import SettingsButton from './components/SettingsButton';

import FileTree from './components/FileTree';
import TopBar from './components/TopBar'

import SortButton from './components/SortButton';
import SearchBar from './components/SearchBar';



export default function HomePage() {
  return (
    <div className="flex h-screen font-sans"> {/* BODY */}
      <div className="w-64 bg-gray-600 text-white flex flex-col box-border"> {/* Sidebar */}
        <div className="p-5 bg-gray-700 flex flex-col gap-2 flex-shrink-0 box-border"> {/* Controls */}
          <SettingsButton /> {/* Settings Button */}
          <SortButton /> {/* Sort Button */}
          <SearchBar /> {/* Search Bar */}
        </div>
        <FileTree />
      </div>
      <div className="flex flex-col flex-grow"> {/* Main Content */}
        <TopBar />
        <div className="flex-grow p-0"> {/* Content Area */}
          <textarea
            className="w-full h-full p-4 text-base bg-gray-50 text-gray-800 border-none outline-none box-border"
            placeholder="Start writing your notes here..."
          ></textarea> {/* Note Editor */}
        </div>
      </div>
    </div>
  );
}
