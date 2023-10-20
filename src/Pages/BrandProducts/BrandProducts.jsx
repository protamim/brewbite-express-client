import { Link, useLoaderData } from "react-router-dom";
import slide1 from "../../assets/images/pran_slide-1.jpg";
import slide2 from "../../assets/images/slider_2.jpg";
import slide4 from "../../assets/images/slide_4.png";


// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import BrandProduct from "./BrandProduct";
// register Swiper custom elements
register();

const BrandProducts = () => {
  const brandData = useLoaderData();

  return (
    <>
      <section className="mb-12">
        <div>
          <div>
            <swiper-container navigation="true">
              <swiper-slide>
                <img src={slide1} />
              </swiper-slide>
              <swiper-slide>
                <img src={slide2} />
              </swiper-slide>
              <swiper-slide>
                <img src={slide4} />
              </swiper-slide>
            </swiper-container>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-5">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Card */}
            {brandData.map((product) => (
              <BrandProduct key={product._id} product={product} />
            ))}
            {/* If no data found */}
            {brandData.length === 0 && (
              <>
                <div className="col-span-4 text-center space-y-8">
                  <h3 className="text-4xl">
                    This brand does not have any products added.
                  </h3>
                  <Link
                    to={"/add-product"}
                    className="inline-block bg-slate-800 text-2xl px-8 py-2"
                  >
                    {" "}
                    Add Product
                  </Link>
                </div>
              </>
            )}
          </div>
          {/* End card */}
        </div>
      </section>
    </>
  );
};

export default BrandProducts;
