import React, { useContext } from "react";
import { VapiContext, VapiContextType } from "../../context/VapiContext";
import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";

const VapiButton: React.FC = () => {
  const context = useContext(VapiContext);
  if (!context) {
    throw new Error("VapiButton must be used within a VapiProvider");
  }
  const { isSpeaking, handleSpeak, handleStop } = context;

  return (
    <>
      <button
        className="floating-button"
        onClick={isSpeaking ? handleStop : handleSpeak}
        style={{ bottom: "100px", background: "#9d3ba2" }}
      >
        {isSpeaking ? <PauseIcon /> : <PlayIcon scale={2} />}
      </button>
    </>
  );
};

export default VapiButton;
