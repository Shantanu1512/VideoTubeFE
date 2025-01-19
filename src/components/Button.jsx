import React from "react";

function Button({ children, type, className = "", ...props }) {
  return (
    <div className="w-full">
      <button
        className={` p-2 rounded-sm bg-purple-500 font-mono text-white ${className}`}
        type={type}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
