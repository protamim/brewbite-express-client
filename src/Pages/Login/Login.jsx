import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const [signInSuccess, setSignInSuccess] = useState("");
  const [signInErr, setSignInErr] = useState("");
  const { logIn, socialSignIn } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  

  const hideShow = () => {
    setShowPass(!showPass);
  };

  const googleSignIn = (provider)=> {
    socialSignIn(provider)
    .then(() => {
      setSignInSuccess("Signed in successfully!");
      setSignInErr('');
      navigate(location?.state ? location.state : '/');
    })
    .catch((err) => {
      setSignInErr(err.message);
      setSignInSuccess('');
    });
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    logIn(email, password)
      .then(() => {
        setSignInSuccess("Signed in successfully!");
        setSignInErr('');
        navigate(location?.state ? location.state : '/');
      })
      .catch(() => {
        setSignInErr("Invalid login credentials!");
        setSignInSuccess('');
      });
  };

  return (
    <>
      <section>
        <div className="container mx-auto px-5">
          <div className="min-h-[calc(100vh-250px)] flex flex-col justify-center items-center">
            <div className="bg-slate-50 border p-10  text-black">
              <div className="border-b pb-4 text-center">
                <h2 className="text-2xl">Login to your account</h2>
              </div>
              <div className="my-8">
                <form onSubmit={handleSignIn} className="space-y-5">
                  <div className="flex flex-col gap-3">
                    <label>
                      <span>Email Address</span>
                    </label>
                    <input
                      className={`outline-none border-lime-400 border py-1 px-2 bg-transparent`}
                      type="email"
                      name="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="flex flex-col gap-3 relative">
                    <label>
                      <span>Password</span>
                    </label>
                    <input
                      className="border-lime-400 border outline-none bg-transparent py-1 px-2"
                      type={showPass?'text':'password'}
                      name="password"
                      placeholder="Password"
                    />
                    {/* password show hide */}
                    {showPass ? (
                      <span
                        onClick={hideShow}
                        className="absolute top-[63%] left-[90%] cursor-pointer"
                      >
                        <FaRegEyeSlash />
                      </span>
                    ) : (
                      <span
                        onClick={hideShow}
                        className="absolute top-[63%] left-[90%] cursor-pointer"
                      >
                        <FaRegEye />
                      </span>
                    )}
                  </div>
                  {/* Error or success message */}
                  {signInErr && (
                      <p className="max-w-sm text-sm text-rose-500">
                        {signInErr}
                      </p>
                    )}
                    {signInSuccess && (
                      <p className="max-w-sm text-sm text-green-500">
                        {signInSuccess}
                      </p>
                    )}
                  <div>
                    <button className="bg-purple-500 w-full py-2 text-white hover:bg-purple-700 transition-all">
                      Login
                    </button>
                  </div>
                </form>
              </div>
              {/* Login Toggle */}
              <div>
                <p>
                  Don&apos;t have an account?{" "}
                  <Link to={"/register"} className="text-purple-500">
                    Register
                  </Link>
                </p>
              </div>
              {/* end login toggle */}
              {/* Sign In With Email */}
              <div className="mt-4 border-t">
                  <div className="text-center">
                    <h5>Login With</h5>
                    <span onClick={()=>googleSignIn(provider)} className="text-2xl inline-block mt-4 cursor-pointer">
                      <FcGoogle />
                    </span>
                  </div>
              </div>
              {/* end sign in with email */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
