import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-4 lg:mt-09">
      <h1 className="text-3xl sm:text-4xl lg:text-7xl text-center tracking-wide">
        Pioneering Toolkit
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for Developers
        </span>
      </h1>
      <p className="mt-11 text-lg text-center text-neutral-500 max-w-3xl">
        Empowering developers to craft virtual realities with cutting-edge
        tools. Unlock boundless potential of immersive experiences, pushing
        boundaries of virtual realm.
      </p>
      <div className="flex flex-col sm:flex-row justify-center my-11 space-y-3 sm:space-y-0">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-sm sm:text-base text-center"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border text-sm sm:text-base text-center"
        >
          Documentation
        </a>
      </div>

      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
