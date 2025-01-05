import React from "react";
import { Link } from "react-router-dom";

function User() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h1 className="text-6xl text-center text-green-300 p-4">User</h1>

      <div className="w-1/4 h-full flex flex-col">
        <Link className="my-1 px-3 py-2 border bg-red-300 hover:bg-red-500 text-center text-xl font-semibold text-white rounded-md" to="/user/Ajay">Ajay</Link>
        <Link className="my-1 px-3 py-2 border bg-red-300 hover:bg-red-500 text-center text-xl font-semibold text-white rounded-md" to="/user/Raju">Raju</Link>
        <Link className="my-1 px-3 py-2 border bg-red-300 hover:bg-red-500 text-center text-xl font-semibold text-white rounded-md" to="/user/John">John</Link>
      </div>
    </div>
  );
}

export default User;
