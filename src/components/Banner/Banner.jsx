
import BurgerImg from '../../assets/burger/burger5.png'
import { GrSecure } from "react-icons/gr";
 import { IoFastFoodSharp } from "react-icons/io5";
 import { GiFoodTruck } from "react-icons/gi";


function Banner() {
  return (
    <div className='min-h-full'>
        <div className='min-h-[500px] flex justify-center items-center'>

            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                    {/* Image section */}
                    <div>
                        <img src={BurgerImg} alt="" className='max-w-[430px] w-full mx-auto drop-shadow-2xl'/>
                    </div>
                    {/* Text section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-3xl text-center md:text-left font-bold text-primary'>By 3 get 1 free</h1>
                        <p className='text-gray-500 text-sm tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium qui provident illo maiores nulla sint quae commodi perferendis voluptate, veritatis similique laborum voluptatem maxime earum, sapiente nemo! Hic, sit! Quidem.
                        <br />
                        <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis tempore expedita maiores consectetur saepe at dolore. Alias enim cumque assumenda distinctio ab a ipsam voluptate dignissimos vel? Ullam, ab tempora!
                        </p>
                        <div className='flex gap-6 justify-center'>
                            <div>
                                <GrSecure  className='text-3xl h-20 w-20 shadow-lg p-5 rounded-full bg-violet-300 hover:bg-violet-500 duration-300'/>
                               
                            </div>
                            <div>
                                <IoFastFoodSharp className='text-3xl h-20 w-20 shadow-lg p-5 rounded-full bg-violet-300 hover:bg-violet-500 duration-300'/>
                               
                            </div>

                             <div>
                                <GiFoodTruck  className='text-3xl h-20 w-20 shadow-lg p-5 rounded-full bg-violet-300 '/>
                               
                            </div>
                            
                        </div>
                        <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-3 rounded-full hover:scale-105 duration-200'>Order</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Banner