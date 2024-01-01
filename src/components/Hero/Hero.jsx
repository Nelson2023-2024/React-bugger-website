//hooks
import { useState } from 'react'

//images
import BurgerImg1 from '../../assets/burger/burger1.png'
import BurgerImg2 from '../../assets/burger/burger2.png'
import BurgerImg3 from '../../assets/burger/burger3.png'
import Vector  from '../../assets/vector.png'

//imageList
const imageList =[
    {
        id: 1,
        img:BurgerImg1
    },
        {
        id: 2,
        img:BurgerImg2
    },
        {
        id: 3,
        img:BurgerImg3
    },
]

//background
const bgImgage = {
    backgroundImage: `url(${Vector})`,
    backgroungRepeate:'no-repeat',
    backgroundPosition: 'center',
    backgroundSize:'cover',
    height:'100%'
}
function Hero() {
        const [imageId, setImageId] = useState(BurgerImg1)

  return (

    <div style={bgImgage} className='min-h-full bg-gray-100 lg:min-h-[650px]'>
        <div className="flex items-center justify-center min-h-screen backdrop-blur-md">
            <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                {/* text-content srction */}
                <div className='flex flex-col justify-center gap-4 pt-12 text-center sm:pt-0 sm:text-center '>
                    <h1 data-aos="zoom-out" className='text-5xl font-bold sm:text-6xl md:text-7xl'>Welcome to 
                        <span className='bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary drop-shadow-[4px_4px_0_rgba(255, 255,255, 1)]' style={{filter:'drop-shadow(4px 4px 0 rgba(255, 255 , 255 , 1))'}}>Burger</span>
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-900 drop-shadow-[4px_4px_0_rgba(255, 255,255, 1)]' style={{filter:'drop-shadow(4px 4px 0 rgba(255, 199 , 20 , 1))'}}>King</span>
                    </h1>
                    <p data-aos="fade-up" className='text-sm '>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quia facere provident delectus tenetur ad veniam dignissimos temporibus. Quia repellat impedit incidunt, reiciendis maiores veritatis nobis consequatur fuga provident est!
                    </p>
                    <div data-aos="fade-up">
                                            <button className='px-10 py-2 font-bold text-black duration-200 border-white rounded-full bg-gradient-to-r from-primary to-white hover:scale-105'>Order</button>

                    </div>
                </div>
                {/* Image section */}
                <div className='min-h-[400px] flex flex-col justify-center gap-0 items-center '>
                    <img data-aos="fade-left" 
                    data-aos-delay="300"
                        src={imageId}
                        alt=""
                        className='max-w-[430px] w-full mx-auto drop-shadow-[-6px-20px-15px-rgba(0,0,0,.1)] hover:scale-105 duration-300'
                    />
                    <div className='flex items-center px-10 py-2 border rounded-full md:items-end'>
                    {
                        imageList.map(({id, img}) => {
                            return(
                                <div data-aos="zoom-in" className='cursor-pointer' key={id}>
                                    <img className='w-20' src={img} alt="" 
                                    onClick={() => setImageId(img)}
                                    />
                                </div>
                            )
                        })
                    }
                    
                </div>

                </div>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero