import { NavLink } from "react-router-dom";
import brewBiteLogo from "../../assets/images/brewBite_logo.png";
import "./nav.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
const {user, logOut} = useContext(AuthContext);



const handleLogOut = ()=> {
  logOut().then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err.message);
  })

}

  return (
    <>
      <nav className="bg-slate-700 text-slate-300">
        <div className="container mx-auto px-5">
          <div>
            <div className="h-24 flex gap-4 items-center justify-between">
              <span>
                <img
                  className="w-48"
                  src={brewBiteLogo}
                  alt="brewBite Express"
                />
              </span>
              <div className="flex-1">
                <ul className="flex gap-8 justify-center">
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/add-product"}>Add Product</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/cart"}>My Cart</NavLink>
                  </li>
                </ul>
              </div>
              <div>
                {
                  user ? 
                  <div className="flex gap-4 items-center">
                    <div className="flex justify-center items-center flex-col">
                    <img className="w-10 rounded-full" src={user?.photoURL} alt={user?.displayName} />
                    <h5>{user?.displayName}</h5>
                    </div>
                    <button onClick={handleLogOut} className="text-xl">Log Out</button>
                  </div>
                  :
                <NavLink to={'/login'}>
                  <button>Login</button>
                </NavLink>

                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
