import Link from "next/link"

const About = () => {
  return (
    <div className="bg-void min-h-screen text-white flex justify-center items-center flex-col">
      <div className="text-5xl font-extrabold">About</div>
     
     <Link href={'/'}>
      <button className="jello-horizontal text-black font-semibold m-4 color-change-5x p-2 rounded">Go Back</button>
      </Link>
    </div>
  )
}

export default About