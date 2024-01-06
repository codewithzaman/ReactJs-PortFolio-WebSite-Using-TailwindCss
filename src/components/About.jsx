import React from 'react'

const About = () => {
  return (
    <div name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugit sit perferendis et aliquid dolorem quam reprehenderit voluptas molestiae quibusdam, voluptatum odio explicabo temporibus vel exercitationem incidunt beatae sint architecto?
        </p>
        <br />
        <p className='text-xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero repudiandae, sunt nam at minus culpa enim corporis saepe necessitatibus natus assumenda eligendi, iste dolore? Labore soluta unde eum dicta nisi debitis temporibus magni! Harum, fuga! Enim incidunt architecto laborum neque!
        </p>
      </div>
      
    </div>
  )
}

export default About
