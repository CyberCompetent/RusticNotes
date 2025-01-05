import SettingsButton from './components/SettingsButton';
import SelectModeButton from './components/SelectModeButton';
import SortButton from './components/SortButton';
export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen">{/*BODY*/}
      <div className="w-64 bg-gray-600 text-white flex flex-col box-border">{/*side bar*/}
        <div className="p-5 box-border bg-gray-700 flex flex-col gap-2 flex-shrink-0">{/*Controls container*/}
          <SettingsButton />
          <SortButton />
        </div>
      </div>
    </div>
  );
}
{/*File-tree-container*/}          <SelectModeButton />
