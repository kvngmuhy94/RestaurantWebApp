import React from 'react';

import { useStateContext } from '../context/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width, height, mt, type,value }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type={type}
      value={value}
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} bg-${bgColor} hover:drop-shadow-xl hover:bg-${bgHoverColor} h-${height} cursor-pointer mt-${mt}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
