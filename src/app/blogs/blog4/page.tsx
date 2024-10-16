import NavBar from "@/app/components/navBar";
import Image from "next/image";
import React from "react";

const Blog4 = () => {
  return (
    <div
      className="bg-gradient-to-r from-slate-300 via-gray-100 to-gray-200 min-h-screen
    "
    >
      <NavBar />
      <div className="max-w-[92%] mx-auto">
        <div className="md:text-center text-start">
          <h1 className="md:text-3xl text-2xl md:font-extrabold font-bold m-3">
            5 Simple Ways to Improve Your Fitness Routine
          </h1>
          <Image
            src="https://th.bing.com/th/id/OIP.txrD7CvgfrZ_xcTxy-Xd7wHaLH?rs=1&pid=ImgDetMain"
            alt="blog"
            width={1000}
            height={1000}
            className="h-[50vh] w-auto max-w-[92%] mx-auto"
          ></Image>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Itroduction:-</h2>
          <p className="font-semibold md:text-lg text-md text-justify indent-24">
            Staying fit doesn’t have to be complicated. Whether you’re a fitness
            enthusiast or someone just starting, making a few simple adjustments
            can help you see more progress in less time. By staying consistent
            and being smart about your workouts, you can achieve your fitness
            goals more efficiently while keeping things fun and interesting.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold md:mt-5 mt-2 mx-2">Details:</h2>
          <div>
            <h3 className="text-xl font-bold md:indent-11 indent-6 mt-2">
              Switch Up Your Workouts: Preventing Plateaus and Staying Engaged:
            </h3>
            <p
              className="font-semibold md:text-lg text-md text-justify md:indent-[250px]
        indent-36 mb-10"
            >
              Avoid workout monotony by incorporating new exercises or routines.
              This keeps your body challenged and helps prevent plateaus,
              ensuring continuous improvement.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold md:indent-11 mt-2">
              Set Realistic, Achievable Fitness Goals:
            </h3>
            <p
              className="font-semibold md:text-lg text-md text-justify md:indent-[250px]
        indent-36 mb-10"
            >
              Breaking down long-term fitness goals into smaller, more
              achievable milestones helps keep you motivated and ensures steady
              progress.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold md:indent-11 indent-6 mt-2">
              Focus on Proper Nutrition: Fueling Your Fitness Journey:
            </h3>
            <p
              className="font-semibold md:text-lg text-md text-justify md:indent-[200px]
        indent-32 mb-10"
            >
              Exercise alone isn’t enough—nutrition plays a key role in your
              fitness journey. Learn how to fuel your body with the right
              nutrients to enhance your performance and recovery.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold md:indent-11 indent-6 mt-2">
              Prioritize Rest and Recovery: The Key to Growth:
            </h3>
            <p
              className="font-semibold md:text-lg text-md text-justify md:indent-[200px]
        indent-32 mb-10"
            >
              Fitness isn’t just about working out—rest is equally important.
              Giving your muscles time to recover is essential for growth and
              prevents injury.
            </p>
          </div>
          <h3 className="text-2xl font-extrabold mt-5 mb-3">Conclusion:</h3>
          <p
            className="font-semibold md:text-lg text-md text-justify md:indent-[100px]
        indent-24 pb-14"
          >
            By making these simple adjustments, you can elevate your fitness
            routine and maintain long-term results, ensuring you stay healthy
            and motivated..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog4;
