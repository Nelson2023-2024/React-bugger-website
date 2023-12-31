import HeaderectionTitle from "../HeaderSectionTitle.jsx/HeaderectionTitle"

//Slider
import Slider from 'react-slick'


//previousArrow
export const CustomPrevArrow = ({className, style, onClick}) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
};

//nextArrow
export const CustomNextArrow = ({className, style, onClick}) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
};

//slider config
const settings = {
  dots: true,
  arrows: true,
  loop: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  
  
};

//testimonial data
const TestimonialData = [
  {
    id: 1,
    name: "Emma Watson",
    testimonial: "I absolutely loved the variety of flavors and the quality of the burgers. The experience was delightful!",
    img: "https://tse3.mm.bing.net/th?id=OIP.ly97Gx2DaiGrPJXmBEBmPwHaGU&pid=Api&P=0&h=220"
  },
  {
    id: 2,
    name: "Michael Johnson",
    testimonial: "The burgers were a true revelation! The blend of ingredients was exceptional, leaving a memorable taste.",
    img: "https://tse3.mm.bing.net/th?id=OIP.Y2_pJANcit-s3EVpPCHblAHaE_&pid=Api&P=0&h=220"
  },
  {
    id: 3,
    name: "Sophia Adams",
    testimonial: "The experience of savoring these burgers was beyond comparison. Each bite was a burst of flavors!",
    img: "https://i.pinimg.com/originals/15/c3/a4/15c3a465c648a162a0dd1c8d1856d5f6.jpg"
  },
  {
    id: 4,
    name: "Daniel Brown",
    testimonial: "I couldn't believe how delicious the burgers were! It was an experience I'd recommend to everyone.",
    img: "https://tse4.mm.bing.net/th?id=OIP.ViGlpoU2qdl9vGC1mxhpNgHaHa&pid=Api&P=0&h=220"
  },
  {
    id: 5,
    name: "Olivia Jones",
    testimonial: "These burgers are a true masterpiece. The taste lingers long after the last bite!",
    img: "https://kottke.org/plus/misc/images/ai-faces-01.jpg"
  },
  {
    id: 6,
    name: "Matthew Harris",
    testimonial: "I found the burgers to be an epitome of perfection. The flavors were unparalleled!",
    img: "https://i.pinimg.com/originals/15/c3/a4/15c3a465c648a162a0dd1c8d1856d5f6.jpg"
  }
];
//slick installation
// npm i react-slick slick carousel
 //npm i slick-carousel

function Testimonial() {
  return (
    <div className="py-10">
        <div className="container">
            {/* Header Title */}
                <HeaderectionTitle title="Testimonial" subtitle="What out customers say" description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos sed at, ipsum aspernatur "/>
            {/* TEstimonial card Title */}
            <div data-aos="fade-down"  className="max-w-[600px] mx-auto">
                <Slider  className="cursor-grab" {...settings}>
                    {
                        TestimonialData.map(({id, name, testimonial, img  }) =>(
                          <div key={id}>
                            <div  className="p-4 mx-5 my-8 space-y-3 text-center shadow-lg rounded-xl">
                                <img src={img} alt="" 
                                className="block mx-auto rounded-full w-[100px] h-[100px]"
                                
                                />
                                <p className="text-sm text-gray-500">{testimonial}</p>
                                <h1 className="text-xl font-bold">{name}</h1>
                            </div>
                          </div>
                        ))
                    }

                </Slider>
            </div>

        </div>
    </div>
  )
}

export default Testimonial