import React, { useState, useEffect } from 'react';
import Editor, { loader } from '@monaco-editor/react';
import { useLocation } from 'react-router-dom';
// Configure Monaco Editor loader
loader.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' } });

function JavaScriptRunner() {
  const location = useLocation();
  const { initialCode } = location.state || {};
  const defaultCode = '// Write JavaScript here\nconsole.log("Hello, World!");';
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
    }
  }, [initialCode]);

  const runCode = () => {
    try {
      // Capture console.log output
      const log = console.log;
      let outputBuffer = '';
      console.log = (...args) => {
        outputBuffer += args.join(' ') + '\n';
        log(...args);
      };
      
      // Run the code
      new Function(code)();
      setOutput(outputBuffer);
      console.log = log;
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto mb-4 sm:mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500  mb-2 sm:mb-3">JavaScript Playground</h1>
      </div>

      <div className="max-w-7xl mx-auto h-[calc(100vh-180px)] grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {/* Editor Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200">
            <h2 className="text-gray-700 font-medium">Code Editor</h2>
          </div>
          <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              value={code}
              onChange={(newValue) => setCode(newValue || '')}
              theme="vs-light"
              options={{
                fontSize: 14,
                fontFamily: 'JetBrains Mono, monospace',
                formatOnType: true,
                formatOnPaste: true,
                suggestOnTriggerCharacters: true,
                autoClosingBrackets: "always",
                wordWrap: "on",
                minimap: { 
                  enabled: true,
                  scale: 0.75,
                  showSlider: "mouseover"
                },
                scrollBeyondLastLine: false,
                lineNumbers: "on",
                folding: true,
                renderLineHighlight: "all",
                padding: { top: 12, bottom: 12 },
                lineHeight: 22,
                scrollbar: {
                  vertical: 'visible',
                  horizontal: 'visible',
                  useShadows: false,
                  verticalScrollbarSize: 10,
                  horizontalScrollbarSize: 10
                }
              }}
              loading={
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
              }
            />
          </div>
        </div>

        {/* Output Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200 flex justify-between items-center flex-wrap gap-2">
            <h2 className="text-gray-700 font-medium">Console Output</h2>
            <button 
              onClick={runCode}
              className="px-3 sm:px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                       transition-colors duration-200 flex items-center gap-2 text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="hidden sm:inline">Run Code</span>
            </button>
          </div>
          <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] p-4 sm:p-6 overflow-auto bg-gray-50">
            <pre className="font-mono text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
              {output || "// Output will appear here after running your code..."}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

JavaScriptRunner.defaultProps = {
  initialCode: null
};

export default JavaScriptRunner;
