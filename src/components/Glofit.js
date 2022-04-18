import React from 'react'

export const Glofit = ({filterr,setFilterr}) => {
  return (
    <>
    <span>
    search:{''}
    <input value={filterr || ''} onChange ={(e) => setFilterr(e.target.value)}/>
    </span>
    
    
    </>
  )
}
