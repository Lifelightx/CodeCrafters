import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
function Section({ id = '', topic, content, code = null, language}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id={`${id.toLowerCase()}`} className="mb-4">
      <h2 className="text-xl font-bold mb-4 text-blue-800 font-quicksand">{topic}</h2>
      <p className='font-montserrat text-lg text-gray-900'>
      {content?content.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        )):null}
      </p>
      {code ? (
        <div className="relative">
          <SyntaxHighlighter language={`${language}`}  className="rounded-lg">
            {code}
          </SyntaxHighlighter>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-slate-700 text-white px-2 py-1 rounded text-sm"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      ) : null}
      <hr className='my-2'/>
    </section>
  )
}

export default Section
