import Image from "next/image";
import banner from "../../images/bannerImg.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Image Section */}
      <Image
        src={banner}
        alt="Banner Image"
        className="w-full h-full object-cover"
        width={400}
        height={400}
        priority // Ensures the image loads quickly
      />
      {/* Overlay and Text */}
      <div className="absolute inset-0 bg-black/40 text-gray-100 flex flex-col items-center justify-center px-4 text-center">
        {/* Hero Title */}
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[150px] font-bold">
          Tailor Smith
        </h2>
        {/* Hero Subtitle */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold">
          Traveler, Photographer
        </p>
      </div>
    </div>
  );
};

export default Hero;
