import images from '../assets'
import styles from '../styles'

const GetStarted = () => {

  // Circle UI creation...

  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>

      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>

        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-medium font-poppins text-[18px] leading-[23px] mr-2">
            <span className="text-text-gradient">Get </span>
          </p>

          <img
            src={images.arrowUp}
            alt="upArrow"
            className='w-[23px] h-[23px] object-contain'
          />
        </div>

        <p className="font-medium font-poppins text-[18px] leading-[23px]">
          <span className="text-text-gradient">Started</span>
        </p>

      </div>

    </div>
  )
}

export default GetStarted