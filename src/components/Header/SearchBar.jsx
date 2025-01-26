import React from "react";
import { Input, Button } from "../index";

function SearchBar() {
  return (
    <div className=" flex flex-row bg-gray-900 relative border-2 border-slate-600 text-white h-16 justify-center items-center">
      <div>
        <input
          className="w-96 h-10 rounded-md p-2 text-black"
          placeholder="Search"
        />
      </div>
      <div className=" absolute right-5 top-3 rounded-xl">
        <Button className="h-10 w-18">Logout</Button>
      </div>
      <div className="m-5 absolute right-20 rounded-xl">
        <Button className="h-10 w-18">Login</Button>
      </div>
    </div>
  );
}

export default SearchBar;
