import React from 'react'

function MascevButton({className,children,clickEvent}) {
  return (
    <button className={`${className} border border-danger m-2`} onClick={clickEvent}>{children}</button>
  )
}

export default MascevButton