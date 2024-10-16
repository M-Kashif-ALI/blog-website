import Image from "next/image";
import React from "react";
import NavBar from "./navBar";

const Card = () => {
  return (
    <div className="color-change-5x">
      <NavBar />
      <div>
        <h1 className='font-extrabold md:text-8xl text-6xl font-mono text-center p-10'>
          The Blogs
        </h1>
      </div>
      <hr className="border-2 m-2 border-gray-400"/>
      <section className="min-h-[100vh] my-auto mx-auto max-w-[92%] slide-in-bck-center">
        <div className="flex flex-wrap">

            <div className="md:basis-[30%] overflow-hidden m-[1.5%] p-4 text-center bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 w-fit rounded-xl shadow-drop-2-center">
              <Image
                src="https://i.pinimg.com/736x/00/09/b0/0009b0720eb684e1361fcd1914134eca--minimal-photography-photography-hacks.jpg"
                alt="blog"
                width={1000}
                height={1000}
                className="h-fit w-fit kenburns-top"
              ></Image>
              <div className="text-sm m-2 text-gray-800">
                Category | <span>Lifestyle</span>
              </div>
              <h2 className="text-[18px] font-bold py-[10px]">
                The Art of Minimalism: How Less Can Be More
              </h2>
              <p className="px-3 text-[16px] line-clamp-5">
                Discover the beauty of minimalism and how decluttering your life
                can bring clarity, focus, and freedom. This blog dives deep into
                the benefits of owning less and living intentionally.
              </p>
              <a
                href="/blogs/blog1"
                className="bg-gradient-to-r from-purple-300 via-blue-300 to-pink-300  rounded-xl hover:from-pink-400 hover:via-blue-400 hover:to-purple-400 active:scale-95 active:shadow-md transition ease-in-out duration-300 p-2 text-black inline-flex items-center md:mb-2 lg:mb-0"
              >
                Read more
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>

          <div className="md:basis-[30%] md:overflow-hidden my-auto m-[1.5%] p-4 text-center bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 w-fit rounded-xl shadow-drop-2-center h-fit">
            <Image
              src="https://th.bing.com/th/id/OIP.Xp4hglW7t8LXLdcKlIgVRgHaEK?rs=1&pid=ImgDetMain"
              alt="blog"
              width={1000}
              height={1000}
              className="kenburns-top"
            ></Image>
            <div className="text-sm m-2 text-gray-800">
              Category | <span>Travel</span>
            </div>
            <h2 className="text-[18px] font-bold py-[10px]">
              Top 5 Travel Destinations for 2024
            </h2>
            <p className="px-3 text-[16px] line-clamp-5">
              Explore the most exciting travel destinations for 2024, from
              hidden gems to world-famous cities, each offering a unique
              adventure for travelers.
            </p>
            <a
              href="/blogs/blog2"
              className="bg-gradient-to-r from-purple-300 via-blue-300 to-pink-300  rounded-xl hover:from-pink-400 hover:via-blue-400 hover:to-purple-400 active:scale-95 active:shadow-md transition ease-in-out duration-300 p-2 text-black inline-flex items-center md:mb-2 lg:mb-0"
            >
              Read more
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          
          <div className="md:basis-[30%] my-auto md:overflow-hidden m-[1.5%] p-4 text-center bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 w-fit rounded-xl shadow-drop-2-center">
            <Image
              src="https://th.bing.com/th/id/OIP.K99GY4CebAXrEuBCfP5msQHaFj?rs=1&pid=ImgDetMain"
              alt="blog"
              width={1000}
              height={1000}
              className="kenburns-top"
            ></Image>
            <div className="text-sm m-2 text-gray-800">
              Category | <span>Productivity</span>
            </div>
            <h2 className="text-[18px] font-bold py-[10px]">
              Mastering Time Management: Tips for a More Productive Day
            </h2>
            <p className="px-3 text-[16px] line-clamp-5">
              Time management is crucial to achieving your goals efficiently.
              This blog explores practical strategies to help you make the most
              of every day.
            </p>
            <a
              href="/blogs/blog3"
             className="bg-gradient-to-r from-purple-300 via-blue-300 to-pink-300  rounded-xl hover:from-pink-400 hover:via-blue-400 hover:to-purple-400 active:scale-95 active:shadow-md transition ease-in-out duration-300 p-2 text-black inline-flex items-center md:mb-2 lg:mb-0"
            >
              Read more
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div className="md:basis-[30%] my-auto m-[1.5%] md:overflow-hidden p-4 text-center bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 w-fit rounded-xl shadow-drop-2-center">
            <Image
              src="https://th.bing.com/th/id/OIP.txrD7CvgfrZ_xcTxy-Xd7wHaLH?rs=1&pid=ImgDetMain"
              alt="blog"
              width={1000}
              height={1000}
              className="kenburns-top h-[50vh]"
            ></Image>
            <div className="text-sm m-2 text-gray-800">
              Category | <span>Health & Fitness</span>
            </div>
            <h2 className="text-[18px] font-bold py-[10px]">
              {" "}
              5 Simple Ways to Improve Your Fitness Routine
            </h2>
            <p className="px-3 text-[16px] line-clamp-5">
              Ready to take your fitness routine to the next level? This blog
              offers simple but effective tips to help you see better results
              and stay motivated.
            </p>
            <a
              href="/blogs/blog4"
              className="bg-gradient-to-r from-purple-300 via-blue-300 to-pink-300  rounded-xl hover:from-pink-400 hover:via-blue-400 hover:to-purple-400 active:scale-95 active:shadow-md transition ease-in-out duration-300 p-2 text-black inline-flex items-center md:mb-2 lg:mb-0"
            >
              Read more
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div className="md:basis-[30%] my-auto md:overflow-hidden m-[1.5%] p-4 text-center bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 w-fit rounded-xl shadow-drop-2-center">
            <Image
              src="https://th.bing.com/th/id/OIP.RMiLDFSzqm8mijiWs2xh7wHaEH?rs=1&pid=ImgDetMain"
              alt="blog"
              width={1000}
              height={1000}
              className="kenburns-top"
            ></Image>
            <div className="text-sm m-2 text-gray-800">
              Category | <span>Business</span>
            </div>
            <h2 className="text-[18px] font-bold py-[10px]">
              How to Start a Small Business: A Beginner s Guide
            </h2>
            <p className="px-3 text-[16px] line-clamp-5">
              Dreaming of starting your own business? This guide provides a
              step-by-step approach to turning your ideas into reality.
            </p>
            <a
              href="/blogs/blog5"
              className="bg-gradient-to-r from-purple-300 via-blue-300 to-pink-300  rounded-xl hover:from-pink-400 hover:via-blue-400 hover:to-purple-400 active:scale-95 active:shadow-md transition ease-in-out duration-300 p-2 text-black inline-flex items-center md:mb-2 lg:mb-0"
            >
              Read more
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div className="md:basis-[30%] my-auto md:overflow-hidden m-[1.5%] p-4 text-center bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 w-fit rounded-xl shadow-drop-2-center">
            <Image
              src="https://thumbs.dreamstime.com/b/reduce-your-carbon-footprint-logo-net-zero-emission-carbon-neutrality-icon-green-stamp-badge-two-feet-leaves-co-248893651.jpg"
              alt="blog"
              width={1000}
              height={1000}
              className="kenburns-top"
            ></Image>
            <div className="text-sm m-2 text-gray-800">
              Category | <span>Environment</span>
            </div>
            <h2 className="text-[18px] font-bold py-[10px]">
              Sustainable Living: Easy Ways to Reduce Your Carbon Footprint
            </h2>
            <p className="px-3 text-[16px] line-clamp-5">
              Living sustainably doesn’t have to be complicated. This blog
              highlights simple steps you can take to reduce your environmental
              impact and live a greener life.
            </p>
            <a
              href="/blogs/blog6"
            className="bg-gradient-to-r from-purple-300 via-blue-300 to-pink-300  rounded-xl hover:from-pink-400 hover:via-blue-400 hover:to-purple-400 active:scale-95 active:shadow-md transition ease-in-out duration-300 p-2 text-black inline-flex items-center md:mb-2 lg:mb-0"
            >
              Read more
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Card;
