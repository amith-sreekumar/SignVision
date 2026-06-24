function ConfidenceBar({ confidence }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Recognition Confidence
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${confidence}%` }}
        ></div>
      </div>

      <div className="flex justify-between mt-3">
        <span className="text-sm text-gray-500">
          Model Accuracy
        </span>

        <span className="font-semibold text-blue-600">
          {confidence}%
        </span>
      </div>
    </div>
  );
}

export default ConfidenceBar;