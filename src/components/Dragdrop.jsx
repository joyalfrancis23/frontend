import { useState } from "react";

import { styles } from "../styles";

const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, index) => {
    setIsDragging(true);
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"));
    const itemsCopy = [...items];
    const draggedItem = itemsCopy[draggedIndex];
    itemsCopy.splice(draggedIndex, 1);
    itemsCopy.splice(index, 0, draggedItem);
    setItems(itemsCopy);
    setIsDragging(false);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDraggedItem(null);
  };

  return (
    <div className="border-4 border-dashed hover:border-solid rounded-lg flex flex-col items-center justify-center h-96">
      <h1 className={`${styles.heroSubText}mb-4`}>      
        <span className="text-white">Choose a file</span> or drag it here
      </h1>
    </div>
  );
};

export default DragAndDrop;
