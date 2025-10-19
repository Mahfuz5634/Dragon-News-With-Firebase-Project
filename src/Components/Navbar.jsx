import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import AuthContext from "../Provider/AuthContext";
import { useContext } from "react";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { User,auth } = useContext(AuthContext);
  const handlesignout=()=>{
    signOut(auth)
    .then(alert("Sign Out Succesfully"))
    .error(error=>{
      alert(error)
    })
  }
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1"></div>
      <div className="nav flex justify-center items-center gap-3 flex-1 text-accent ">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "border-b-2" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "border-b-2" : "")}
        >
          About
        </NavLink>
        <NavLink
          to={"/Career"}
          className={({ isActive }) => (isActive ? "border-b-2" : "")}
        >
          Career
        </NavLink>
      </div>
      <div className="login-btn flex justify-end items-center gap-3 flex-1">
  {User && (
    <div className="flex items-center gap-2">
      {/* User Email */}
      <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full font-medium">
        {User.email}
      </span>
    </div>
  )}

  {User ? (
    <button
      onClick={handlesignout}
      className="btn btn-primary px-5 text-white flex items-center gap-1"
    >
      <CgProfile /> Logout
    </button>
  ) : (
    <Link
      to={"/auth/login"}
      className="btn btn-primary px-5 text-white flex items-center gap-1"
    >
      <CgProfile /> Login
    </Link>
  )}
</div>

    </div>
  );
};

export default Navbar;
