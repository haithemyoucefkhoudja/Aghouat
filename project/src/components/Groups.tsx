import GroupInfo from "@/types/groupInfo";
function Group({GroupInfo}:{GroupInfo:GroupInfo}) {
    return (
        /*
    <article className="Box position-relative bc-light-blue p-3 rd-15 overflow-hidden trans3">
      <div className="Text position-relative">
      {Object.entries(GroupInfo).map(([key, value]) => (
            <div key={key + '50' }>
              <p className="c-bold-grey">{key}<span className="c-grey fw-bold">{value}</span></p>
            </div>
          ))}
        
      </div>
    </article>*/
    <>
        <li className="py-3 sm:py-4 tw-px-5">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                    {Object.entries(GroupInfo).map(([key, value]) => (
                        <div className="tw-mb-5">
                        <p className="tw-text-lg tw-font-medium tw-text-gray-900 tw-truncate">
                        {key}
                    </p>
                    <p className="tw-text-md text-gray-500 truncate ">
                        {value}
                    </p>
                    <hr></hr>
                    </div>
          ))}

                        
                    </div>
                </div>
            </li>
            </>
    );
  }
export const Groups = ({GroupsInfo}:{GroupsInfo:GroupInfo[]}) => {
    return(
        
        <div className="Boxes tw-grid tw-gr tw-gap-4  p-4">
        {GroupsInfo.map((info:GroupInfo, key_:number) => ( 
        <div className="tw-w-full tw-max-w-md  tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg  tw-shadow tw-sm:p-8 ">
            <header className=" tw-bg-gradient-to-b tw-from-sky-400 tw-to-blue-400 tw-h-12 tw-container tw-my tw-rounded-lg">
            <h5 className="tw-text-xl tw-font-bold tw-leading-none tw-text-white ">GROUP {key_}</h5>
            </header>
    <div className="tw-flex tw-items-center justify-between mb-4">        
   </div>
   <div className="flow-root">
   <ul role="list" className="tw-divide-y tw-divide-gray-200 ">
         <Group GroupInfo={info} key={key_}></Group>
    </ul>    
      </div>
      </div>
      ))}
      </div>)
}