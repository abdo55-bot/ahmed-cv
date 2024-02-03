import cir1 from '../assets/cir1.jpg'
import cir2 from '../assets/cir2.jpg'

function Certificates(){
    return(
        <>
        <div className="bg-gradient-to-b from-black to-gray-800 w-full h-screen">
            <div className='flex w-full h-screen justify-evenly items-center flex-wrap'>
                <div className='w-[30%] hover:scale-150 duration-300'><img src={cir1} />
                
                </div>
                <div className='w-[50%] hover:scale-150 duration-300'><img src={cir2}/></div>

            </div>

            

        </div>
        </>
    )
}
export default Certificates;