import Link from "next/link";

const Hero = () => {
  return (
    
   <div className="">
      <div className="h-auto md:h[600px] lg:h-[900px] w-full flex flex-wrap justify-center items-center bg-[#FBEBB5] px-5 py-5 md:p-7">
        <div className="flex items-center h-auto md:w-1/2 justify-end">
          <div>
            <h1 className="text-[#000000] text-[64px]">
              Rocket single <br/> 
              seater
            </h1>
            <p className="text-[#000000] text-[24px] border-b-[2px] w-[121px] border-[#000000] text-center">
              <Link href="/Shop">Shop Now</Link>
            </p>
          </div>
        </div>
        <div className="  md:w-1/2 ">
          <img
            src="/Assets/Image 1.png"
            alt=""
            className="w-[853px] md:h-[700px] object-contain scale-x-[-1]"
          />
        </div>
      </div>
    </div>
         
  
    
  );
};

export default Hero;
