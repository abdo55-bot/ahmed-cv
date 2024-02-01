import { Link } from "react-router-dom";
import ahmed2 from "../assets/photo_5890811980682478389_y-removebg-preview.png";

function Home() {
    return (
        <>
            
            <div className=" bg-gradient-to-b from-black to-gray-800 w-full h-screen flex justify-center items-center flex-wrap ">
                <div className=" w-full  flex justify-evenly items-center flex-wrap">
                    <div className="w-5/12">
                    <h1 className="capitalize font-bold text-4xl text-white"> Mechanical BIM Engineer</h1>
                    <h6 className="max-w-md md:max-w-lg mt-5 text-white">
                            I’m a Mechanical Engineer with sufficient background in Mechanical BIM and MEP Engineering always seeking for evolution and development.
                        </h6>
                        <Link to={'/portfolio'} className="text-white w-fit px-6 py-3 mt-5 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">Portfolio</Link>

                    </div>
                    <div className=" w-4/12">
                    <img src={ahmed2} alt="Ahmed" className="h-auto hover:scale-150 duration-300" />
                    </div>

                </div>

            </div>
        </>
    );
}

export default Home;
