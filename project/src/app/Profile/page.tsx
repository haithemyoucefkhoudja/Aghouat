import { getuserInfo } from "@/actions/FetchUserInfo"
import Profile from "@/types/profile"
import Avatar from '@/public/Avatar.png'
import Image from "next/image"

/*
<div>
        {Object.entries(userInfo).map(([key, value]) => (
      <div key={key}>
       <b>{key}:</b> {value}
      </div>
    ))}
    </div>
*/

export default async function Page() {
    const userInfo:Profile =  await getuserInfo()
    return(
      <div className="Box shadow m-4">
        <div className="Profile pt-4">
            <div className="Box d-flex align-items-center gap-3 p-3">
                <article className="FullName">
                <Image src={Avatar} width={120} height={120} alt="" className="rounded-circle" />
                    <p className="c-text fw-bold s20">Lisha Lokwani</p>
                    <p className="c-grey s15">Student</p>
                </article>
                <article className="OtherInfo d-flex flex-column gap-3 ms-5 flex-grow-1">
                    <div className="Row">
                        <div className="Text d-flex gap-3">
                            <span >Place of birth</span>
                            <span >Date of birth</span>
                        </div>
                        <div className="Inputs d-flex gap-3">
                            <input type="text" className="Input px-2 py-2 rd-5 default" value="Ain Kercha" />
                            <input type="text" className="Input px-2 py-2 rd-5 default" value="2004-02-09"  />
                        </div>
                    </div>
                    <div className="Row">
                        <div className="Text d-flex gap-3">
                            <span>Baccalaureate degree</span>
                            <span>Baccalaureate specialty</span>
                            <span>Baccalaureate year</span>
                        </div>
                        <div className="Inputs d-flex gap-3">
                            <input type="text" className="Input px-2 py-2 rd-5 default" value="14.5"  />
                            <input type="text" className="Input px-2 py-2 rd-5 default" value="SCIENCES EXPERIMENTALES"  />
                            <input type="text" className="Input px-2 py-2 rd-5 default" value="2019"  />
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <div className="ProfileId pt-4">
            <p className="px-4 py-1 bc-prim-blue c-white fw-bold s18">matricule : 37049153</p>
        </div>
    </div>

    )
  }
  