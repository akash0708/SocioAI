import IeeeLogo from "../../public/ieee hero logo.png";
import vector1 from "../../public/bg-hero-vector1.png";
import vector2 from "../../public/bg-hero-vector2.png";
import hands from "../../public/hand-pic-hero.png";
import logo from "../../public/ieee logo.png";
import kolkata from "../assets/kolkata.png";

function Hero() {
  return (
    <div className="h-screen relative py-28 bg-gradient-to-r from-white via-green-400 to-white ">
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
        className="visible object-contain absolute right-0 top-1/2 transform -translate-y-1/2 w-full"
        src={hands}
        alt=""
      />

      <div className="flex h-full flex-col items-center justify-center gap-y-4">
        {/* <h1
          className="lg:text-4xl text-xl md:text-3xl font-bold text-[#010101] text-center leading-[140%]"
          style={{ fontFamily: "JetBrains Mono" }}
        >
          IEEE COMPUTER SOCIETY <br />
          CHAPTER KOLKATA SECTION
        </h1> */}
        <div className="w-80 h-36">
          <img src={kolkata} alt="" className="w-full h-full object-cover" />
        </div>
        <p
          className="lg:text-2xl  text-lg font-light text-[#0F5132] tracking-widest"
          style={{ fontFamily: "JetBrains Mono" }}
        >
          PRESENTS
        </p>
        <h1
          className="text-[#1D2E28] font-bold lg:text-[150px] md:text-6xl text-5xl lg:leading-[187.5px]"
          style={{ fontFamily: "Gothic A1" }}
        >
          Socio<span className="text-black">AI</span>
        </h1>
        <p
          className="text-[#0F5132] lg:text-2xl md:text-lg text-sm text-center"
          style={{ fontFamily: "JetBrains Mono" }}
        >
          Showcase your <span className="text-black">Research.</span> Shape{" "}
          <span className="text-black">Tomorrow.</span>
        </p>
        <div
          className="flex items-center gap-4 md:flex-row flex-col"
          style={{ fontFamily: "JetBrains Mono" }}
        >
          <p className="lg:text-[24px] text-md font-semibold">
            In association with
          </p>
          <div className="inline w-48 h-20">
            <img
              src={IeeeLogo}
              alt="IEEE Logo"
              className="w-full h-full object-cover"
            />
          </div>
          {/* <img className="lg:h-16 h-10" src={logo} alt="IEEE Logo" /> */}
        </div>
        <div>
          <a
            href="https://forms.gle/uXxHnAHNdnkLJaBDA"
            target="_blank"
            className="bg-[#1D2E28] text-white font-bold lg:text-2xl text-md px-6 py-3 rounded-lg relative top-4"
            style={{ fontFamily: "JetBrains Mono" }}
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
