import React from 'react';
import Image1 from '../Images/p1.png';
import Image2 from '../Images/p2.png';
import Image3 from '../Images/p3.png';
import Image4 from '../Images/p4.png';

function Testimonials() {
  return (
    <div class="container mx-auto px-2 py-2" style={{ maxWidth: "1200px", height: "500px",  marginBottom: "30px", marginTop: "20px" }}>
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
          What services I am I providing          
        </h2>
        <h3 class="text-1xl text-center text-gray-800 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/4 px-2 mb-4">
            <div class="bg-white rounded shadow py-2">
            <img className="w-full" src={Image1} alt="Forest"/>
              <p class="text-gray-800 text-base px-6 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <p class="text-gray-500 text-xs md:text-sm px-6">2019 Winner</p>
            </div>
          </div>
          <div class="w-full md:w-1/4 px-2 mb-4">
            <div class="bg-white rounded shadow py-2">
            <img className="w-full" src={Image2} alt="Forest"/>
            <p class="text-gray-800 text-base px-6 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <p class="text-gray-500 text-xs md:text-sm px-6">2023 Winner</p>
            </div>
          </div>
          <div class="w-full md:w-1/4 px-2 mb-4">
            <div class="bg-white rounded shadow py-2">
            <img className="w-full" src={Image3} alt="Forest"/>

            <p class="text-gray-800 text-base px-6 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              
              <p class="text-gray-500 text-xs md:text-sm px-6">2020</p>
            </div>
          </div>
          <div class="w-full md:w-1/4 px-2 mb-4">
            <div class="bg-white rounded shadow py-2">
            <img className="w-full" src={Image4} alt="Forest"/>
              <p class="text-gray-800 text-base px-6 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <p class="text-gray-500 text-xs md:text-sm px-6">Winner 2021</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Testimonials