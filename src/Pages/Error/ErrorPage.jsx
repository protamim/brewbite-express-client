import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-276px)]">
        <section>
          <div className="flex justify-center items-center">
            <div className="text-center space-y-8 text-lime-400">
              <h3 className="text-[10rem]">404</h3>
              <p className="text-2xl">Whoops! It looks like you are lost!</p>
              <Link
                to={"/"}
                className="border border-pink-600 px-4 py-1 hover:bg-pink-600 hover:text-pink-100 rounded-3xl inline-block"
              >
                Go Back
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
