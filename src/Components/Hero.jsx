

export const Hero = () => {
    return (
        <div
        id="Home"
        className="h-svh w-svw bg-fixed bg-center bg-cover bg-opacity-35"
        style={{ backgroundImage: `url("./bg.jpg")` }}
      >
        {/* <div className="h-24">
           </div> */}
        <div className="w-auto h-full flex flex-col justify-center items-center bg-slate-300 bg-opacity-40">
          <img src="./mainlogofinal.png" className="lg:w-2/3 w-full" />
          <p className="lg:text-[80px] text-[40px] mt-10 font-bold font-serif text-[#000c1e]">
            Unifest Program
          </p>
          <div className="bg-[#000c1e] lg:w-3/4 w-full mt-10 text-center justify-center items-center rounded-xl flex">
            <p className="lg:text-[50px] text-[30px] font-extrabold font-serif text-white">
              Be the representative of your campus
            </p>
            <button className="hover:bg-black hover:text-white hover:border hover:border-white rounded-xl h-auto w-auto lg:h-10 lg:w-32 ml-10 bg-white">
              <a className="lg:font-extrabold font-bold lg:text-lg" href="#">
                Apply Now
              </a>
            </button>
          </div>
        </div>
      </div>
    );
}
