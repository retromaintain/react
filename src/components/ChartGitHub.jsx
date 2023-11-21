import * as React from "react"
import { FaGithub } from "react-icons/fa";
import GitHubCalendar from 'react-github-calendar';



const ChartComponent = () => (
  <>
  <div data-scroll-section className="my-60">
  <div className="flex justify-center z-50 mt-28">
    <h1 className="lg:text-8xl text-3xl title font-semibold primary-color-noshadow my-4" data-scroll data-scroll-speed="2"><FaGithub className="inline align-middle mb-2 mr-2"/>GitHub <span className="text-white/75">Contributions.</span></h1>
    
  </div>

  <div className="flex justify-center">
    <p className="lg:text-2xl text-xl text-white/75 text-center font-semibold mb-4"><i>College has been <span className="primary-color">rough.</span></i></p>
  </div>
  
  <div className="flex justify-center m-5">
    
    <div className="flex justify-center bg-black/5 rounded-lg p-5 hover:scale-110 transition-all duration-700">
      <a href="https://github.com/kalmix" target="_blank" rel="noreferrer">
        <GitHubCalendar username="kalmix" colorScheme="dark" style={{ color: 'rgb(117 117 117)', fontFamily: "'Space Grotesk', sans-serif" }} />
      </a>
    </div>
  </div>
  </div>
  </>
)
export default ChartComponent;