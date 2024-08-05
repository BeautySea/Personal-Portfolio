import Image from "next/image";

export default function Home() {
  return (
    <main className="self-center h-full w-full overflow-hidden">
    <div
      className="w-full h-full bg-radial bg-no-repeat bg-right bg-cover"
    >
      <div
        className="flex items-center justify-center h-full max-w-7xl mx-auto"
      >
        <div
          className="lg:w-1/2 w-full mx-10 lg:ml-10 flex flex-col justify-between h-[80%] lg:h-auto"
        >
          <div className="mb-20">
            <p className="text-white text-xl">Hi everyone. I am</p>
            <h1 className="text-white lg:text-5xl md:text-4xl text-3xl">
              Benjamin Lin
            </h1>
            <h2
              className="text-[#E99287] lg:text-3xl md:text-2xl text-xl flex items-center gap-3"
            >
              <span className="animate-plus" ></span>
              <div className="Typewriter" data-testid="typewriter-wrapper">
                <span
                  className="text-[#E99287] lg:text-2xl md:text-2xl text-xl gap-3"
                >
                  Senior Full-Stack Developer
                </span>
                <span
                  className="text-[#E99287] lg:text-2xl md:text-2xl text-xl gap-3"
                  >{`|`}</span>
              </div>
            </h2>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-[#607B96]">
              {`// you can also see it on my Github page`}
            </p>
            <p>
              <span className="text-[#4D5BCE]">const</span>
              <span className="text-[#43D9AD]">githubLink</span>
              <span className="text-white">=</span>
              <a
                href="https://github.com/Shark1009"
                className="text-[#E99287]"
                target="_blank"
                rel="noreferrer"
              >
                {`https://github.com/Shark1009`}
              </a>
            </p>
          </div>
        </div>
        <div
          className="lg:w-1/2 overflow-hidden max-h-[90%] hidden lg:block mr-10"
        >
          <div
            className="border border-[#0C1616] bg-gradient-to-br from-[#175553] to-[#43D9AD]/10 rounded-lg p-[35px] backdrop-blur-[32px] relative flex gap-6 items-start justify-center"
          >
            <div
              className="w-[370px] h-[370px] ml-[30px]"
            >
              <div>
                <div
                  className="x-button-snake p-1 w-max rounded-full top-3 left-3 absolute"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-[#48b3aa] text-[12px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div
                  className="x-button-snake p-1 w-max rounded-full top-3 right-3 absolute"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-[#48b3aa] text-[12px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div
                  className="x-button-snake p-1 w-max rounded-full bottom-3 right-3 absolute"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-[#48b3aa] text-[12px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div
                  className="x-button-snake p-1 w-max rounded-full bottom-3 left-3 absolute"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="text-[#48b3aa] text-[12px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}
