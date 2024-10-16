import NavBar from '@/app/components/navBar'
import Image from 'next/image'
import React from 'react'

const Blog1 = () => {
  return (
    <div className='bg-gradient-to-r from-slate-300 via-gray-100 to-gray-200 min-h-screen
    '>
      <NavBar />
      <div className='max-w-[92%] mx-auto'>
        <div className='md:text-center text-start'>
          <h1 className='md:text-3xl text-2xl md:font-extrabold font-bold m-3'>The Art of Minimalism: How Less Can Be More</h1>
          <Image
                src="https://i.pinimg.com/736x/00/09/b0/0009b0720eb684e1361fcd1914134eca--minimal-photography-photography-hacks.jpg"
                alt="blog"
                width={1000}
                height={1000}
                className="h-[50vh] w-auto max-w-[92%] mx-auto"
              ></Image>
        </div>
        <div>
          <h2 className='text-2xl font-bold'>Itroduction:-</h2>
          <p className='font-semibold md:text-lg text-md text-justify indent-24'>In today’s fast-paced, consumer-driven world, it’s easy to get caught up in the idea that more is better. However, many are beginning to embrace the minimalist lifestyle, which encourages simplicity and the idea that less can actually be more. Minimalism isn’t just about getting rid of excess physical possessions—it’s about clearing mental and emotional clutter too, allowing you to focus on what truly matters.
          </p>
        </div>
        <div>
        <h2 className='text-2xl font-bold md:mt-5 mt-2 mx-2'>Details:</h2>
        <div>
        <h3 className='text-xl font-bold md:indent-11 indent-6 mt-2'>Decluttering Your Space:</h3>
        <p className='font-semibold md:text-lg text-md text-justify md:indent-[250px]
        indent-36 mb-10'>Start by focusing on one area, whether it’s a room or a drawer. Remove items that no longer serve a purpose or add value to your life. Minimalism in your environment can lead to clarity in your mind.</p>
        </div>
        <div>
        <h3 className='text-xl font-bold md:indent-11 mt-2'>Embracing Digital Minimalism:</h3>
        <p className='font-semibold md:text-lg text-md text-justify md:indent-[250px]
        indent-36 mb-10'>Learn to manage digital distractions by organizing your devices and limiting screen time.In today’s digital world, our devices can overwhelm us with information. Organize your digital space by decluttering unnecessary apps, emails, and files, and limit screen time to create a calmer, more focused life.</p>
        </div>
        <div>
        <h3 className='text-xl font-bold md:indent-11 indent-6 mt-2'>Mental Minimalism:</h3>
        <p className='font-semibold md:text-lg text-md text-justify md:indent-[200px]
        indent-32 mb-10'>Minimalism isn’t just about things it,s also about mental clutter. Learn how to clear your mind by setting clear priorities, reducing distractions, and focusing on what truly matters.</p>
        </div>
        <h3 className='text-2xl font-extrabold mt-5 mb-3'>Conclusion:</h3>
        <p className='font-semibold md:text-lg text-md text-justify md:indent-[100px]
        indent-24 pb-14'>Minimalism can transform both your physical and mental spaces, allowing you to live with intention and focus on the things that truly matter.</p>
        </div>
      </div>
    </div>
  )
}

export default Blog1