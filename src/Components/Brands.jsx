import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      });
  }, []);

  

  console.log(card);
  return (
    <>
      <section className="pt-12 bg-lime-200">
        <div className="container mx-auto px-5">
          <div className="mb-16">
            <h2 className="text-black text-center text-3xl">
              OUR FAMILY OF BRANDS
            </h2>
          </div>
          <div className="grid gap-10 justify-center content-center grid-cols-1 md:grid-cols-3">
            {card.map((brand) => (
              <div key={brand.id}>
                <label className="swap swap-flip">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" />
                  <div className="swap-off">
                    <div className="flex flex-col gap-8 justify-center items-center">
                      <img className="w-32" src={brand.brandLogo} alt="pran" />
                      <h6 className="text-black text-xl">{brand.brandName}</h6>
                    </div>
                  </div>
                  <div className="swap-on">
                    <div className="bg-white px-8 py-6">
                      <div className="text-center space-y-5 text-black">
                        <h4 className="text-rose-500 text-2xl font-semibold">
                          {brand.brandName}
                        </h4>
                        <p>{brand.brandDesc.slice(0, 200)}</p>
                        <div>
                          <Link to={`/products/${brand.brandName}`}>
                            <button className="bg-lime-400 px-6 py-1">
                              View All Products
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
