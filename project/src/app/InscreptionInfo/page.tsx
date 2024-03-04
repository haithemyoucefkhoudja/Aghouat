import { getuserInscreptionInfo } from "@/actions/FetchUserInscreptionInfo"
import DossierInscription from "@/types/DossierInscription"

export default async function Page() {
    const userInsInfo:DossierInscription[] =  await getuserInscreptionInfo()
    return(<ul>
        {userInsInfo.map((info:DossierInscription, key_:number) => ( 
            <div className="tw-pb-10">
             <li key={key_}> 
               {Object.entries(info).map(([key, value]) => (
                 <div key={key}>
                   <b>{key}:</b> {value}
                 </div>
               ))}
             </li>
             </div>
        ))}
      </ul>)
  }