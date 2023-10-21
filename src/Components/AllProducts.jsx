import { useEffect, useState } from "react";
import SlideProd from "./SlideProd";


const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <>
      <section className="mt-5 text-white bg-slate-800 py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl text-center">See All Products</h2>
            <div className="mt-16">
              <swiper-container slides-per-view="4">
                {products.map((prod) => (
                  <swiper-slide key={prod._id}>
                    <SlideProd prod={prod} />
                  </swiper-slide>
                ))}
              </swiper-container>
            </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
