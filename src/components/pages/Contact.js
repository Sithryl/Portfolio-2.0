import React from "react";
import Resume from "../../../src/assets/2021_David_M_McWhirter.pdf";
export default function Contact() {
  return (
    <div>
      <div id="contact" class="relative py-20 md:py-24 bg-gray-800">
        {/* resume */}
        <figure className="flex flex-wrap flex-row -mx-4 justify-center">
          <a
            href={Resume}
            download="Resume"
          >
            <button
              type="button"
              className="py-3 px-5 inline-block text-center mb-3 rounded-md leading-normal text-gray-100 bg-violet-700 border border-violet-700 hover:text-white hover:bg-violet-800 hover:ring-0 hover:border-violet-900 focus:bg-violet-900 focus:border-violet-900 focus:outline-none focus:ring-0"
            >
              Download Resume
            </button>
          </a>
        </figure>
        {/* email form header */}
        <div class="container xl:max-w-6xl mx-auto px-4">
          <div class="flex flex-wrap flex-row -mx-4 justify-center">
            <div class="max-w-ful px-4 w-full lg:w-8/12">
              <div class="bg-gray-50 border border-gray-200 rounded-md w-full p-12">
                <header class="text-center mx-auto mb-12 lg:px-20">
                  <h2 class="text-2xl md:text-3xl leading-normal mb-2 font-bold text-gray-800">
                    <span class="font-light">Contact</span> Me
                  </h2>
                  <hr class="block w-12 h-0.5 mx-auto my-5 bg-blue-700 border-blue-700" />
                  <p class="text-gray-600 leading-relaxed font-light text-xl mx-auto pb-2">
                    Have questions about service, please contact me.
                  </p>
                </header>
                {/* form start */}
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
                      class="py-3 px-5 inline-block text-center rounded-md leading-normal text-gray-100 bg-violet-700 border border-violet-700 hover:text-white hover:bg-violet-900 hover:ring-0 hover:border-violet-900 focus:bg-violet-900 focus:border-violet-900 focus:outline-none focus:ring-0"
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
  );
}
