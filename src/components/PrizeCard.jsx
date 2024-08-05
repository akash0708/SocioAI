import { FaTrophy } from "react-icons/fa";
import { CiStopwatch } from "react-icons/ci";

function PrizeCard({position}){
    const positionText= position==1?"First":position==2?"Second":"Third";
    const cupSize= position==1?200:position==2?160:120;
    // const cupSize= 200;
    return(
        <div className="bg-green-400 rounded-lg w-64 h-80 relative">
            <div className="bg-white flex flex-col justify-center gap-8 items-center h-full transition-opacity duration-500 ease-in hover:opacity-0 w-full z-10 rounded-lg absolute">
                <FaTrophy size={cupSize} color="rgb(10, 92, 54)"/>

                <div className="text-xl font-semibold">
                    {positionText} Prize

                </div>


            </div>
            <div className="absolute flex flex-col justify-center gap-8 items-center h-full w-full">
                <CiStopwatch size={50}/>
                <div>Yet to be disclosed</div>

            </div>
            
        </div>
    )
}

export default PrizeCard;