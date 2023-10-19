import { Link } from "react-router-dom";

const Login = () => {

    // const handleSignIn = (e) => {
    //     e.preventDefault();
    //     const form = new FormData(e.currentTarget);
    //     const email = form.get("email");
    //     const password = form.get("password");
    //     console.log(email, password);
    
    //     signIn(email, password)
    //       .then(() => {
    //         setSignInSuccess("Signed in successfully!");
    //       })
    //       .catch(() => {
    //         setSignInErr("Invalid login credentials!");
    //       });
    //   };

  return (
    <>
      <section>
      <div className="container mx-auto px-5">
        <div className="min-h-[calc(100vh-250px)] flex flex-col justify-center items-center">
          <div className="bg-slate-50 border p-10 max-w-sm text-black">
            <div className="border-b pb-4 text-center">
              <h2 className="text-2xl">Login to your account</h2>
            </div>
            <div className="my-8">
              <form  className="space-y-5">
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
                <div className="flex flex-col gap-3">
                  <label>
                    <span>Password</span>
                  </label>
                  <input
                    className="border-lime-400 border outline-none bg-transparent py-1 px-2"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  {/* {signInErr && (
                    <p className="max-w-sm text-sm text-rose-500">
                      {signInErr}
                    </p>
                  )}
                  {signInSuccess && (
                    <p className="max-w-sm text-sm text-green-500">
                      {signInSuccess}
                    </p>
                  )} */}
                </div>
                <div>
                  <button className="bg-purple-500 w-full py-2 text-white hover:bg-purple-700 transition-all">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div>
              <p>
                Don&apos;t have an account?{" "}
                <Link to={"/register"} className="text-purple-500">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Login;
