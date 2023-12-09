import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { createAccount, setReload, userProfile } = useContext(AuthContext);
  const [regErr, setRegErr] = useState("");
  const [regSuccess, setRegSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);

  const hideShow = () => {
    setShowPass(!showPass);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log("from register", name, photo);

    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(password)) {
      return setRegErr("Password must not contain Whitespaces.");
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(password)) {
      return setRegErr("Password must have at least one Uppercase Character.");
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(password)) {
      return setRegErr("Password must have at least one Lowercase Character.");
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(password)) {
      return setRegErr("Password must contain at least one Digit.");
    }

    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(password)) {
      return setRegErr("Password must contain at least one Special Symbol.");
    }

    const isValidLength = /^.{6,16}$/;
    if (!isValidLength.test(password)) {
      return setRegErr("Password must be 10-16 Characters Long.");
    }

    // Firebase
    createAccount(email, password)
      .then((userCredential) => {
        // Update a user's profile
        userProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setReload(true);
            console.log("Profile updated");
          })
          .catch((err) => {
            console.error(err);
          });
        console.log(userCredential.user);
        setRegSuccess("Registered successfully!");
        setRegErr("");
      })
      .catch((err) => {
        console.log(err);
        setRegErr(err.message);
        setRegSuccess("");
      });
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
                      required
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
                      required
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
                      required
                      placeholder="Email address"
                    />
                  </div>
                  <div className="flex flex-col gap-3 relative">
                    <label>
                      <span>Password</span>
                    </label>
                    <input
                      className="border-lime-400 bg-transparent outline-none border py-1 px-2"
                      type={showPass ? "text" : "password"}
                      name="password"
                      required
                      placeholder="Password"
                    />
                    {/* password show hide */}
                    {showPass ? (
                      <span
                        onClick={hideShow}
                        className="absolute top-[63%] left-[94%] cursor-pointer"
                      >
                        <FaRegEyeSlash />
                      </span>
                    ) : (
                      <span
                        onClick={hideShow}
                        className="absolute top-[63%] left-[94%] cursor-pointer"
                      >
                        <FaRegEye />
                      </span>
                    )}
                  </div>
                  {/* Validation message for the client */}
                  {regErr && <p className="text-sm text-red-500">{regErr}</p>}
                  {regSuccess && (
                    <p className="text-sm text-green-500">{regSuccess}</p>
                  )}
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
