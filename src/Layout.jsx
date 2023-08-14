import React, { useState } from 'react';
import FileInput from './FileInput';
import FormatSelector from './FormatSelector';
import Preview from './Preview';

const Layout = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [convertedImageUrl, setConvertedImageUrl] = useState('');

  const handleFileSelected = (file) => {
    setSelectedFile(file);
    setImageUrl(URL.createObjectURL(file));
    setConvertedImageUrl(''); // Clear converted image URL when new image is selected
  };

  const handleFormatSelected = (format) => {
    setSelectedFormat(format);
  };

  const handleConvert = async () => {
    if (selectedFile && selectedFormat) {
      // Simulate image conversion logic
      const convertedImageBlob = await convertImage(selectedFile);
      const convertedImageUrl = URL.createObjectURL(convertedImageBlob);
      setConvertedImageUrl(convertedImageUrl);
    } else {
      alert('Please select a file and a format');
    }
  };

  const convertImage = async (file) => {
    // Simulate image conversion logic
    const response = await fetch(URL.createObjectURL(file));
    const blob = await response.blob();
    return blob;
  };

  const handleDownloadConverted = () => {
    if (convertedImageUrl) {
      const a = document.createElement('a');
      a.href = convertedImageUrl;
      a.download = `converted.${selectedFormat}`;
      a.click();
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-24 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-center mb-4 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Image Format Converter</h1>
      <FileInput onFileSelected={handleFileSelected} />
      <FormatSelector onFormatSelected={handleFormatSelected} />
      <button
        className="bg-gradient-to-t from-custom-gradient via-custom-gradient-alt to-custom-gradient-alt-2 text-white py-2 px-4 rounded-md mt-4 hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={handleConvert}
      >
        Convert
      </button>
      {convertedImageUrl && (
        <div className="mt-4">
          <Preview imageUrl={convertedImageUrl} />
          <button
            className="bg-gradient-to-t from-custom-gradient via-custom-gradient-alt to-custom-gradient-alt-2 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
            onClick={handleDownloadConverted}
          >
            Download Converted Image
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
