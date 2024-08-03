import IeeeLogo from "../../public/ieee hero logo.png";
import vector1 from "../../public/bg-hero-vector1.png";
import vector2 from "../../public/bg-hero-vector2.png";
import hands from "../../public/hand-pic-hero.png";
import logo from "../../public/ieee logo.png"

function Hero() {
  return (
    <div className="h-screen relative py-28 bg-gradient-to-r from-white via-green-400 to-white overflow-hidden">
      <div className="ellipse bg-black/20  top-0 left-[7%]"></div>
      <div className="ellipse bg-black/20 top-0 right-[7%]"></div>
      <div className="ellipse bg-black/15 -top-10 right-[35%]"></div>
      <div className="ellipse bg-black/25 -bottom-64 right-[35%]"></div>
      <img
        className="object-contain absolute -left-24 top-20"
        src={vector1}
        alt=""
      />
      <img
        className="object-contain absolute right-10 bottom-24"
        src={vector2}
        alt=""
      />
      <img
        className="object-contain absolute right-0 top-1/2 transform -translate-y-1/2 w-full"
        src={hands}
        alt=""
      />

      <div className="flex h-full flex-col items-center justify-center gap-y-4">
        <h1 className="text-4xl font-bold text-[#010101] text-center leading-[140%]">
          IEEE COMPUTER SOCIETY <br />
          CHAPTER KOLKATA SECTION
        </h1>
        <p className="text-2xl font-light text-[#0F5132]">PRESENTS</p>
        <h1 className="text-[#1D2E28] font-bold text-[100px] leading-[100%]">
          Socio <span className="text-black">AI</span>
        </h1>
        <p className="text-[#0F5132] text-2xl">
          Showcase your <span className="text-black">Research.</span> Shape{" "}
          <span className="text-black">Tomorrow.</span>
        </p>
        <div className="flex items-center gap-x-4">
          <p className="text-[24px]">In association with</p>
          <img src={IeeeLogo} alt="IEEE Logo" />
          <img className="h-16" src={logo} alt="IEEE Logo" />
        </div>
        <div>
          <a
            href="https://forms.gle/uXxHnAHNdnkLJaBDA"
            target="_blank"
            className="bg-[#1D2E28] text-white font-bold text-2xl px-6 py-3 rounded-lg relative top-4"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
