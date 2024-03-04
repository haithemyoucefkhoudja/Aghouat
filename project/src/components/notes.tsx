import Mark from "@/types/mark";
export const NotesList = ({Notes}:{Notes:Mark[]}) => {
return (
  
  <div className="Boxes d-grid p-4">
    {Notes.map((note: Mark, key:number) => ( // Accédez à Notes via props
          <Note Note={note} key={key* 2}/>
        ))}
                    
  </div>
    
)

  function Note({Note}:{Note:Mark}) {
    return (<article className="Box position-relative bc-light-blue p-3 rd-15 overflow-hidden trans3">
      <div className="Text position-relative">
        <p className="c-bold-grey fw-bold s20">{Note.refCodeMatiereLibelleFr}</p>
        <p className="c-grey">Note : <span className="c-bold-grey fw-bold">{Note.note}</span></p>
      </div>
    </article>);
  }
}