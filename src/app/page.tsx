
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'




export default function HomePage() {
  return (
    <div className="flex h-screen font-sans"> {/* BODY */}
      <SideBar />
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
