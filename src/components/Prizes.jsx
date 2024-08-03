import CurtainCard from "./CurtainCard.jsx";

function Prizes(){
    return(        
        <div className='flex flex-col justify-center items-center p-4'>
            <div className='text-[76.63px] font-bold text-center text-[#1D2E28] pb-10'>Prizes</div>
            <div className="flex flex-col md:flex-row gap-6 my-4">
                <CurtainCard position={"First"}/>
                <CurtainCard position={"Second"}/>
                <CurtainCard position={"Third"}/>
            </div>

        </div>
    )
}

export default Prizes;