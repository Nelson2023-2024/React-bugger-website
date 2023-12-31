
import Logo from '../../assets/logo.png'

const NavLinks = [
    {
        id:1,
        tittle: "Home",
        link: "/#"
    },
     {
        id:2,
        tittle: "About",
        link: "/#about"
    },
     {
        id:3,
        tittle: "Menu",
        link: "/#menu"
    },
     {
        id:4,
        tittle: "Services",
        link: "/#services"
    },
]
function Navbar() {
  return (
    <div className='shadow-xl'>
        <div className="container md:py-3 sm:py-0 ">
            <div className="flex items-center justify-between ">
                {/* LOGO */}
            
                <div className="">
                    <a href="/#">
                        <img src={Logo} alt="" className='w-16'/>
                    </a>
                </div>
                {/* NAVLINKS */}
                <div className="flex items-center justify-between gap-4">
                    <ul className='items-center hidden gap-4 sm:flex'>
                        {
                            NavLinks.map(({id, tittle, link}) => {
                                return(
                                    <li key={id}><a className='px-4 py-4 duration-300 hover:text-primary' href={link}>{tittle}</a></li>
                                )
                            })
                        }
                    </ul>
                    <button className='px-4 py-1 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105'>Order</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar