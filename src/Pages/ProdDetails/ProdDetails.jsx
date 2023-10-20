import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";



const ProdDetails = () => {
    const products = useLoaderData();
    const {user} = useContext(AuthContext)
    
    const { prodImage, brand, type, prodRating, prodPrice, prodName, shortDesc } = products;

    const handleAddToCart = ()=> {
        const userEmail = user.email;
        const userInfo = {
            userEmail,
            prodImage,
            brand,
            type,
            prodRating,
            prodPrice,
            prodName,
            shortDesc
        }
        fetch(`http://localhost:5000/user/cart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedCount > 0){
                Swal.fire({
                    icon: 'success',
                    text: 'Added to the cart'
                })
            }
        })
    }

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
                                <button onClick={handleAddToCart} className="bg-slate-700 px-5 py-1">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProdDetails;