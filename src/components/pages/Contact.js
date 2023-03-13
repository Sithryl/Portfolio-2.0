import React from "react";

export default function Contact() {
  return (
    <div>
      <div id="contact" class="relative py-20 md:py-24 bg-gray-800">
        <div class="container xl:max-w-6xl mx-auto px-4">
          {/* row start */}

          <div class="flex flex-wrap flex-row -mx-4">
            <div
              class="flex-shrink max-w-full w-full px-4 lg:w-5/12 lg:pr-12 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div class="p-12 shadow rounded bg-white">
                <div className="flex">
                  {/* email */}
                  <div class="mb-6">
                    <div class="flex flex-wrap flex-row -mx-4">
                      <div class="flex-shrink max-w-full w-1/6 px-4 text-center">
                        {/* icon */}
                        <svg
                          className="mt-2 text-3xl text-blue-700 inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 512 512"
                        >
                          <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                        </svg>
                        <div class="flex-shrink max-w-full w-10/12 px-4">
                          <p class="text-lg leading-normal mb-2 font-semibold text-gray-800">
                            Email:
                          </p>
                          <p>david@tgsummit.com</p>
                        </div>
                      </div>
                    </div>
                    {/* phone */}
                    <div class="mb-6">
                      <div class="flex flex-wrap flex-row -mx-4">
                        <div class="flex-shrink max-w-full w-1/6 px-4 text-center">
                          <svg
                            class="mt-2 text-3xl text-blue-700 inline-block transform ltr:rotate-0 rtl:-rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512"
                          >
                            <path
                              stroke="currentColor"
                              d="M451,374c-15.88-16-54.34-39.35-73-48.76C353.7,313,351.7,312,332.6,326.19c-12.74,9.47-21.21,17.93-36.12,14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48,5.41-23.23,14.79-36c13.22-18,12.22-21,.92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9,44,119.9,47,108.83,51.6A160.15,160.15,0,0,0,83,65.37C67,76,58.12,84.83,51.91,98.1s-9,44.38,23.07,102.64,54.57,88.05,101.14,134.49S258.5,406.64,310.85,436c64.76,36.27,89.6,29.2,102.91,23s22.18-15,32.83-31a159.09,159.09,0,0,0,13.8-25.8C465,391.17,468,391.17,451,374Z"
                            />
                          </svg>
                        </div>
                        <div class="flex-shrink max-w-full w-10/12 px-4">
                          <p class="text-lg leading-normal mb-2 font-semibold text-gray-800">
                            Call:
                          </p>
                          <p class="mb-0">+1 704 696 6093</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div
                    class="flex-shrink max-w-full w-full px-4 lg:w-7/12 lg:pl-0 mt-12 lg:mt-0 wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <div class="w-100 p-12 shadow rounded bg-white">
                      {/* contact form */}
                      <form action="mailto: david@tgsummit.com">
                        <div class="flex flex-wrap flex-row -mx-4">
                          <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                            <label class="inline-block mb-2" for="name">
                              Your Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0"
                              id="name"
                            />
                            <div class="validate"></div>
                          </div>
                          <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                            <label class="inline-block mb-2" for="email">
                              Your Email
                            </label>
                            <input
                              type="email"
                              class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0"
                              name="email"
                              id="email"
                            />
                            <div class="validate"></div>
                          </div>
                        </div>
                        <div class="mb-6">
                          <label class="inline-block mb-2" for="subject">
                            Subject
                          </label>
                          <input
                            type="text"
                            class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0"
                            name="subject"
                            id="subject"
                          />
                          <div class="validate"></div>
                        </div>
                        <div class="mb-6">
                          <label class="inline-block mb-2" for="messages">
                            Message
                          </label>
                          <textarea
                            class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0"
                            name="message"
                            rows="10"
                            id="messages"
                          ></textarea>
                          <div class="validate"></div>
                        </div>
                        <div class="text-center mb-6">
                          <button
                            class="py-3 px-5 -ml-1 rounded-md leading-5 text-gray-100 bg-red-800 border border-red-700 hover:text-white hover:bg-red-800 hover:ring-0 hover:border-red-800 focus:bg-red-800 focus:border-red-800 focus:outline-none focus:ring-0"
                            type="submit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1.5rem"
                              height="1.5rem"
                              fill="currentColor"
                              class="ltr:mr-2 rtl:ml-2 tranform ltr:rotate-0 rtl:-rotate-90 inline-block"
                              viewBox="0 0 512 512"
                            >
                              <path d="M53.12,199.94l400-151.39a8,8,0,0,1,10.33,10.33l-151.39,400a8,8,0,0,1-15-.34L229.66,292.45a16,16,0,0,0-10.11-10.11L53.46,215A8,8,0,0,1,53.12,199.94Z"></path>
                              <line x1="460" y1="52" x2="227" y2="285"></line>
                            </svg>
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
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
