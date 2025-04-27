'use client'
import { useRouter } from "next/navigation"


export default async function UserPanel() {
  const router = useRouter()
  const getMyData = async () => {
    const res = await fetch('/api/users',{
      method:"POST"
    })
    const userData = await res.json()
    if(res.status===401){
      router.push('/signin')
      return
    }
    if(res.status===200){
      console.log(userData.data.name)
      console.log(userData.data.age)
    }
  }

  return (
    <div>
      <h1>USER PANEL</h1>
      <button onClick={getMyData}>Demo</button>


    </div>
  )
}
