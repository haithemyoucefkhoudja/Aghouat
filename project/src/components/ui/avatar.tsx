import Image from "next/image"
export const Avatar_User = () => {
return (
      <div className="bg-white p-4 flex items-center">
        <Image
        className="tw-rounded-full"
        alt="haithem"
        src='/Avatar.png'
        width={64}
        height={64}
        ></Image>
        <div>
          <div className="c-text  font-semibold "><b>Lisha Lokwani</b></div>
          <div className="tw-text-sm c-grey">Student</div>
        </div>
      </div>
    )
    
  }