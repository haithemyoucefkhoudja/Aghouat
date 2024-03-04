
export async function getgroupInfo() {
    const API_KEY = process.env.API_KEY
    const idDia = process.env.IDDIA
    
    const _URL = `https://progres.mesrs.dz/api/infos/dia/${idDia}/groups`
    const res = await fetch(_URL,
    {
        headers:{
          Authorization: `${API_KEY}`,
        },
        method: 'GET'
    }
    )
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
   
  }
   