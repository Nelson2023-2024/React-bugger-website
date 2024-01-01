
import Img1 from '../../assets/burger/burger1.png'
import Img2 from '../../assets/burger/burger2.png'
import Img3 from '../../assets/burger/burger3.png'
import HeaderectionTitle from '../HeaderSectionTitle.jsx/HeaderectionTitle'

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: 'Classic Burger',
    description: 'Sink your teeth into our classic beef patty, topped with fresh lettuce, tomatoes, and our signature sauce.',
    aosDelay: 100,
  },
  {
    id: 2,
    img: Img2,
    name: 'Vegetarian Delight',
    description: 'Experience our delightful vegetarian option, packed with grilled veggies, avocado, and zesty sauce.',
    aosDelay: 300,
  },
  {
    id: 3,
    img: Img3,
    name: 'Spicy Chicken Burger',
    description: 'Indulge in our spicy chicken burger, crafted with premium chicken fillet, jalapenos, and tangy spices.',
    aosDelay: 500,
  },
  {
    id: 4,
    img: Img1,
    name: 'Cheeseburger Paradise',
    description: 'Dive into our cheeseburger paradise, featuring layers of melted cheese, crispy bacon, and our secret sauce.',
    aosDelay: 100,
  },
  {
    id: 5,
    img: Img2,
    name: 'Mushroom Burger',
    description: 'Savor our mushroom burger, a delightful mix of sautéed mushrooms, caramelized onions, and Swiss cheese.',
    aosDelay: 300,
  },
  {
    id: 6,
    img: Img3,
    name: 'BBQ Bacon Burger',
    description: 'Try our BBQ bacon burger, a savory blend of smoky BBQ sauce, crispy bacon, and flame-grilled beef.',
    aosDelay: 500,
  },
];

function Services() {
  return (
    <div className='bg-gray-100 '>
        <div className="py-12 lg:py-20">
            <div className="container">
                {/* Header title  section component*/}
                <HeaderectionTitle title="Services" subtitle="Our Services" description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos sed at, ipsum aspernatur "/>

               {/* Grid Cards container */}
                <div className='cards-container'>
                {
                    ServicesData.map(({id,name, img, description,aosDelay })=>{
                        {/* Cards */}
                        return(
                             
                            <div key={id} data-aos="fade-up"
                            data-aos-delay={aosDelay} className=' md:max-w-[350px] max-w-[600px]: rounded-2xl  bg-white group hover:bg-slate-200 group-hover:text-white relative shadow-lg duration-500 '>
                                <div className='h-[100px] relative'>
                                    <img className='max-w-200px block h-[120px] mx-auto relative top-16 transform -translate-y-16  hover:scale-105 duration-500' src={img} alt="" />
                                </div>
                                <div className='p-4 text-center'>
                                    <h1 className='text-xl font-bold text-primary'>{name}</h1>
                                    <p className='text-sm text-gray-500 duration-500 '>{description}</p>
                                     <button className='py-1 mt-2 text-white duration-200 rounded-md px-7 bg-gradient-to-r from-orange-600 to-amber-400 hover:scale-105'>Order</button>

                                </div>

                            </div>
                        )
                    })
                }
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Services