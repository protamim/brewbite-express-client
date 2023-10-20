import { useLoaderData } from "react-router-dom";


const ProdDetails = () => {
    const products = useLoaderData();
    const { prodImage, prodName, shortDesc } = products;


console.log(products);

    return (
        <>
            <section className="mt-20">
                <div className="container mx-auto px-5">
                    <div className="flex gap-14 items-center">
                        <div className="flex-1">
                            <img src={prodImage} alt={prodName} />
                        </div>
                        <div className="text-slate-100 text-lg space-y-5 flex-1">
                            <h2 className="text-3xl">{prodName}</h2>
                            <p>{shortDesc}</p>
                            <div>
                                <button className="bg-slate-700 px-5 py-1">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProdDetails;