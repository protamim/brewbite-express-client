import { Link, useLoaderData } from "react-router-dom";
import slide1 from "../../assets/images/pran_slide-1.jpg";
import slide2 from "../../assets/images/slider_2.jpg";
import slide4 from "../../assets/images/slide_4.png";
import ReactStars from "react-rating-stars-component";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const BrandProducts = () => {
  const brandData = useLoaderData();
  console.log(brandData);
//   const { brand, prodImage, prodName, type, prodPrice, prodRating }

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
            {brandData.map((prod) => (
              <>
                <div key={prod._id} className="bg-slate-700 flex flex-col justify-between">
                  <div className="w-full">
                    <img className="w-full" src={prod.prodImage} alt="" />
                  </div>
                  <div className="px-5 py-4 space-y-5">
                    <h4 className="text-2xl">{prod.prodName}</h4>
                    <div className="flex items-center justify-between">
                      <Link className="text-blue-300">
                        <h4>{prod.brand}</h4>
                      </Link>
                      <Link className="text-blue-300">
                        {" "}
                        <h4>{prod.type}</h4>
                      </Link>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xl">${prod.prodPrice}</p>
                      <span>
                        <ReactStars
                          count={5}
                          size={24}
                          value={prod.prodRating}
                          edit={true}
                        />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="bg-slate-600 hover:bg-slate-200 transition-all hover:text-black px-4 py-1">
                        Details
                      </button>
                      <button className="bg-slate-600 hover:bg-slate-200 transition-all hover:text-black px-4 py-1">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* End card */}
        </div>
      </section>
    </>
  );
};

export default BrandProducts;
