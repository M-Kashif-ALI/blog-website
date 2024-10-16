import NavBar from "@/app/components/navBar";
import Image from "next/image";
import React from "react";

const Blog2 = () => {
  return (
    <div
      className="bg-gradient-to-r from-slate-300 via-gray-100 to-gray-200 min-h-screen
    "
    >
      <NavBar />
      <div className="max-w-[92%] mx-auto">
        <div className="md:text-center text-start">
          <h1 className="md:text-3xl text-2xl md:font-extrabold font-bold m-3">
            Top 5 Travel Destinations for 2024
          </h1>
          <Image
            src="https://th.bing.com/th/id/OIP.Xp4hglW7t8LXLdcKlIgVRgHaEK?rs=1&pid=ImgDetMain"
            alt="blog"
            width={1000}
            height={1000}
            className="h-[50vh] w-auto max-w-[92%] mx-auto"
          ></Image>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Itroduction:-</h2>
          <p className="font-semibold md:text-lg text-md text-justify indent-24">
            With each new year comes the opportunity to discover new places and
            experience different cultures. Whether you,re a seasoned traveler or
            someone just looking to plan your next vacation, 2024 has some
            incredible destinations to explore. From bustling cities to serene
            escapes, these travel spots promise unforgettable adventures for
            every type of traveler.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold md:mt-5 mt-2 mx-2">Details:</h2>
          <div>
            <h3 className="text-xl font-bold md:indent-11 indent-6 mt-2">
              Tokyo, Japan: A Blend of Tradition and Modernity:
            </h3>
            <p
              className="font-semibold md:text-lg text-md text-justify md:indent-[250px]
        indent-36 md:mb-10 mb-7"
            >
              Tokyo offers a vibrant mix of historical temples, modern
              architecture, and cutting-edge technology, making it a must-visit
              for those who want to experience both ancient and contemporary
              Japan.
            </p>
            <Image
              src="https://th.bing.com/th/id/OIP.xZiLk7RRtUqNegjIrSW1zAAAAA?rs=1&pid=ImgDetMain"
              alt="blog"
              width={1000}
              height={1000}
              className="h-[50vh] w-auto max-w-[92%] mx-auto mb-5 border-2 border-black"
            ></Image>
          </div>
          <div>
            <h3 className="text-xl font-bold md:indent-11 mt-2">
              Santorini, Greece: Breathtaking Views and Sunsets:
            </h3>
            <p
              className="font-semibold md:text-lg text-md text-justify md:indent-[250px]
        indent-36 mb-10"
            >
              Famous for its stunning white-washed buildings and spectacular
              sunsets, Santorini offers a perfect Mediterranean escape with rich
              history and incredible views over the Aegean Sea.
            </p>
            <div className="flex flex-col md:flex-row max-w-[92%] mx-auto gap-8">
              <Image
                src="https://th.bing.com/th/id/R.f6cb494ec44db97057d431e109608c23?rik=dxBh3HmFwNSUHQ&riu=http%3a%2f%2fmedia3.popsugar-assets.com%2ffiles%2f2014%2f01%2f15%2f947%2fn%2f1922441%2ffba056acfae095af_satorinisunset%2fi%2fSantorini-Greece.jpg&ehk=gsyt4buuzc9CjBaBakWYcdBrSkcLSPULnoE4NQeWssY%3d&risl=1&pid=ImgRaw&r=0"
                alt="blog"
                width={1000}
                height={1000}
                className="h-[40vh] w-full object-cover mb-5 md:mb-0 md:w-1/2 border-2 border-black"
              />
              <Image
                src="https://th.bing.com/th/id/OIP.6ZPNYVzwWsu6ck4DZoTx8AAAAA?rs=1&pid=ImgDetMain"
                alt="blog"
                width={1000}
                height={1000}
                className="h-[40vh] w-full object-cover md:w-1/2 border-2 border-black"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold md:indent-11 indent-6 mt-2">
              Marrakech, Morocco: A Cultural Immersion:
            </h3>
            <p
              className="font-semibold md:text-lg text-md text-justify md:indent-[200px]
        indent-32 mb-10"
            >
              Dive into the rich culture of Marrakech, with its vibrant souks
              (markets), historic palaces, and flavorful Moroccan cuisine. This
              destination is perfect for travelers seeking a cultural adventure.
            </p>
            <Image
              src="https://th.bing.com/th/id/OIP.y8dQFpLReeB5xjuzzsiXjAHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="blog"
              width={1000}
              height={1000}
              className="h-[50vh] w-auto max-w-[92%] mx-auto mb-5 border-2 border-black"
            ></Image>
          </div>
          <div>
            <h3 className="text-xl font-bold md:indent-11 indent-6 mt-2">
              Reykjavik, Iceland: Nature,s Playground:
            </h3>
            <p
              className="font-semibold md:text-lg text-md text-justify md:indent-[200px]
        indent-32 mb-10"
            >
              Known for its stunning natural beauty, Reykjavik is a dream for
              nature lovers, with its geysers, glaciers, hot springs, and the
              awe-inspiring Northern Lights.
            </p>
            <Image
              src="https://th.bing.com/th/id/OIP.T05MEPz54vbPXNMzZZ0G-wHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="blog"
              width={1000}
              height={1000}
              className="h-[50vh] w-auto max-w-[92%] mx-auto mb-5 border-2 border-black"
            ></Image>
          </div>
          <h3 className="text-2xl font-extrabold mt-5 mb-3">Conclusion:</h3>
          <p
            className="font-semibold md:text-lg text-md text-justify md:indent-[100px]
        indent-24 pb-14"
          >
            Whether you,re looking for urban excitement or natural wonders,
            these top destinations for 2024 have something to offer every
            traveler.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
