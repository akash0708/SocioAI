import CurtainCard from "./CurtainCard.jsx";

function Prizes() {
  return (
    <section id="prizes">
    <div className="flex flex-col justify-center items-center ">
      <div
        className="text-6xl font-bold text-center text-[#1D2E28] pb-10"
        style={{ fontFamily: "Gothic A1" }}
      >
        PRIZES
      </div>
      <div className="flex flex-col md:flex-row gap-6 my-4">
        <CurtainCard position={"First"} />
        <CurtainCard position={"Second"} />
        <CurtainCard position={"Third"} />
      </div>
    </div>
    </section>
  );
}

export default Prizes;
