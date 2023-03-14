import React from 'react';
import Reciplease from "../../../src/assets/images/Reciplease-page.png";
import JATE from "../../../src/assets/images/JATE.png";
import README from "../../../src/assets/images/readme-generator.png";
import Password from "../../../src/assets/images/webscreenshot.png";
import PetCheck from "../../../src/assets/images/petcheck-page.png";
import Regex from "../../../src/assets/images/regex.png";
export default function Projects() {


  return (
    <div>
      <div id="project section" className="relative py-20 md:py-24 bg-gray-800">
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* section header */}
          <header className="text-center mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
              <span className="font-light">My</span> Projects
            </h2>
            <hr className="block w-12 h-0.5 mx-auto my-5 bg-red-800 border-blue-700"></hr>
          </header>

          <div className="flex flex-wrap flex-row -mx-4 text-center">
            {/* item */}
            <div class="flex px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
              <div className="flex flex-col bg-white mb-12 rounded overflow-hidden shadow">
                <div className="relative overflow-hidden">
                  <a href="https://xyiorgyx.github.io/Reciplease/">
                    <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                    <img
                      className="max-w-full h-auto"
                      src={Reciplease}
                      alt="reciplease"
                    ></img>
                  </a>
                </div>
                <div className="flex flex-shrink py-6 px-8 flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                      <a
                        href="https://xyiorgyx.github.io/Reciplease/"
                        className="hover:text-blue-700 dark:hover:text-gray-100"
                      >
                        Reciplease
                      </a>
                    </h3>
                    <div className="text-gray-600">
                      <p className="text-gray-500">
                        This was my first group project. Search up some of you
                        favorite foods to make using api calls to Spoonacular
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* item */}
            <div class="flex px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
              <div className="flex flex-col bg-white mb-12 rounded overflow-hidden shadow">
                <div className="relative overflow-hidden">
                  <a href="https://sithryl-jate.herokuapp.com/">
                    <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                    <img
                      className="max-w-full h-auto"
                      src={JATE}
                      alt="JATE"
                    ></img>
                  </a>
                </div>
                <div className="py-6 px-8 flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                      <a
                        href="https://sithryl-jate.herokuapp.com/"
                        className="hover:text-blue-700 dark:hover:text-gray-100"
                      >
                        JATE - Just Another Text Editor
                      </a>
                    </h3>
                    <div className="text-gray-600">
                      <p className="text-gray-500">
                        Take notes that save to your local cache and download
                        the app to view your notes even while not connected to
                        the internet!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* item */}
            <div class="flex px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
              <div className="flex flex-col bg-white mb-12 rounded overflow-hidden shadow">
                <div className="relative overflow-hidden">
                  <a href="https://github.com/Sithryl/README-Generator">
                    <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                    <img
                      className="max-w-full h-auto"
                      src={README}
                      alt="terminal"
                    ></img>
                  </a>
                </div>
                <div className="py-6 px-8 flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                      <a
                        href="https://github.com/Sithryl/README-Generator"
                        className="hover:text-blue-700 dark:hover:text-gray-100"
                      >
                        README Generator
                      </a>
                    </h3>
                    <div className="text-gray-600">
                      <p className="text-gray-500">
                        An application to generate a quick README for any
                        project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* item */}
            <div class="flex px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
              <div className="flex flex-col bg-white mb-12 rounded overflow-hidden shadow">
                <div className="relative overflow-hidden">
                  <a href="https://sithryl.github.io/Password-Generator/">
                    <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                    <img
                      className="max-w-full h-auto"
                      src={Password}
                      alt="webImage"
                    ></img>
                  </a>
                </div>
                <div className="py-6 px-8 flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                      <a
                        href="https://sithryl.github.io/Password-Generator/"
                        className="hover:text-blue-700 dark:hover:text-gray-100"
                      >
                        Password Generator
                      </a>
                    </h3>
                    <div className="text-gray-600">
                      <p className="text-gray-500">
                        Here's an application to generate a password based on
                        user criteria
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* item */}
            <div class="flex px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
              <div className="flex flex-col bg-white mb-12 rounded overflow-hidden shadow">
                <div className="relative overflow-hidden">
                  <a href="https://polar-springs-69420.herokuapp.com/">
                    <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                    <img
                      className="max-w-full h-auto"
                      src={PetCheck}
                      alt="webImage"
                    ></img>
                  </a>
                </div>
                <div className="py-6 px-8 flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                      <a
                        href="https://polar-springs-69420.herokuapp.com/"
                        className="hover:text-blue-700 dark:hover:text-gray-100"
                      >
                        Pet Check Plus
                      </a>
                    </h3>
                    <div className="text-gray-600">
                      <p className="text-gray-500">
                        This was my 2nd group project. This is a site where you
                        can add and save information on your pets
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* item */}
            <div class="flex px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
              <div className="flex flex-col bg-white mb-12 rounded overflow-hidden shadow">
                <div className="relative overflow-hidden">
                  <a href="https://gist.github.com/Sithryl/7cdbe5114b844ddbac1ac721f8829298">
                    <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                    <img
                      className="max-w-full h-auto"
                      src={Regex}
                      alt="webImage"
                    ></img>
                  </a>
                </div>
                <div className="py-6 px-8 flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                      <a
                        href="https://gist.github.com/Sithryl/7cdbe5114b844ddbac1ac721f8829298"
                        className="hover:text-blue-700 dark:hover:text-gray-100"
                      >
                        Regex Tutorial
                      </a>
                    </h3>
                    <div className="text-gray-600">
                      <p className="text-gray-500">
                        Learn how to read REGEX syntax
                      </p>
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
