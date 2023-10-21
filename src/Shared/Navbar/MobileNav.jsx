import { NavLink } from "react-router-dom";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import brewBiteLogo from "../../assets/images/brewBite_logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MobileNav = () => {
  const [displayBar, setDisplayBar] = useState(false);

  const handleBar = () => {
    setDisplayBar(!displayBar);
  };

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <nav className="bg-slate-700 md:hidden sticky top-0 z-50">
        <div className="container mx-auto px-5">
          <div className="flex relative h-16 items-center justify-between">
            <div className="bg-black text-white px-2 text-2xl rounded-sm cursor-pointer">
              <img className="w-24" src={brewBiteLogo} alt="" />
            </div>
            <div onClick={handleBar}>
              <AiOutlineBars />
            </div>
          </div>
          <div
            className={`${
              displayBar ? "block" : !displayBar && "hidden"
            } absolute bg-slate-700 top-0 left-0 px-8 min-h-screen pt-8 space-y-8`}
          >
            <span
              onClick={() => setDisplayBar(false)}
              className="absolute right-3 top-3 text-white"
            >
              <AiOutlineClose />
            </span>
            <div>
              <ul className="flex gap-4 flex-col text-base">
                <li onClick={handleBar}>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li onClick={handleBar}>
                  <NavLink to={"/add-product"}>Add Product</NavLink>
                </li>
                <li onClick={handleBar}>
                  <NavLink to={"/cart"}>My Cart</NavLink>
                </li>
              </ul>
            </div>
            <div>
              {user ? (
                <div className="flex gap-4 flex-col md:flex-row items-center">
                  <div className="flex justify-center items-center flex-col">
                    <img
                      className="w-10 rounded-full"
                      src={user?.photoURL}
                      alt={user?.displayName}
                    />
                    <h5>{user?.displayName}</h5>
                  </div>
                  <div onClick={handleBar}>
                  <button onClick={handleLogOut} className="text-xl">
                    Log Out
                  </button>
                  </div>
                </div>
              ) : (
                <NavLink to={"/login"}>
                  <button onClick={handleBar}>Login</button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
