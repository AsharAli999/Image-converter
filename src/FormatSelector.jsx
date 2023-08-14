import React from 'react';

const FormatSelector = ({ onFormatSelected }) => {
  const formats = ['png', 'jpg', 'wmf', 'webp', 'tiff', 'svg', 'bmp', 'pdf', 'gif'];

  const handleFormatChange = (event) => {
    const selectedFormat = event.target.value;
    onFormatSelected(selectedFormat);
  };

  return (
    <div className="my-4 mt-14">
      <label className="block text-sm font-medium text-gray-700">Select Format:</label>
      <div className="relative">
        <select
          onChange={handleFormatChange}
          className="mt-1 block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-700 focus:border-indigo-700"
        >
          <option value="">Select Format</option>
          {formats.map((format) => (
            <option key={format} value={format}>
              {format}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FormatSelector;
