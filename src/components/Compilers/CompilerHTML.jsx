import React, { useState, useEffect, useRef } from 'react';
import Editor, { loader } from '@monaco-editor/react';

// Configure Monaco Editor loader
loader.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' } });

function CompilerHTML() {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live HTML Editor</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a live preview of HTML, CSS, and JavaScript.</p>
  </body>
</html>
`);

  const iframeRef = useRef(null);

  const generatePreview = () => {
    const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(code);
    iframeDocument.close();
  };

  useEffect(() => {
    generatePreview();
  }, [code]);

  useEffect(() => {
    loader.init().then(() => {
      console.log("Monaco Editor initialized.");
    });
  }, []);

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Live HTML Editor</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <div className="bg-gray-800 rounded-t-lg p-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-3 text-gray-300 text-sm">HTML Editor</span>
            </div>
          </div>
          <Editor
            height="70vh"
            defaultLanguage="html"
            value={code}
            onChange={(newValue) => setCode(newValue || '')}
            theme="vs-dark"
            options={{
              formatOnType: true,
              formatOnPaste: true,
              suggestOnTriggerCharacters: true,
              autoClosingBrackets: "always",
              wordWrap: "on",
              minimap: { enabled: false },
              fontSize: 14,
              lineHeight: 24,
              padding: { top: 16 }
            }}
            loading={
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            }
          />
        </div>
        <div className="lg:w-1/2">
          <div className="bg-white rounded-t-lg p-3 border-b border-gray-200">
            <div className="flex items-center">
              <span className="text-gray-700 font-medium">Live Preview</span>
              <button 
                onClick={generatePreview}
                className="ml-auto px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm transition-colors"
              >
                Refresh
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-b-lg bg-white">
            <iframe
              ref={iframeRef}
              title="Output"
              sandbox="allow-scripts allow-same-origin"
              className="w-full h-[70vh] rounded-b-lg"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompilerHTML;
