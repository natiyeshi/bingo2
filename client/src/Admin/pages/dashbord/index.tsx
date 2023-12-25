// import React from 'react'
// import { useEffect, useState } from "react";
import Bar from "../common/Bar"
import Main from "./components/main"
import { pages } from "../../types/types"

const index = () => {

  
  return (
    <div className='flex h-[100vh] overflow-hidden'>
        <Bar pages={pages.Home} />
        <div className='w-3/4 px-3 overflow-auto pb-20 relative'>
            <Main  />
        </div>
    </div>
  )
}

export default index
