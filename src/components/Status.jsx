import React from 'react'

const Status = ({tagT}) => {
  console.log(tagT)
  let clr = tagT.color
  let colorBgClass = clr == "primary" ? "bg-primary" : clr == "danger" ? "bg-danger" : clr == "warning" ? "bg-warning" : clr=="info" ? "bg-info" : "bg-success"
  return (
    <div className={`text-[12px] text-[white] px-2 py-1 rounded-[6px] font-[400] ${colorBgClass} `}>
      {tagT.text}
    </div>
  )
}

export default Status