import React, { useState } from 'react';

const FileInput = ({ onFileSelected }) => {
  const [previewImageUrl, setPreviewImageUrl] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    onFileSelected(selectedFile);

    // Create a preview URL for the selected image
    setPreviewImageUrl(URL.createObjectURL(selectedFile));
  };

  return (
    <div className="bg-indigo-900 h-80 flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gradient-to-b from-custom-gradient via-custom-gradient-alt to-custom-gradient-alt-2 dark:bg-indigo-900 hover:bg-indigo-800 dark:border-indigo-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-800"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-indigo-800 dark:text-gray-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-indigo-800 dark:text-gray-100">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            id="dropzone-file"
            className="hidden"
          />
          {previewImageUrl && (
            <img
              src={previewImageUrl}
              alt="Preview"
              className="w-32 h-32 mt-2 rounded-md border border-gray-300"
            />
          )}
          <p className="text-xs text-indigo-800 dark:text-gray-100">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
      </label>
    </div>
  );
};

export default FileInput;
