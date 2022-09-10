import React from 'react'
import {contact} from '../data'

function Contact() {
  return (
    <section className='py-12 lg:py-12 bg-accent border-y' id='contact'>
      <div className='container mx-auto' >
        <div className='flex flex-col items-center text-center' >
          <h2 className='section-title before:content-contact
                relative before:absolute before:opacity-40
                before:-top-7 before:-left-40 before:hidden
                before:lg:block text-3xl
                lg:mb-2 font-bold text-white'>
Contact Me
          </h2>
          <p className='subtitle mb-4 lg:mb-6'>
            Ask Me A Question Or Hire Me Right Now
          </p>
        </div>
        <div className='flex flex-col lg:qap-x-8 lg:flex-row'>
        <div className='flex flex-1 flex-col items-start
         space-y-8 mb-12 lg:mb-0 lg:pt-2'>
            {contact.map((item, index) => {
              const {icon, title, subtitle, description } = item;
              return (
              <div className='flex flex-col lg:flex-row gap-x-4' key={index}> 
                 <div className='text-white rounded-sm w-14 h-14 flex items-start
                justify-center mt-2 mb-4 lg:mb-0 text-2xl'>{icon} 
                </div>
                <div className=''>
                   <h4 className='font-body text-xl mb-1'>{title}</h4>
                   <p className='mb-1 '>{subtitle}</p>
                   <p className='text-white font-normal'>{description}</p>
                </div>
              </div>
              )
            })}
          
        </div>
        <form className='space-y-8 w-full max-w-[780px] 
        bg-[#9f5e36] rounded-md p-6 shadow shadow-gray-300
        '>
          <h1 className='font-black text-white'>Leave a message</h1>
              <div className='flex gap-8'>
                <input type='text' placeholder='Your name' 
                className='text-paragraph h-[60px] 
                bg-accent border border-gray-400
                outline-none pl-6 w-full font-body text-[15px] 
                rounded-sm focus:outline focus:outline-1 
                focus:outline-accent'/>
                <input type='email' placeholder='Your Email' 
                className='bg-accent border border-gray-400 
                text-paragraph h-[60px] 
                outline-none pl-6 w-full font-body text-[15px] 
                rounded-sm focus:outline focus:outline-1 
                focus:outline-accent'/>
              </div>
              <input type='text' placeholder='Discription' 
              className='bg-accent border border-gray-400 text-paragraph h-[60px]
               outline-none pl-6 w-full font-body text-[15px]
                rounded-sm focus:outline focus:outline-1 
                focus:outline-accent '/>
              <textarea className='bg-accent border border-gray-400 resize-none w-full
               outline-none p-6 rounded-sm h-[200px] 
               focus:outline focus:outline-1 
               focus:outline-accent' placeholder='your message'></textarea> 
              <button className='py-4 px-7 font-medium 
              text-accent flex items-center justify-center 
              rounded-sm transition-all 
              btn-lg bg-gray-300 
              hover:bg-gray-100'>
                Send message
              </button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact