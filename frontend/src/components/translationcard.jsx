function TranslationCard({ text }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        Translation
      </h2>

      <p className="text-lg text-gray-700">
        {text}
      </p>
    </div>
  );
}

export default TranslationCard;