import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-blue-200 via-blue-100 to-blue-50 animate-gradient-xy">
      <Head>
        <title>Shree Creations</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {/* Hero */}
        <section id="hero" className="flex flex-col h-screen">
          <div className="m-auto">
            <h1 className="sm:text-8xl text-6xl text-center font-medium title-font text-black">
              Splash Text
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-64 md:h-48">
            <a href="#about" className="group xl:col-span-2 my-auto ml-8 md:ml-16">
              <h3 className="text-2xl text-leading font-light title-font text-black transition group-hover:opacity-80 ease-in-out">
                Another Section
              </h3>
              <h1 className="lg:text-5xl text-4xl text-leading font-thin title-font text-black transition group-hover:opacity-80 ease-in-out">
                Section Title
                <span className="pl-4 absolute transition-transform ease-in-out group-hover:translate-y-1">
                  &darr;
                </span>
              </h1>
            </a>
            <button className="group flex flex-col h-full w-full text-center bg-slate-50 bg-opacity-50 backdrop-blur">
              <div className="my-auto mr-auto pl-8 md:mr-0">
                <h1 className="lg:text-5xl text-4xl font-thin title-font text-black transition group-hover:opacity-80 ease-in-out">
                  Section Title
                  <span className="pl-4 inline-block transition-transform ease-in-out group-hover:translate-x-2">
                    &rarr;
                  </span>
                </h1>
              </div>
            </button>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="relative overflow-hidden text-gray-300 bg-about-splash lg:flex lg:h-[50vh]"
        >
          <div className="w-full p-8 text-left lg:w-1/2 md:p-16 lg:p-16 my-auto">
            <div className="max-w-xl lg:ml-0">
              <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                We're a ...
              </p>

              <p className="mt-4 block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                egestas tempus tellus etiam sed. Quam a scelerisque amet
                ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                quisque ut interdum tincidunt duis.
              </p>

              <a
                href=""
                className="inline-block rounded-lg px-5 py-3 mt-8 text-lg font-medium text-white bg-slate-50 bg-opacity-10 bg-blur group"
              >
                Learn more about us
                <a className="inline-block pl-1 w-6 h-6 ml-1 transition-transform transform group-hover:translate-x-2">
                  &rarr;
                </a>
              </a>
            </div>
          </div>

          <div className="relative w-full h-64 md:h-96 lg:w-1/2 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb"
              alt="Women smiling at college"
              className="absolute inset-0 object-cover w-full h-full md:px-16 md:py-16"
            />
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <div className="md:px-4 py-16 md:mx-auto md:px-16 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[50vh]">
              <div className="hidden md:block relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    className="absolute inset-0 object-cover w-full h-full"
                    src="https://www.hyperui.dev/photos/house-1.jpeg"
                    alt="Indoors house"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-slate-50 bg-opacity-0 md:bg-opacity-50">
                <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-slate-50 lg:bg-opacity-50 lg:block lg:-left-16"></span>

                <div className="p-8 sm:p-8 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore, debitis.
                  </h2>

                  <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                    beatae, magni dolores provident quaerat totam eos, aperiam
                    architecto eius quis quibusdam fugiat dicta.
                  </p>

                  <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 mt-8">
                    <a
                      className="flex items-start p-4 group"
                      href="/education/shape"
                    >
                      <span className="inline-block p-3 rounded-lg bg-slate-50 transition shadow-sm group-hover:bg-slate-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      </span>

                      <div className="ml-4">
                        <h6 className="inline-block text-xl font-bold">
                          Shape
                          <span className="inline-block transition ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                            &rarr;
                          </span>
                        </h6>

                        <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                      </div>
                    </a>

                    <a
                      className="flex items-start p-4 group"
                      href="/education/clarity"
                    >
                      <span className="inline-block p-3 rounded-lg bg-slate-50 transition shadow-sm group-hover:bg-slate-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                      </span>

                      <div className="ml-4">
                        <h6 className="inline-block text-xl font-bold">
                          Clarity
                          <span className="inline-block transition ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                            &rarr;
                          </span>
                        </h6>

                        <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                      </div>
                    </a>

                    <a
                      className="flex items-start p-4 group"
                      href="/education/carat"
                    >
                      <span className="inline-block p-3 rounded-lg bg-slate-50 transition shadow-sm group-hover:bg-slate-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </span>

                      <div className="ml-4">
                        <h6 className="inline-block text-xl font-bold">
                          Carat
                          <span className="inline-block transition ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                            &rarr;
                          </span>
                        </h6>

                        <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                      </div>
                    </a>

                    <a className="flex items-start p-4 group" href="/education/cut">
                      <span className="inline-block p-3 rounded-lg bg-slate-50 transition shadow-sm group-hover:bg-slate-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                          />
                        </svg>
                      </span>

                      <div className="ml-4">
                        <h6 className="inline-block text-xl font-bold">
                          Cut
                          <span className="inline-block transition ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                            &rarr;
                          </span>
                        </h6>

                        <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                      </div>
                    </a>

                    <a
                      className="flex items-start p-4 group"
                      href="/education/color"
                    >
                      <span className="inline-block p-3 rounded-lg bg-slate-50 transition shadow-sm group-hover:bg-slate-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                      </span>

                      <div className="ml-4">
                        <h6 className="inline-block text-xl font-bold">
                          Color
                          <span className="inline-block transition ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                            &rarr;
                          </span>
                        </h6>

                        <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                      </div>
                    </a>

                    <a className="flex items-start p-4 group" href="/education">
                      <div className="ml-4">
                        <h6 className="text-xl text-slate-500">
                          and more
                          <span className="inline-flex transition ease-in-out pl-2 group-hover:translate-x-2">
                            &rarr;
                          </span>
                        </h6>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="text-gray-600 body-font relative my-16">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Get In Touch
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p>
            </div>
            <div className="lg:w-3/4 md:w-3/4 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-lg bg-white bg-opacity-50 focus:bg-opacity-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      data-beam-id="beam-3-51"
                    />
                  </div>
                </div>
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-lg bg-white bg-opacity-50 focus:bg-opacity-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      data-beam-id="beam-3-52"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full rounded-lg bg-white bg-opacity-50 focus:bg-opacity-100 text-base outline-none h-32 text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      data-beam-id="beam-3-53"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 ml-auto">
                  <button className="flex mx-auto text-black border-0 py-2 px-8 focus:outline-none transition text-lg group hover:text-opacity-50">
                    Send
                    <a className="w-6 h-6 ml-1 transition-transform transform group-hover:translate-x-2">
                      &rarr;
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
