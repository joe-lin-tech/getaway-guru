import { useState } from 'react';
import { ClipboardCopyIcon } from '@heroicons/react/outline';

const ShareButton = ({ url }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        type="text"
        value={url}
        readOnly
      />
      <button
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={handleCopy}
      >
        <ClipboardCopyIcon className="h-5 w-5 mr-2" />
        Copy Link
      </button>
      {copySuccess && (
        <span className="text-green-500 font-medium">Copied!</span>
      )}
    </div>
  );
};

export default ShareButton;