import NavBar from '@/app/components/navBar'
import Image from 'next/image'
import React from 'react'

const Blog6 = () => {
  return (
    <div className='bg-gradient-to-r from-slate-300 via-gray-100 to-gray-200 min-h-screen
    '>
      <NavBar />
      <div className='max-w-[92%] mx-auto'>
        <div className='md:text-center text-start'>
          <h1 className='md:text-3xl text-2xl md:font-extrabold font-bold m-3'>Sustainable Living: Easy Ways to Reduce Your Carbon Footprint</h1>
          <Image
                src="https://thumbs.dreamstime.com/b/reduce-your-carbon-footprint-logo-net-zero-emission-carbon-neutrality-icon-green-stamp-badge-two-feet-leaves-co-248893651.jpg"
                alt="blog"
                width={1000}
                height={1000}
                className="h-[50vh] w-auto max-w-[92%] mx-auto"
              ></Image>
        </div>
        <div>
          <h2 className='text-2xl font-bold'>Itroduction:-</h2>
          <p className='font-semibold md:text-lg text-md text-justify indent-24'>With growing concerns about climate change and environmental impact, more people are seeking ways to live more sustainably. The good news is that you don’t need to make drastic changes to start making a difference. Small, everyday habits can significantly reduce your carbon footprint, helping to create a healthier planet for future generations.
          </p>
        </div>
        <div>
        <h2 className='text-2xl font-bold md:mt-5 mt-2 mx-2'>Details:</h2>
        <div>
        <h3 className='text-xl font-bold md:indent-11 indent-6 mt-2'>Reducing Energy Usage: Simple Changes for a Greener Home:</h3>
        <p className='font-semibold md:text-lg text-md text-justify md:indent-[250px]
        indent-36 mb-10'>Opt for energy-efficient appliances, switch to LED lighting, and remember to turn off electronics when not in use to reduce your overall energy consumption.</p>
        </div>
        <div>
        <h3 className='text-xl font-bold md:indent-11 mt-2'>Cutting Down on Plastic: Reusable Products for Everyday Life:</h3>
        <p className='font-semibold md:text-lg text-md text-justify md:indent-[250px]
        indent-36 mb-10'>Reduce your reliance on single-use plastics by using reusable bags, bottles, and containers. Small changes can have a big impact on reducing plastic waste.</p>
        </div>
        <div>
        <h3 className='text-xl font-bold md:indent-11 indent-6 mt-2'>Supporting Local and Eco-Friendly Products: Shopping Sustainably:</h3>
        <p className='font-semibold md:text-lg text-md text-justify md:indent-[200px]
        indent-32 mb-10'>Buying local and eco-friendly products supports sustainable practices while reducing the environmental impact of transportation and large-scale production.</p>
        </div>
        <div>
        <h3 className='text-xl font-bold md:indent-11 indent-6 mt-2'>Incorporating a Plant-Based Diet: Reducing Your Carbon Footprint:</h3>
        <p className='font-semibold md:text-lg text-md text-justify md:indent-[200px]
        indent-32 mb-10'>Reducing meat consumption, even a few days a week, can significantly lower your carbon footprint and contribute to a more sustainable food system.</p>
        </div>
        <h3 className='text-2xl font-extrabold mt-5 mb-3'>Conclusion:</h3>
        <p className='font-semibold md:text-lg text-md text-justify md:indent-[100px]
        indent-24 pb-14'>By making small, sustainable changes in your daily life, you can help reduce your carbon footprint and contribute to a healthier planet.</p>
        </div>
      </div>
    </div>
  )
}

export default Blog6