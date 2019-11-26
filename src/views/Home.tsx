import React, { useEffect } from "react"
import { auth } from "../components/Firebase"

function Home(props: any) {
  useEffect(() => {
    // Setup a listener for authentication
    auth.onAuthStateChanged((user: firebase.User | null) => {
      if (user != null) {
        props.history.push(`/create`)
      } else {
        props.history.push(`/login`)
      }
    })
  }, [])

  return (
    <div>
      {/* Home Component */}
    </div>
  )
}

export default Home
