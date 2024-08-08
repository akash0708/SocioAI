import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import speakers from "../assets/speakers";

function SpeakerCard({ speaker }) {
  return (
    <>
      <div className="flex flex-col items-center bg-green-200 shadow-green-800 shadow-xl rounded-lg overflow-hidden">
        <img src={speaker.picture} alt="Speaker Picture" width={300} />
        <div className="flex justify-between w-full pt-4 pb-8 px-4">
          <div>
            <h1 className="\ text-2xl text-[#1D2E28] font-semibold">
              {speaker.name}
            </h1>
            <h2 className="text-lg font-medium text-[#0f5132]">
              {speaker.designation}
            </h2>
          </div>
          <div className="flex gap-x-2 items-center text-3xl pb-3 pr-2">
            <a
              href={speaker.instagram}
              target="_blank"
              className="hover:text-[#0a5c36]"
            >
              <FaInstagram />
            </a>
            <a
              href={speaker.linkedin}
              target="_blank"
              className="hover:text-[#0a5c36]"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

const Speakers = () => {
  return (
    <section id="speakers">
    <div className="flex flex-col items-center py-16 bg-green-100">
      <h1
        className="text-[#1D2E28] text-4xl md:text-6xl lg:text-6xl font-bold mb-6 xl:mb-8 text-center lg:text-left"
        style={{ fontFamily: "Gothic A1" }}
      >
        SPEAKERS
      </h1>
      <div className="flex flex-wrap gap-x-12 w-5/6 justify-center">
        {speakers.map((speaker) => (
          <SpeakerCard speaker={speaker} key={speaker.number} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Speakers;
