function HistoryPanel({ history }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Translation History
      </h2>

      {history.length === 0 ? (
        <p className="text-gray-500">
          No translations yet.
        </p>
      ) : (
        <ul className="space-y-2">
          {history.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b border-gray-100 py-2"
            >
              <span className="text-gray-700">
                {item}
              </span>

              <span className="text-xs text-gray-400">
                #{history.length - index}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HistoryPanel;