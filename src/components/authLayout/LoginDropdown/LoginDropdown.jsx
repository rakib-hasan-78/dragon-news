import React from "react";
import { useAuth } from './../../../customHooks/useAuth';
import { toast } from "react-toastify";

const LoginDropdown = () => {
  const {user, logoutHandler} = useAuth()

  const signOutHandler = ()=>{
      logoutHandler()
      .then(()=>{
        toast.success(`${user.displayName.split(" ")[0]}! your logout successfully!`)
      })
  }
  return (
    <div className="dropdown dropdown-end">
      <div className="flex flex-row items-center justify-center space-x-3">
      <p className="text-xl text-fuchsia-700 font-bold italic">
       {user.displayName.split(" ")[0]}
      </p>
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-52 aura text-purple-600 bg-purple-200 aura-xl rounded-full p-0.5 overflow-hidden ">
          <img
            className="w-full object-cover rounded-full"
            alt="Profile"
            src={user.photoURL}
          />
        </div>
      </div>

      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-72 p-2 shadow lowercase"
      >
        <li>
          <a className="justify-between">
            {user.email}
          </a>
        </li>
        <li>
          <a> last Login: {user.metadata.lastSignInTime}</a>
        </li>
        <li>
          <span
          onClick={signOutHandler}
          >
          Logout
          </span>
        </li>
      </ul>
    </div>
  );
};

export default LoginDropdown;
