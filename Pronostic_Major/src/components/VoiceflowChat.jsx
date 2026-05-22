import { useEffect } from "react";

const PROJECT_ID = "6a0db47e33cfe6deb8823f8c";

export default function VoiceflowChat() {
  useEffect(() => {
    if (window.voiceflow?.chat) return;
    if (document.getElementById("voiceflow-script")) return;

    const script = document.createElement("script");
    script.id = "voiceflow-script";
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: PROJECT_ID },
        url: "https://general-runtime.voiceflow.com",
        voice: { url: "https://runtime-api.voiceflow.com" },
      });
    };

    document.body.appendChild(script);
  }, []);

  return null;
}