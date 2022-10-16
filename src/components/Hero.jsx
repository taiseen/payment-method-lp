import GetStarted from './GetStarted';
import images from '../assets'
import styles from '../styles'

const Hero = () => {

  return (
    <section className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>

        <div
          id='home'
          className={`flex flex-col md:flex-row ${styles.paddingY}`}
        >
          <div className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}>

            <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 mx-auto ss:mx-0'>
              <img
                src={images.discount}
                alt="discount"
                className='w-[32px] h-[32px]'
              />
              <p className={`${styles.paragraph} text-[15px] ss:text-[18px] ml-2`}>
                <span className='text-white'>20%</span> Discount For {' '}
                <span className='text-white'>1 Month</span> Account
              </p>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
              <h1 className='flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] ss:leading-[100px] leading-[75px]'>
                The Next <br className='hidden sm:block' /> {' '}
                <span className='text-gradient'>Generation</span> {' '}
              </h1>

              {/* ⚪⚪⚪ Circle Logo ⚪⚪⚪ */}
              <div className='ss:flex hidden md:mr-4 mr-0'>
                <GetStarted />
              </div>
            </div>

            <h1 className='font-poppins font-semibold text-[52px] ss:text-[68px] ss:leading-[100px] leading-[75px] w-full'>
              Payment Method
            </h1>

            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Our team of experts uses a methodology to identify the credit cards
              most likely to fit your needs. We examine annual percentage rates,
              annual fees.
            </p>

          </div>

          {/* Robotic arm + gradient effect */}
          <div className={`flex-1 md:my-0 my-10 relative ${styles.flexCenter}`}>

            <img
              src={images.robot}
              alt="robotArm"
              className='w-[100%] h-[100%] relative z-[5]'
            />

            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
            <div className='absolute z-[1] w-[80%] h-[85%] bottom-40 white__gradient' />
            <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />

          </div>

          {/* Display at mobile version */}
          <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero