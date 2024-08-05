export default function Content() {
    return (
        <div className="col-span-10 h-full flex justify-center flex-col overflow-hidden opacity-100 transform-none">
        <div className="w-full">
          <div className="grid grid-cols-12 border-b border-[#1E2D3D]">
            <div className="lg:col-span-3 md:col-span-6 col-span-12 text-white border-r border-[#1E2D3D] py-2.5 relative px-4">
              <button className="absolute top-1/2 -translate-y-1/2 right-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </button>
              <p>personal.js</p>
            </div>
          </div>
        </div>
        <div className="scrollbar-thin overflow-y-auto h-full">
          <div className="sc-gswNZR loHkWQ">
            <span className="code-block-pre-text">
              <code
                className="code-block-code-text flex flex-col"
              >
                <span className="react-syntax-highlighter-line-number">
                  1
                </span>
                <span className="react-syntax-highlighter-line-number">
                  2
                </span>
                <span className="react-syntax-highlighter-line-number">
                  3
                </span>
                <span className="react-syntax-highlighter-line-number">
                  4
                </span>
                <span className="react-syntax-highlighter-line-number">
                  5
                </span>
                <span className="react-syntax-highlighter-line-number">
                  6
                </span>
                <span className="react-syntax-highlighter-line-number">
                  7
                </span>
                <span className="react-syntax-highlighter-line-number">
                  8
                </span>
                <span className="react-syntax-highlighter-line-number">
                  9
                </span>
              </code>
              <code className="code-font flex flex-col">
                <div>
                  <span className="primary-code-text token">const</span>{" "}
                  name <span className="token operator">=</span>{" "}
                  <span className="general-code-text token">{`'James Roger'`}</span>
                </div>
                <div>
                  <span className="primary-code-text token">let</span>{" "}
                  location <span className="token operator">=</span>{" "}
                  <span className="general-code-text token token">{`'Ottawa, Canada'`}</span>
                </div>
                <div> </div>
                <div>
                  <span className="primary-code-text token">let</span>{" "}
                  hobbies <span className="token operator">=</span>{" "}
                  <span className="token punctuation">[</span>
                </div>
                <div>
                  <span className="general-code-text token token">
                    {" "}
                    {`"Game"`}
                  </span>
                </div>
                <div>
                  <span className="general-code-text token token">
                    {" "}
                    {`"Programming"`}
                  </span>
                  <span className="token punctuation">,</span>
                </div>
                <div>
                  <span className="general-code-text token token">
                    {" "}
                    {`"Eating food"`}
                  </span>
                  <span className="token punctuation">,</span>
                </div>
                <div>
                  <span className="general-code-text token token">
                    {" "}
                    {`"Baseketball"`}
                  </span>
                  <span className="token punctuation">,</span>
                </div>
                <div>
                  <span className="general-code-text token token punctuation">
                    ]
                  </span>
                </div>
              </code>
            </span>
            <button type="button" className="sc-bcXHqe iCXprV">
              <svg
                className="icon"
                viewBox="0 0 384 512"
                width="16pt"
                height="16pt"
                fill="#D8DEE9"
              >
                <path d="M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
}