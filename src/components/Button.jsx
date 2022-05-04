import React from "react";

function Button({ content, icon = "", color = "" }) {
  const borderColor = `border-${color}`;
  const bgColor = `bg-${color}`;
  return (
    <div>
      <button
        type="button"
        className={`flex items-center justify-center ${borderColor} border-2 rounded-lg px-6 py-2 hover:${bgColor} uppercase`}
      >
        {content} {icon}
      </button>
    </div>
  );
}

export default Button;
