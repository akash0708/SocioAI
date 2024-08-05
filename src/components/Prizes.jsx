import PrizeCard from "./PrizeCard.jsx";

function Prizes() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div
        className="text-6xl font-bold text-center text-[#1D2E28] pb-10"
        style={{ fontFamily: "Gothic A1" }}
      >
        PRIZES
      </div>
      <div className="flex flex-col md:flex-row gap-6 my-4">
        <PrizeCard position={2} />
        <PrizeCard position={1} />
        <PrizeCard position={3} />
      </div>
    </div>
  );
}

export default Prizes;
