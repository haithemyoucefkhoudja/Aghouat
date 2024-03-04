import { getgroupInfo } from "@/actions/FetchGroup"
import { Groups } from "@/components/Groups"
import GroupInfo from "@/types/groupInfo"


export default async function Page() {
    const groupInfo:GroupInfo[] =  await getgroupInfo()
    return(
        <Groups GroupsInfo={groupInfo}></Groups>)

  }