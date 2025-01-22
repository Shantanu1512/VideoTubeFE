import React from "react";

function Input({ label, type, className = "", ...props }, ref) {
  return (
    <div className="w-full ">
      <div>
        {label && <label className=" inline-block mb-1 pl-2">{label}</label>}
      </div>
      <input
      
        type={type}
        className={`border-black border-solid border-2 p-2 m-2${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Input);
