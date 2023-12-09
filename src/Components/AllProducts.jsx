import { useEffect, useState } from "react";
import SlideProd from "./SlideProd";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://brew-bite-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <section className="mt-5 text-white bg-slate-800 py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl text-center">See All Products</h2>
          <div className="mt-16">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400:{
                  slidesPerView:2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024:{
                  slidesPerView:4,
                },
                1400:{
                  slidesPerView:5
                },
                1500:{
                  slidesPerView:6
                },
                1700:{
                  slidesPerView:7
                }
              }}
            >
              {products.map((prod) => (
                <SwiperSlide key={prod._id}>
                  <SlideProd prod={prod} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
