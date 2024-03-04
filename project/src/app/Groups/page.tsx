import { getgroupInfo } from "@/actions/FetchGroup"
import GroupInfo from "@/types/groupInfo"


export default async function Page() {
    const groupInfo:GroupInfo[] =  await getgroupInfo()
    return(
        <ul className="c-prim-blue">
        {groupInfo.map((info:GroupInfo, key_:number) => ( 
            <div className="pb-5">
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