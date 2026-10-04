import { useState } from "react";

const HideShow = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2>Hide and Show</h2>

      {isVisible && <p>This is the content to hide and show.</p>}

      <button onClick={toggleContent}>
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default HideShow;