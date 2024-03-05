import React from 'react';
import { useState } from 'react';

function Input() {
    const [searchText, setsearchText] = useState("");

  return (
    <div className="flex">
    <div>
      <input
        value={searchText}
        onChange={(e) => {
          setsearchText(e.target.value);
          console.log(searchText)
        }}
        placeholder="Search Restaurant"
        type="text"
        className="m-3 px-4 py-2 border-2 border-sky-500  rounded-lg "
      />
      <button className="p-2 bg-orange-400 rounded-lg px-3 text-white">
        Search
      </button>
    </div>
    </div>
  );
}

export default Input;
