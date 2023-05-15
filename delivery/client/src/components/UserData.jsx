import React from 'react'

const UserData = ({iconColor, iconBg, icon, title, desc}) => {
  return (
    <div className="rounded-xl flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer hover:bg-primaryLight hover:text-white">
    <button
      type="button"
      style={{ color: iconColor, backgroundColor: iconBg }}
      className=" text-xl rounded-lg p-3 hover:bg-light-gray"
    >
      {icon}
    </button>

    <div>
      <p className="font-semibold text-black hover">{title}</p>
      <p className="text-slate-800 text-sm "> {desc} </p>
    </div>
  </div>
  )
}

export default UserData