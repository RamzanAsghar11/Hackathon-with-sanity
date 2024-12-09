import Link from "next/link";

function TopPicks() {
  return (
    <>
      <div className="h-[777] text-black">
        <div>
          <p className="text-[36px] text-center py-[30px]">Top Picks For You</p>
          <p className="text-[16px] text-[#9F9F9F] text-center py-[6px]">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center bg-[#ffffff] gap-[40px]">
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
         
        </div>
        <p className="text-[24px] underline underline-offset-[16px] text-center font-medium py-[10px]">
                <Link href="/Shop">View more</Link>
              </p>
       
      </div>
      <div className=" h-auto md:h-[639px] w-full flex flex-wrap bg-[#FFF9E5] items-center md:justify-start justify-center gap-6">
            <div className="flex justify-center items-start">
            <img src="/Assets/Image 8.png" alt="" className="w-[983px] h-[700px]"/>
            </div>
          <div className="text-center flex flex-col items-center lg:px-7 space-y-9">
            <p className="font-medium text-2xl ">New Arrivals</p>
            <p className="font-bold text-5xl ">Asgaard sofa</p>
            <div className="w-[255px] h-[64px] font-normal border border-black flex items-center justify-center " >
            <button className=" ">Order Now</button>
            </div>
          </div>

      </div>
    </>
  );
}

export default TopPicks;
