//images
import PlayStoreImg from '../../assets/play_store.png'
import AppStoreImg from '../../assets/app_store.png'


function AppStore() {
  return (
    <div className='bg-gray-100 py-14'>
        <div className="container">
            <div className="grid items-center">
                <div className='max-w-xl mx-auto space-y-6'>
                    <h1 data-aos="fade-up"  className='text-xl font-semibold text-center text-gray-700 sm:text-4xl'>Burger King available for Android and IOS</h1>
                    <div className='flex flex-wrap items-center justify-center'>
                        <a data-aos="fade-right"  href="#">
                            <img src={PlayStoreImg} alt="" className='max-w[100px] sm:max-w-[200px]' />
                        </a>
                          <a data-aos="fade-left"  href="#">
                            <img src={AppStoreImg} alt="" className='max-w[100px] sm:max-w-[200px]' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppStore