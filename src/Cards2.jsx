import person1 from '../src/assets/person1.jpg'
import person2 from '../src/assets/person2.jpg'
import person3 from '../src/assets/person3.jpg'
import person4 from '../src/assets/person4.jpg'
import React from 'react'

function Cards2() {
  const persons = [
    { img: person1 },
    { img: person2 },
    { img: person3 },
    { img: person4 }
  ];

  return (
    <div>
       <div className="flex flex-wrap lg:flex-nowrap justify-between h-screen mx-18 gap-4  mb-350 md:mb-100 lg:mb-10">
      {persons.map((person, index) => (
        <div
          key={index}
          className="w-[226px] h-[80vh] max-h-[635px] bg-no-repeat bg-cover bg-center text-white rounded-lg flex justify-center items-center 
          transition-all duration-500 ease-in-out flex-grow flex-shrink-0 hover:flex-grow-[18]"
          style={{
            padding: "0px 30px",
            paddingBottom: "90px",
            alignItems: "flex-end",
            backgroundImage: `url(${person.img})`,
          }}
        ></div>
      ))}
    </div>
    </div>
  )
}

export default Cards2