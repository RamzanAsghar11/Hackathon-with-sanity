import NewHeader from "../Components/NewHeader";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiCirclesFourFill } from "react-icons/pi";

const Shop = () => {
  return (
    <div className="w-full">
      

      {/* Shop Main page */}
      <div className="relative w-full h-[316px] mb-14">
       
        <div className="absolute inset-0 bg-[url('/Assets/Image_13.jpg')] bg-cover bg-center opacity-50"></div>
        {/* Content on Top */}
        <div className="relative w-full h-full flex flex-col justify-center items-center">
        <img src="/Assets/Shop logo.png" alt="shop logo" className="w-[77px] h-[77px]" />
          <p className="font-medium text-[48px] leading-[72px]">Shop</p>
          <div className="flex items-center justify-center space-x-2"> {/* Add space between text */}
            <p className="font-medium">Home</p>
            <MdOutlineKeyboardArrowRight className="text-xl" /> {/* Align the arrow icon */}
            <p>shop</p>
          </div>
        </div>
      </div>

   {/* filter and results */}
<div className=" w-full flex flex-col md:flex-row gap-2 md:justify-between items-center px-4 py-2 md:px-20 h-auto md:h-[100px] bg-[#FAF4F4]">

  <div className="flex  gap-2 md:gap-5 items-center font-normal md:text-[20px]"> 
  <img src="/Assets/Vector.png" alt="" className="w-[19px] h-[17px]" />
    <p>Filters</p>
    <span><PiCirclesFourFill /></span>
    <img src="/Assets/filter.png" alt="" className="w-[21px] h-[20px]" />
    <div className="border-l-2 h-8 border-gray-500 mx-4"></div>
    <p>Showing 1–16 of 32 results</p>
  </div>


  <div className="flex gap-2 md:gap-6 items-center ">
    <p>Show</p>
    <input type="text" placeholder="16"  className="w-9 md:w-[55px] px-2 py-3 md:h-[55px] h-7 text-center"/>
    <p>Sort by</p>
    <input type="text" placeholder="Default"  className=" w-28 md:w-[188px] md:h-[55px] h-7 px-2 py-3"/>

  </div>
</div>

{/* All products */}

<div className="flex flex-wrap justify-center items-center bg-[#ffffff] px-16 gap-[60px] mb-10 md:mb-20">
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 4.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 5.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Granite dining table with dining chair</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 6.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 7.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Plain console with teak mirror</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>

          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 14.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 15.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Granite dining table with dining chair</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 16.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 17.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Plain console with teak mirror</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
         
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 18.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 19.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Granite dining table with dining chair</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 20.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 21.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Plain console with teak mirror</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
         
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 22.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 23.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Granite dining table with dining chair</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 24.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          
          <div className="w-[287px] h-[372]">
            <img src="/Assets/Image 25.png" alt="" className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Plain console with teak mirror</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="h-[60px] w-full flex justify-center gap-8 mt-6 items-center ">
            <div className="w-[60px] h-[60px] bg-[#FBEBB5] flex items-center justify-center ">1</div>
            <div className="w-[60px] h-[60px] bg-[#FFF9E5] flex items-center justify-center">2</div>
            <div className="w-[60px] h-[60px] bg-[#FFF9E5] flex items-center justify-center">3</div>
            <div className="w-[60px] h-[60px] bg-[#FFF9E5] flex items-center justify-center">Next</div>

          </div>
         
        </div>
        
        {/* Details */}

        <div className="w-full h-auto md:h-[300px] bg-[#FAF4F4] flex flex-col md:flex-row justify-center gap-6 items-center">
          <div className="w-[376px] flex flex-col text-center p-9 ">
            <p className="font-medium text-[32px] leading-snug">Free Delivery</p>
            <p className="text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
            
          </div>
          <div className="w-[376px] flex flex-col text-center p-9">
          <p className="font-medium text-[32px] leading-snug">90 Days Return</p>
          <p className="text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="w-[376px] flex flex-col text-center p-9">
          <p className="font-medium text-[32px] leading-snug">Secure Payment</p>
          <p className="text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>








      </div>
      
    

    
  )
}

export default Shop
