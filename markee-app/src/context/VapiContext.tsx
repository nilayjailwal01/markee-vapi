import React, { createContext, useMemo, useState, useEffect } from "react";
import Vapi, { VapiError } from "@vapi-ai/web";

export type VapiContextType = {
  isSpeaking: boolean;
  handleSpeak: () => void;
  handleStop: () => void;
};

export const VapiContext = createContext<VapiContextType | undefined>(undefined);

export const VapiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const vapi = useMemo(() => {
    const key = process.env.REACT_APP_VAPI_PUBLIC_KEY;
    if (!key) {
      throw new Error("Missing VAPI public key");
    }
    return new Vapi(key);
  }, []);

  const handleSpeak = () => {
    const assistantId = process.env.REACT_APP_VAPI_ASSISTANT_ID;
    if (!assistantId) {
      alert("Missing assistant ID");
      return;
    }
    setIsSpeaking(true);
    vapi.start(assistantId);
  };

  const handleStop = () => {
    setIsSpeaking(false);
    vapi.stop();
  };

  useEffect(() => {
    vapi.on("call-end", () => setIsSpeaking(false));
    vapi.on("error", (e: VapiError) => {
      setIsSpeaking(false);
      alert("VAPI error: " + (e?.message || "Unknown error"));
    });
  }, [vapi]);

  return (
    <VapiContext.Provider value={{ isSpeaking, handleSpeak, handleStop }}>
      {children}
    </VapiContext.Provider>
  );
}; 