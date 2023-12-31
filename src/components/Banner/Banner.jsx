
import BurgerImg from '../../assets/burger/burger5.png'
import { GrSecure } from "react-icons/gr";
 import { IoFastFoodSharp } from "react-icons/io5";
 import { GiFoodTruck } from "react-icons/gi";


function Banner() {
  return (
    <div className='min-h-full'>
        <div className='min-h-[500px] flex justify-center items-center'>

            <div className='container'>
                <div className='grid items-center grid-cols-1 md:grid-cols-2'>
                    {/* Image section */}
                    <div data-aos="fade-right" >
                        <img src={BurgerImg} alt="" className='max-w-[430px] w-full mx-auto drop-shadow-2xl'/>
                    </div>
                    {/* Text section */}
                    <div data-aos="fade-left" className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-3xl font-bold text-center md:text-left text-primary'>By 3 get 1 free</h1>
                        <p className='text-sm leading-5 tracking-wide text-gray-500'>Indulge in our special offer! Purchase three of your favorite burgers, and we'll treat you to an extra one for free. Discover the joy of deliciousness with our delightful range of burgers made just for you.
                     <br />
                     <br />
                     Whether youre a meat lover or prefer vegetarian options, our menu has something to satiate everyones taste buds. Taste the goodness and experience satisfaction with every bite.
                        </p>
                        <div className='flex justify-center gap-6'>
                            <div>
                                <GrSecure  className='w-20 h-20 p-5 text-3xl duration-300 rounded-full shadow-lg bg-violet-300 hover:bg-violet-500'/>
                               
                            </div>
                            <div>
                                <IoFastFoodSharp className='w-20 h-20 p-5 text-3xl duration-300 rounded-full shadow-lg bg-violet-300 hover:bg-violet-500'/>
                               
                            </div>

                             <div>
                                <GiFoodTruck  className='w-20 h-20 p-5 text-3xl rounded-full shadow-lg bg-violet-300 '/>
                               
                            </div>
                            
                        </div>
                        <button className='px-4 py-3 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105'>Order</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Banner