import React, { useState } from "react";
import FileRenderer from "./components/FileRenderer";
import addFolder from "./assets/folder.svg";
import addFile from "./assets/file.svg";
import { data } from "./data";
const App = () => {
  const [activeFile, setActiveFile] = useState(null);
  return (
    <>
      <h1 className="text-3xl text-center font-bold fixed left-1/5 border-b-2 border-b-black w-4/5">File Explorer</h1>
      <div className="file-explorer flex">
        <div className="h-[100vh] w-1/5 bg-gray-400 flex flex-col gap-4 pt-2">
          <div className="action-buttons w-full h-6 flex items-center gap-4 justify-end p-4">
            <button className="h-6 text-white cursor-pointer flex gap-1">
              <img src={addFolder} />
            </button>
            <button className="h-6 text-white cursor-pointer flex gap-1">
              <img src={addFile} />
            </button>
          </div>
          <div className="folder-container flex flex-col">
            {data.map((folder) => (
              <FileRenderer
                key={folder.name}
                {...folder}
                activeFile={activeFile}
                setActiveFile={setActiveFile}
              />
            ))}
          </div>
        </div>
        {activeFile && !activeFile?.isFolder && (
          <div className="h-[100vh] w-4/5 flex justify-center items-center gap-4 pt-2 text-xl text-center font-bold">
            Contents of {activeFile?.name} file.
          </div>
        )}
      </div>
    </>
  );
};

export default App;
