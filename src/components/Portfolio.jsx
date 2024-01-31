import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import img1 from "../assets/Chalet-Al-Hada-32.jpg"
import img2 from "../assets/Naia-West-New-Zayed-Compound.webp";
import img3 from "../assets/fustat-garden.jpg";
import img4 from "../assets/owest.png";
import img5 from "../assets/r4a7-Restaurante-O-Tobo-do-Lobo-design-2022-10.jpg";

function Portfolio() {
    return (
        <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen">
            <div className="text-white">
                <p className="capitalize font-bold text-5xl border-b-2 w-20 pt-20 ml-5 hover:w-60 duration-300">portfolio <span><MdKeyboardDoubleArrowRight className="hover:rotate-90 duration-300" /></span> </p>
                <p className="pt-6 pl-5 text-xl">check out some of my work right here</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10 mt-16 ">
                <div className="w-64 h-52 rounded-md shadow-lg shadow-cyan-500/50">
                    <img src={img1} alt="photo" className="min-h-44 hover:scale-105 duration-300" />
                </div>
                <div className="w-64 h-52 rounded-md shadow-lg shadow-cyan-500/50">
                    <img src={img2} alt="photo" className="min-h-44 hover:scale-105 duration-300" />
                </div>
                <div className="w-64 h-52 rounded-md shadow-lg shadow-cyan-500/50">
                    <img src={img3} alt="photo" className="min-h-44 hover:scale-105 duration-300" />
                </div>
                <div className="w-64 h-52 rounded-md shadow-lg shadow-cyan-500/50">
                    <img src={img4} alt="photo" className="min-h-44 hover:scale-105 duration-300" />
                </div>
                <div className="w-64 h-52 rounded-md shadow-lg shadow-cyan-500/50">
                    <img src={img5} alt="photo" className="max-h-44 w-full hover:scale-105 duration-300" />
                </div>
                <div className="w-64 h-52 rounded-md shadow-lg shadow-cyan-500/50">
                    <img src={img1} alt="photo" className="hover:scale-105 duration-300" />
                </div>
                <div className="w-64 h-52 rounded-md shadow-lg shadow-cyan-500/50">
                    <img src={img1} alt="photo" className="hover:scale-105 duration-300" />
                </div>
                <div className="w-64 h-52 rounded-md shadow-lg shadow-cyan-500/50">
                    <img src={img1} alt="photo" className="hover:scale-105 duration-300" />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
