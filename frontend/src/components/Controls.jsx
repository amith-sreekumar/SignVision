function Controls({
  onStart,
  onStop,
  onSpeak,
}) {
  return (
    <div className="flex gap-3">

      <button
        onClick={onStart}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
      >
        Start Translation
      </button>

      <button
        onClick={onStop}
        className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-lg"
      >
        Stop
      </button>

      <button
        onClick={onSpeak}
        className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg"
      >
        Speak
      </button>

    </div>
  );
}

export default Controls;