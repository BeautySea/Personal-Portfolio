export default function Sidebar() {
    return (
        <div className="col-span-2 grid lg:grid-cols-6">
        <div className="col-span-6 lg:border-r lg:border-b-0 border-b border-[#1E2D3D] text-white gap-2.5 relative overflow-hidden">
          <div data-headlessui-state>
            <div className="relative">
              <button
                className="text-white flex items-center gap-2.5 border-b border-[#1E2D3D] py-2.5 px-4 w-full"
                id="headlessui-popover-button-:r2d:"
                type="button"
                aria-expanded="false"
                data-headlessui-state
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 12 16"
                  className="transition-all"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"></path>
                </svg>
                <span className="text-left pr-5 truncate">
                  Personal info
                </span>
              </button>
              <button className="absolute top-1/2 -translate-y-1/2 right-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 9H4v1h5V9z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <div
                className="px-4 text-white py-4"
                id="headlessui-popover-panel-:r2e:"
                data-headlessui-state
              >
                <div className="flex flex-col gap-1.5">
                  <div data-headlessui-state>
                    <button
                      className="text-white flex items-center gap-2.5 w-full transition-colors"
                      id="headlessui-popover-button-:r2i:"
                      type="button"
                      aria-expanded="false"
                      data-headlessui-state
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 20 20"
                        className="rotate-90 transition-all"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="text-[#E99287] transition-colors"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M22 8v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7h19a1 1 0 0 1 1 1zm-9.586-3H2V4a1 1 0 0 1 1-1h7.414l2 2z"></path>
                        </g>
                      </svg>
                      <span className="pr-5 truncate">bio</span>
                    </button>
                    <div className="flex flex-col">
                      <button
                        className="px-4 my-1 ml-2.5 inline-flex items-center gap-2.5 transition-colors text-white"
                        id="headlessui-popover-panel-:r2j:"
                        data-headlessui-state
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"></path>
                        </svg>
                        <span className="truncate">personal.js</span>
                      </button>
                      <button
                        className="px-4 my-1 ml-2.5 inline-flex items-center gap-2.5 transition-colors text-[#607B96]"
                        id="headlessui-popover-panel-:r2j:"
                        data-headlessui-state=""
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"></path>
                        </svg>
                        <span className="truncate">skill.js</span>
                      </button>
                      <button
                        className="px-4 my-1 ml-2.5 inline-flex items-center gap-2.5 transition-colors text-[#607B96]"
                        id="headlessui-popover-panel-:r2j:"
                        data-headlessui-state
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          role="img"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title></title>
                          <path d="M22.269 19.385H1.731a1.73 1.73 0 0 1-1.73-1.73V6.345a1.73 1.73 0 0 1 1.73-1.73h20.538a1.73 1.73 0 0 1 1.73 1.73v11.308a1.73 1.73 0 0 1-1.73 1.731zm-16.5-3.462v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.461v7.847zM21.231 12h-2.308V8.077h-2.307V12h-2.308l3.461 4.039z"></path>
                        </svg>
                        <span className="truncate">work.md</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}