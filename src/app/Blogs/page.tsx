import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaTag } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";

const page = () => {
  return (
    <div>
      {/* Blog Main page */}
      <div className="relative w-full h-[316px] mb-14">
       
        <div className="absolute inset-0 bg-[url('/Assets/Image_13.jpg')] bg-cover bg-center opacity-50"></div>
        {/* Content on Top */}
        <div className="relative w-full h-full flex flex-col justify-center items-center">
        <img src="/Assets/Image 23.png" alt="shop logo" className="w-[77px] h-[77px]" />
          <p className="font-medium text-[48px] leading-[72px]">Blog</p>
          <div className="flex items-center justify-center space-x-2"> {/* Add space between text */}
            <p className="font-medium">Home</p>
            <MdOutlineKeyboardArrowRight className="text-xl" /> {/* Align the arrow icon */}
            <p>Blog</p>
          </div>
        </div>
      </div>



      <div>
   

   {/* Blog Content*/}
   <div className="bg-white py-5">
     <div className="container mx-auto px-4">
       <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
         {/* Left side */}
         <div className="md:col-span-3 space-y-6">
            
           
         <img src="/Assets/Image 26.jpg" alt="Image" className="w-auto h-auto md:w-[817px] md:h-[500px] rounded-xl" />
           <div className="flex items-center text-gray-500 gap-4">
            <span ><FaUser /></span><p>Admin</p><span><FaCalendar /></span><p>14 Oct 2022</p><span><FaTag /></span><p>Wood</p>
           </div>
             <h1 className="text-3xl font-bold mt-4">Going all-in with millenial design</h1>
             <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos culpa ut nobis molestiae alias suscipit eos, laborum quia cum libero vel quibusdam rem consequuntur facilis! Expedita ab illum reiciendis.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
               pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
             </p>
             <p className="text-[24px] underline underline-offset-[16px] mb-44 font-medium py-[10px]">
                Read More
              </p>
           

           
           
          
              <img src="/Assets/Image 27.jpg" alt="Image" className="w-auto h-auto md:w-[817px] md:h-[500px] rounded-xl" />
           <div className="flex items-center text-gray-500 gap-4">
            <span ><FaUser /></span><p>Admin</p><span><FaCalendar /></span><p>14 Oct 2022</p><span><FaTag /></span><p>Wood</p>
           </div>
             <h1 className="text-3xl font-bold mt-4">Going all-in with millenial design</h1>
             <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos culpa ut nobis molestiae alias suscipit eos, laborum quia cum libero vel quibusdam rem consequuntur facilis! Expedita ab illum reiciendis.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
               pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
             </p>
             <p className="text-[24px] underline underline-offset-[16px] mb-44 font-medium py-[10px]">
                Read More
              </p>

           
           
         <img src="/Assets/Image 28.jpg" alt="Image" className="w-auto h-auto md:w-[817px] md:h-[500px] rounded-xl" />
           <div className="flex items-center text-gray-500 gap-4">
            <span ><FaUser /></span><p>Admin</p><span><FaCalendar /></span><p>14 Oct 2022</p><span><FaTag /></span><p>Wood</p>
           </div>
             <h1 className="text-3xl font-bold mt-4">Going all-in with millenial design</h1>
             <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos culpa ut nobis molestiae alias suscipit eos, laborum quia cum libero vel quibusdam rem consequuntur facilis! Expedita ab illum reiciendis.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
               pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
             </p>
             <p className="text-[24px] underline underline-offset-[16px] mb-44 font-medium py-[10px]">
                Read More
              </p>


         </div>
            {/* Rigt side */}
            {/* Form */}
            
        
        <div className=" flex flex-col gap-10 w-full md:w-[393px] md:h-[537px]  ">
            <input type="text" className="w-full h-auto md:h-[58px] rounded-2xl border-2 border-[#9F9F9F]" />
            <div className="text-[#9F9F9F] px-16  flex flex-col gap-10">
            <h1 className="font-normal text-black text-2xl">Categories</h1>
            
                <div className="flex justify-between ">
                <p className=" space-y-9">Crafts</p> <p>2</p>
                </div>
                <div className="flex justify-between " >
                <p className=" space-y-9">Design</p>   <p>8</p>
                </div>
                <div className="flex justify-between ">
                <p className=" space-y-9">Handmade</p> <p>7</p>
                </div>
                <div className="flex justify-between ">
                <p className=" space-y-9">Interior</p> <p>1</p>
                </div>
                <div className="flex justify-between ">
                <p className=" space-y-9">Wood</p> <p>6</p>
                </div>
                </div>
                
            
        </div>

        
         <div className="md:col-span-2 space-y-6">
           <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>

          
           <div className="flex items-center space-x-4">
             <Image
               src=""
               alt="Recent Post 1"
               width={100}
               height={100}
               className="object-cover"
             />
             <div>
               <h2 className="text-black font-bold">Going all-in one with millenial design</h2>
               <p className="text-gray-600 text-sm">
                 03 Aug 2022
               </p>
             </div>
           </div>

           
           <div className="flex items-center space-x-4">
             <Image
               src=""
               alt="Recent Post 2"
               width={100}
               height={100}
               className="object-cover"
             />
             <div>
               <h2 className="text-black font-bold">Exploring new ways of decorating</h2>
               <p className="text-gray-600 text-sm">
                 03 Aug 2022
               </p>
             </div>
           </div>

          
           <div className="flex items-center space-x-4">
             <Image
               src=""
               alt="Recent Post 3"
               width={100}
               height={100}
               className="object-cover"
             />
             <div>
               <h2 className="text-black font-bold">Hand made pieces that took time to make</h2>
               <p className="text-gray-600 text-sm">
               03 Aug 2022
               </p>
             </div>
           </div>

           
           <div className="flex items-center space-x-4">
             <Image
               src=""
               alt="Recent Post 4"
               width={100}
               height={100}
               className="object-cover"
             />
             <div>
               <h2 className="text-black font-bold">Modern home in Milan</h2>
               <p className="text-gray-600 text-sm">
               03 Aug 2022
               </p>
             </div>
           </div>

           <div className="flex items-center space-x-4">
             <Image
               src=""
               alt="Recent Post 5"
               width={100}
               height={100}
               className="object-cover"
             />
             <div>
               <h2 className="text-black font-bold">Colorful office redesign 5</h2>
               <p className="text-gray-600 text-sm">
               03 Aug 2022
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>


 </div>



    






    </div>
  )
}

export default page





