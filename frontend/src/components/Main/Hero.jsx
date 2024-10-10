import HeroBG from '../../assets/HeroBG.Jpg'

const Hero = () => {
    return (
      <div id='hero'
        className="h-screen bg-center  bg-cover"
        style={{ backgroundImage: `url(${HeroBG})` }}
>
        <div className="flex flex-col justify-center px-32 items-start h-full bg-black bg-opacity-50">
          <h1 className="text-7xl text-bold text-white">
            <span>Unravel Your Financial Anveshan </span> <br />
            <span className="">With</span> <br />
            <span>Power Of Arthasastra</span> 
          </h1>
          <br />
          <div className="text-2xl text-white">
            <div>Take control of your financial journey.</div>
            <div>Combining Modern Technology with ancient wisdom, our expense tracker</div>
            <div>empowers you to align your daily expenses with long-term prosperity.</div>
          </div>
          <button className=" my-4 px-6 py-3 border-2 border-yellow-600 text-yellow-600 font-bold rounded-lg hover:bg-yellow-600 hover:text-white transition-all duration-300">
            Get Started
          </button>

        </div>
      </div>
    );
  };
  
  export default Hero;
  