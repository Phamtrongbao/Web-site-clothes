import React from 'react'
import "../AccountTemplate/Account.css"
import { url } from 'inspector'
import { Outlet } from 'react-router'
export default function AccountTemplate() {
  return (
    <div className='account' >
        <div className="container">
            <div className="log">
                    <Outlet/>
            </div>
        </div>
    </div>
  )
}
