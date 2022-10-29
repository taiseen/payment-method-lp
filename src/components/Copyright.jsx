import { socialMedia } from "../constants"


const Copyright = () => (
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">

        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
            Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
            {
                socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        alt={social.id}
                        src={social.icon}
                        onClick={() => window.open(social.link)}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer 
                        ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
                        // last items margin right programmatically control
                    />
                ))}
        </div>
    </div>
)

export default Copyright