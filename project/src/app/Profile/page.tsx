import { getuserInfo } from "@/actions/FetchUserInfo"
import Profile from "@/types/profile"


export default async function Page() {
    const userInfo:Profile =  await getuserInfo()
    return(<div>
        {Object.entries(userInfo).map(([key, value]) => (
      <div key={key}>
       <b>{key}:</b> {value}
      </div>
    ))}
    </div>)
  }