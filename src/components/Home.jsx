import { Link } from "react-router-dom";
import ahmed2 from "../assets/photo_5890811980682478389_y-removebg-preview.png"


function Home(){
    return(
        <>
        <div className="flex h-screen w-full bg-gradient-to-b from-black to-gray-800 justify-center items-center text-white  overflow-hidden">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="">
                <h1 className="capitalize font-bold text-6xl"> Mechanical BIM Engineer</h1>
                <p className="max-w-96 mt-5">
                I’m a  Mechanical Engineer with sufficient background in Mechanical BIM and MEP  Engineering always seeking for evolution and development.
                </p>
               <Link to={'/portfolio'} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" >portfolio     </Link>

            </div>
            <div className="imge ">
            <img src={ahmed2} className="w-96 min-w-96 hover:pb-11 duration-200 "/>
            </div>
            </div>
        </div>
        
     
        </>
    )
}
export default Home;