import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <div className='bg-gradient-to-b from-black to-gray-800 h-screen w-full flex justify-center items-center '>
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
    </>
  );
};

export default Contact;