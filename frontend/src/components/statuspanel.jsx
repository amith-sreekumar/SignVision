function StatusPanel({
  cameraOn,
  translation,
  isProcessing,
}) {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        System Status
      </h2>

      <div className="space-y-4">

        {/* Camera Status */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">
            Camera
          </span>

          <span className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full ${
                cameraOn ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>

            <span
              className={
                cameraOn
                  ? "text-green-600 font-medium"
                  : "text-red-600 font-medium"
              }
            >
              {cameraOn ? "Active" : "Disabled"}
            </span>
          </span>
        </div>

        {/* AI Model Status */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">
            AI Model
          </span>

          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>

            <span className="text-green-600 font-medium">
              Ready
            </span>
          </span>
        </div>

        {/* Prediction Status */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">
            Prediction
          </span>

          <span className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full ${
                isProcessing
                  ? "bg-orange-500"
                  : "bg-blue-500"
              }`}
            ></span>

            <span
              className={
                isProcessing
                  ? "text-orange-600 font-medium"
                  : "text-blue-600 font-medium"
              }
            >
              {isProcessing
                ? "Processing..."
                : "Completed"}
            </span>
          </span>
        </div>

        {/* Translation Service Status */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">
            Translation
          </span>

          <span className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full ${
                translation === "Translation Stopped"
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
            ></span>

            <span
              className={
                translation === "Translation Stopped"
                  ? "text-red-600 font-medium"
                  : "text-green-600 font-medium"
              }
            >
              {translation === "Translation Stopped"
                ? "Stopped"
                : "Running"}
            </span>
          </span>
        </div>

      </div>
    </div>
  );
}

export default StatusPanel;