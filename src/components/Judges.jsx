import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import judges from "./../assets/judges";

function JudgeCard({ judge }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={judge.picture} alt="Judge Picture" width={350} />
        <div className="flex justify-between w-full">
          <div>
            <h1 className="mt-3 text-2xl text-[#1D2E28] font-semibold">
              {judge.name}
            </h1>
            <h2 className="text-lg font-medium text-[#0f5132]">
              {judge.designation}
            </h2>
          </div>
          <div className="flex gap-x-2 items-center text-3xl pb-3 pr-2">
            <a
              href={judge.instagram}
              target="_blank"
              className="hover:text-[#0a5c36]"
            >
              <FaInstagram />
            </a>
            <a
              href={judge.linkedin}
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

const Judges = () => {
  return (
    <div className="flex flex-col items-center mt-[8vh]">
      <h1
        className="text-[#1D2E28] text-4xl md:text-6xl lg:text-6xl font-bold mb-6 xl:mb-8 text-center lg:text-left"
        style={{ fontFamily: "Gothic A1" }}
      >
        JUDGES
      </h1>
      <div className="flex flex-wrap gap-x-32 w-5/6 justify-center">
        {judges.map((judge) => (
          <JudgeCard judge={judge} key={judge.number} />
        ))}
      </div>
    </div>
  );
};

export default Judges;
