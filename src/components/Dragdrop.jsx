import { styles } from "../styles";

const DragAndDrop = () => {
  const handleFileInput = () => {};

  return (
    <div className="border-4 border-dashed rounded-lg flex flex-col items-center justify-center h-96">
      <h1 className={`${styles.heroSubText} mb-4 cursor-pointer`}>
        <label className="text-white">
          Choose a file <input type="file" className="sr-only" onClick={handleFileInput} />
        </label>
        or drag it here
      </h1>
    </div>
  );
};

export default DragAndDrop;
