import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
    
        // const isNonWhiteSpace = /^\S*$/;
        // if (!isNonWhiteSpace.test(password)) {
        //   return setRegisterErr("Password must not contain Whitespaces.");
        // }
    
        // const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        // if (!isContainsUppercase.test(password)) {
        //   return setRegisterErr(
        //     "Password must have at least one Uppercase Character."
        //   );
        // }
    
        // const isContainsLowercase = /^(?=.*[a-z]).*$/;
        // if (!isContainsLowercase.test(password)) {
        //   return setRegisterErr(
        //     "Password must have at least one Lowercase Character."
        //   );
        // }
    
        // const isContainsNumber = /^(?=.*[0-9]).*$/;
        // if (!isContainsNumber.test(password)) {
        //   return setRegisterErr("Password must contain at least one Digit.");
        // }
    
        // const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/;
        // if (!isContainsSymbol.test(password)) {
        //   return setRegisterErr(
        //     "Password must contain at least one Special Symbol."
        //   );
        // }
    
        // const isValidLength = /^.{6,16}$/;
        // if (!isValidLength.test(password)) {
        //   return setRegisterErr("Password must be 10-16 Characters Long.");
        // }
    
        // createUser(email, password)
        //   .then(() => {
        //     setRegisterSuccess("Registerd successfully!");
        //   })
        //   .catch(() => {
        //     setRegisterErr("Invalid Email");
        //   });
      };

  return (
    <>
      <section className="my-10">
        <div className="container mx-auto px-5">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-slate-50 w-[512px] text-black border py-10 px-12">
              <div className="border-b pb-4 text-center">
                <h2 className="text-2xl">Register your account</h2>
              </div>
              <div className="my-8">
                <form onSubmit={handleRegister} className="space-y-5">
                  <div className="flex flex-col gap-3">
                    <label>
                      <span>Your Name</span>
                    </label>
                    <input
                      className="border-lime-400 bg-transparent outline-none border py-1 px-2"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label>
                      <span>Photo URL</span>
                    </label>
                    <input
                      className="border-lime-400 bg-transparent outline-none border py-1 px-2"
                      type="text"
                      name="photo"
                      placeholder="Photo URL"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label>
                      <span>Email Address</span>
                    </label>
                    <input
                      className="border-lime-400 bg-transparent outline-none border py-1 px-2"
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
                      className="border-lime-400 bg-transparent outline-none border py-1 px-2"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  {/* {registerErr && (
                    <p className="text-sm text-red-500">{registerErr}</p>
                  )}
                  {registerSuccess && (
                    <p className="text-sm text-green-500">{registerSuccess}</p>
                  )} */}
                  <div>
                    <button className="bg-purple-500 w-full py-2 text-white hover:bg-purple-700 transition-all">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="text-center">
                <p>
                  Already have an account?{" "}
                  <Link to={"/login"} className="text-purple-500">
                    Login
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

export default Register;
