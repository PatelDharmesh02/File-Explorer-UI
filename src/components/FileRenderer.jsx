import { useState } from "react";

const FileRenderer = (props) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      {props.isFolder ? (
        <div
          className={`folder pl-4 h-5 w-full flex items-center gap-2 cursor-pointer rounded-xl ${
            props?.activeFile?.name === props.name ? "bg-blue-500" : ""
          }`}
          onClick={() => {
            setExpand(!expand);
            props.setActiveFile(props);
          }}
        >
          <span
            className={`border-r-2 border-r-black border-t-2 border-t-black transition-transform duration-200 cursor-pointer w-[10px] h-[10px] ${
              expand ? "rotate-[135deg] mb-1" : "rotate-[45deg]"
            }
        }]`}
          ></span>
          <p
            className={`cursor-pointer`}
            onClick={() => props.setActiveFile(props)}
          >
            {props.name || "Folder"}
          </p>
        </div>
      ) : (
        <p
          className={`pl-4 cursor-pointer rounded-xl ${
            props?.activeFile?.name === props.name ? "bg-blue-500" : ""
          }`}
          onClick={() => props.setActiveFile(props)}
        >
          {props.name || "File"}
        </p>
      )}
      {expand &&
        props.isFolder &&
        props.children.map((child, index) => (
          <div className={`children-${index + 1} pl-4 flex flex-col`}>
            <FileRenderer
              key={child.name}
              {...child}
              parent={props.name}
              activeFile={props.activeFile}
              setActiveFile={props.setActiveFile}
            />
          </div>
        ))}
    </>
  );
};

export default FileRenderer;
