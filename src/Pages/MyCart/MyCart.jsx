import { useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";

const MyCart = () => {
  const addedProducts = useLoaderData();
  const [cartProducts, setCartProducts] = useState(addedProducts)

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const deleted = cartProducts.filter(prod => prod._id !== id)
              setCartProducts(deleted);
            console.log(data);
          });
      }
    });
  };

  return (
    <>
      <h2>My Cart{addedProducts.length}</h2>
      <section>
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto bg-indigo-950 px-8 py-4 space-y-6">
            {cartProducts.map((product) => (
              <div
                key={product._id}
                className="grid grid-cols-3 justify-items-end items-center border-b pb-3"
              >
                <div className="flex gap-5 items-center">
                  <img
                    className="w-24"
                    src={product?.prodImage}
                    alt={product?.prodName}
                  />
                  <h2>{product.prodName}</h2>
                </div>
                <div className="">
                  <p>${product.prodPrice}</p>
                </div>
                <div className="text-xl">
                  <span
                    onClick={() => handleDelete(product?._id)}
                    className="cursor-pointer"
                  >
                    <MdDelete />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyCart;
