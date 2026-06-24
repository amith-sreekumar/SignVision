import { useState } from "react";

import Header from "./components/Header";
import CameraFeed from "./components/CameraFeed";
import TranslationCard from "./components/TranslationCard";
import ConfidenceBar from "./components/ConfidenceBar";
import Controls from "./components/Controls";
import HistoryPanel from "./components/HistoryPanel";
import StatusPanel from "./components/StatusPanel";

function App() {
  const [translation, setTranslation] = useState(
    "Press Start to begin translation"
  );

  const [cameraOn, setCameraOn] = useState(true);

  const [confidence, setConfidence] = useState(92);

  const [history, setHistory] = useState([]);

  const [isProcessing, setIsProcessing] = useState(false);

  const handleStart = () => {
    setIsProcessing(true);

    setTranslation("Analyzing Hand Gesture...");

    setTimeout(() => {
      const translations = [
        "Hello",
        "Thank You",
        "Good Morning",
        "Welcome",
        "How Are You?",
      ];

      const randomText =
        translations[
          Math.floor(Math.random() * translations.length)
        ];

      const randomConfidence =
        Math.floor(Math.random() * 15) + 85;

      setTranslation(randomText);

      setConfidence(randomConfidence);

      setHistory((prev) => [
        randomText,
        ...prev,
      ]);

      setIsProcessing(false);
    }, 2000);
  };

  const handleStop = () => {
    setTranslation("Translation Stopped");
    setIsProcessing(false);
  };

  const handleSpeak = () => {
    const speech =
      new SpeechSynthesisUtterance(translation);

    speechSynthesis.speak(speech);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 p-6">
        <CameraFeed
          cameraOn={cameraOn}
          setCameraOn={setCameraOn}
        />

        <div className="space-y-4">
          <TranslationCard text={translation} />

          <StatusPanel
            cameraOn={cameraOn}
            translation={translation}
            isProcessing={isProcessing}
          />

          <ConfidenceBar confidence={confidence} />

          <Controls
            onStart={handleStart}
            onStop={handleStop}
            onSpeak={handleSpeak}
          />

          <HistoryPanel history={history} />
        </div>
      </main>
    </div>
  );
}

export default App;