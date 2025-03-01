import React from 'react'
import Link from 'next/link'
function Button({extrastyle, name}) {
  return (
    <div>
         <Link href="/api/auth/signin">
            <button className={`btn ${extrastyle}`}>{name}</button>
          </Link>
    </div>
  )
}

export default Button