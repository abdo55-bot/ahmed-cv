import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_81r3yfg', 'template_ohdevlm', form.current, 'fA0fjl9dMh0H86zw1')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div className='bg-gradient-to-b from-black to-gray-800 w-full h-screen overflow-hidden'>
    <div className='mt-7 w-[100%] h-14 flex justify-evenly items-center flex-wrap'>
      <div><a href="mailto:almahmed66@gmail.com" className="flex justify-between items-center w-full text-white text-xl font-bold pl-6" target="true">Mail  <HiOutlineMail size={30}/></a></div>
      <div><a href="https://www.linkedin.com/in/ahmed-alam-0a993a217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex justify-center items-center w-full text-white text-xl font-bold pl-6" target="true">Linked In  <FaLinkedin size={30}/></a></div>
      <div><a href="https://www.facebook.com/profile.php?id=100009684188490&locale=ar_AR" className="flex justify-center items-center w-full text-white text-xl font-bold pl-6" target="true">Facebook  <FaFacebook size={30}/></a></div>
      <div className='text-white '><FaWhatsapp size={30}/> <p className='font-bold text-xl'>+201027472108</p> </div>
      

    </div>
    <div className=' h-screen w-full flex justify-center items-center '>
      
    <form ref={form} onSubmit={sendEmail} className=' text-gray-500 flex flex-col w-4/5  '>
      <label className='font-bold text-xl'>Name</label>
      <input type="text" name="user_name"className='rounded-md focus:ring-blue-500 focus:border-blue-500' />
      <label className='font-bold text-xl'>Email</label>
      <input type="email" name="user_email" className='rounded-md' />
      <label className='font-bold text-xl'>Message</label>
      <textarea name="message" className='rounded-md'/>
      <input type="submit" value="Send" className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mt-5 cursor-pointer' />
    </form>
    </div>
    </div>
    </>
  );
};

export default Contact;