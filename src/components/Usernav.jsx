import React from 'react'

const Usernav = () => {
  return (
      <div>
      <AppBar>
        <Typography>Donors</Typography>
        <Button onClick={()=>{
            localStorage.removeItem("authenticated")
            localStorage.removeItem("token")
        }}>Logout</Button>
      </AppBar>
    </div>
  )
}

export default Usernav
