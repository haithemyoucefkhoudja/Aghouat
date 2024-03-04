import { getData } from "@/actions/FetchBacNotes"
import { NotesList } from "@/components/notes"


export default async function Page() {
    const notes =  await getData()

    return (<NotesList Notes={notes}/>)
  }