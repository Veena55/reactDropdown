import { useState } from "react"
import { PiCaretDownBold } from "react-icons/pi"

function App() {
  const [showDropdwon, setDropdwon] = useState(false);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-[#070736]">
        <div className="w-1/4">
          <div className="bg-white flex items-center px-5 rounded-sm" onClick={() => setDropdwon(!showDropdwon)}>
            <button className=" py-3 w-full text-left font-medium">Select</button>
            <PiCaretDownBold className="text-black text-xl" />
          </div>
          {showDropdwon &&
            <div className="w-full mt-1 bg-white p-2 ps-5 font-semibold rounded-sm">
              <div className="py-2 cursor-pointer" onClick={() => setDropdwon(false)}>
                <a href="#">Yes</a>
              </div>
              <hr />
              <div className="py-2 cursor-pointer" onClick={() => setDropdwon(false)}>
                <a href="#">Probably not</a>
              </div>
            </div>
          }

        </div>
      </div>
    </>
  )
}

export default App
