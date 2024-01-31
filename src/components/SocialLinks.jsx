import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks(){
    return (
        <>
        <div className="flex flex-col top-[35%] left-0 fixed samsong:top-3/4">
        <ul>
    <li className="flex items-center justify-between w-40 h-14 px-4   bg-gray-500 -translate-x-28 hover:translate-x-0 duration-300">
<a href="https://www.linkedin.com/in/ahmed-alam-0a993a217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex justify-center items-center w-full text-white text-xl font-bold pl-6" target="true">Linked In  <FaLinkedin size={30}/></a>
    </li>
    <li className="flex items-center justify-between w-40 h-14 px-4   bg-gray-500 -translate-x-28 hover:translate-x-0 duration-300">
<a href="mailto:almahmed66@gmail.com" className="flex justify-between items-center w-full text-white text-xl font-bold pl-6" target="true">Mail  <HiOutlineMail size={30}/></a>
    </li>
    <li className="flex items-center justify-between w-40 h-14 px-4   bg-gray-500 -translate-x-28 hover:translate-x-0  duration-300">
<a href="/Ahmed Alam Jr.Mecahnical cv-2.pdf" download={'true'} className="flex justify-between items-center w-full text-white text-xl font-bold pl-6 " target="true">C V  <BsFillPersonLinesFill size={30}/></a>
    </li>
        </ul>
        </div>
        
        
        </>
    )
}


export default SocialLinks;