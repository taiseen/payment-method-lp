import images from "../assets"


const FeedbackCard = ({ content, name, title, img }) => (

  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] mr-0 sm:mr-5 md:md-10 my-5 feedback-card">
    
    <img
      alt="quotes"
      src={images.quotes}
      className="w-[27px] h-[27px] object-contain"
    />

    <p className="font-poppins font-normal text-[18px] leading-[32px] my-10">{content}</p>

    <div className="flex flex-row items-center">

      <img
        src={img}
        alt={name}
        className="w-[48px] h-[48px] rounded-full"
      />

      <div className="flex flex-col ml-4 font-poppins">
        
        <h2 className="font-semibold text-[20px] leading-[32px]">{name}</h2>

        <p className="font-normal text-[16px] leading-[24px]">{title}</p>
        
      </div>

    </div>
  </div>
)

export default FeedbackCard