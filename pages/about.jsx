import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Education() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <section class="h-full">
          <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
            <div class="max-w-3xl">
              <h2 class="text-3xl font-bold sm:text-4xl text-center">
                Short description of the company
              </h2>
            </div>
          </div>
        </section>

        <section>
          <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div class="max-w-3xl">
              <h2 class="text-3xl font-bold sm:text-4xl">What we do</h2>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
              <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                <img
                  class="absolute inset-0 object-cover w-full h-full"
                  src="https://www.hyperui.dev/photos/man-1.jpeg"
                  alt="Man using a computer"
                />
              </div>

              <div class="lg:py-16">
                <article class="space-y-4 text-gray-600">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aut qui hic atque tenetur quis eius quos ea neque sunt,
                    accusantium soluta minus veniam tempora deserunt? Molestiae
                    eius quidem quam repellat.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum explicabo quidem voluptatum voluptas illo
                    accusantium ipsam quis, vel mollitia? Vel provident culpa
                    dignissimos possimus, perferendis consectetur odit
                    accusantium dolorem amet voluptates aliquid, ducimus tempore
                    incidunt quas. Veritatis molestias tempora distinctio
                    voluptates sint! Itaque quasi corrupti, sequi quo odit illum
                    impedit!
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div class="lg:py-12 lg:col-span-2">
                <div class="max-w-3xl pb-4">
                  <h2 class="text-3xl font-bold sm:text-4xl">Get in touch</h2>
                </div>
                <p class="max-w-xl text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>

                <div class="mt-8">
                  <a href="" class="text-2xl font-bold text-pink-600">
                    {" "}
                    0151 475 4450{" "}
                  </a>

                  <address class="mt-2 not-italic">
                    62 West 47th St, Suite #1507
                    <br />
                    New York, NY 10036
                  </address>
                </div>
              </div>

              <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                <form action="" class="space-y-4">
                  <div>
                    <label class="sr-only" for="name">
                      Name
                    </label>
                    <input
                      class="w-full p-3 text-sm border-gray-200 rounded-lg"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label class="sr-only" for="email">
                        Email
                      </label>
                      <input
                        class="w-full p-3 text-sm border-gray-200 rounded-lg"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label class="sr-only" for="phone">
                        Phone
                      </label>
                      <input
                        class="w-full p-3 text-sm border-gray-200 rounded-lg"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                      <input
                        class="sr-only"
                        id="option1"
                        type="radio"
                        tabindex="-1"
                      />
                      <label
                        for="option1"
                        class="block w-full p-3 border border-gray-200 rounded-lg"
                        tabindex="0"
                      >
                        <span class="text-sm font-medium"> Option 1 </span>
                      </label>
                    </div>

                    <div>
                      <input
                        class="sr-only"
                        id="option2"
                        type="radio"
                        tabindex="-1"
                      />
                      <label
                        for="option2"
                        class="block w-full p-3 border border-gray-200 rounded-lg"
                        tabindex="0"
                      >
                        <span class="text-sm font-medium"> Option 2 </span>
                      </label>
                    </div>

                    <div>
                      <input
                        class="sr-only"
                        id="option3"
                        type="radio"
                        tabindex="-1"
                      />
                      <label
                        for="option3"
                        class="block w-full p-3 border border-gray-200 rounded-lg"
                        tabindex="0"
                      >
                        <span class="text-sm font-medium"> Option 3 </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label class="sr-only" for="message">
                      Message
                    </label>
                    <textarea
                      class="w-full p-3 text-sm border-gray-200 rounded-lg"
                      placeholder="Message"
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>

                  <div class="mt-4">
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                    >
                      <span class="font-medium"> Send Enquiry </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 ml-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
