import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProd = () => {
  const [selectedValues, setSelectedValues] = useState({});
  const selectedProd = useLoaderData();
  const { id } = useParams();
  const { prodName, prodImage, prodPrice, prodRating, shortDesc, brand, type } =
    selectedProd;

  console.log(selectedProd);

  const handleDropdownChanges = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    console.dir(event.target);
    setSelectedValues({ ...selectedValues, [name]: value });
  };

  const handleUpdateProd = (event) => {
    event.preventDefault();
    const form = event.target;
    const prodName = form.prodName.value;
    const prodImage = form.prodImage.value;
    const prodPrice = form.prodPrice.value;
    const prodRating = form.prodRating.value;
    const shortDesc = form.desc.value;
    const { brand, type } = selectedValues;

    const prodInfo = {
      prodName,
      prodImage,
      prodPrice,
      prodRating,
      shortDesc,
      brand,
      type,
    };

    fetch(`http://localhost:5000/productsId/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(prodInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            text: "Added the product successfully!",
            icon: "success",
          });
        }
        console.log(data);
      });
    // reset form after submision
    form.reset();
  };

  return (
    <>
      <section>
        <div className="container mx-auto px-5">
          {/* Breadcam start */}
          <div className="my-8 text-xl">
            <Link to="/" className="flex gap-3 items-center">
              <BiArrowBack />
              <p> Back to Home</p>
            </Link>
          </div>
          {/* Breadcam end */}
          <div className="bg-lime-300 text-black px-12 py-10 space-y-12">
            <div className="text-center w-full md:w-3/4 mx-auto space-y-4">
              <h2 className="text-3xl">Update existing product</h2>
              <p className="text-xl">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>
            <div>
              <form onSubmit={handleUpdateProd}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 text-xl">
                    <span>Product Name</span>
                    <input
                      className="input input-bordered input-accent bg-transparent"
                      type="text"
                      name="prodName"
                      defaultValue={prodName}
                      placeholder="Product Name"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-xl">
                    <span>Product Image</span>
                    <input
                      className="input input-bordered input-accent bg-transparent"
                      type="text"
                      name="prodImage"
                      defaultValue={prodImage}
                      placeholder="Product Image"
                    />
                  </div>

                  <div className="flex flex-col gap-2 text-xl">
                    <span>Select Brand</span>
                    <select
                      name="brand"
                      onChange={handleDropdownChanges}
                      className="select select-primary bg-transparent"
                    >
                      <option defaultValue={brand}>{brand}</option>
                      <option value="PRAN">PRAN</option>
                      <option value="Ag Agro">Ag Agro</option>
                      <option value="Akij Bakers">Akij Bakers</option>
                      <option value="Cocola">Cocola</option>
                      <option value="Khaas Food">Khaas Food</option>
                      <option value="golden harvest">Golden Harvest</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 text-xl">
                    <span>Select Type</span>
                    <select
                      name="type"
                      onChange={handleDropdownChanges}
                      className="select select-primary bg-transparent"
                    >
                      <option defaultValue={type}>{type}</option>
                      <option value="Beverages">Beverages</option>
                      <option value="Biscuit & Bakery">Biscuit & Bakery</option>
                      <option value="Confectionery">Confectionery</option>
                      <option value="Culinary">Culinary</option>
                      <option value="Dairy">Dairy</option>
                      <option value="Frozen Foods">Frozen Foods</option>
                      <option value="Snacks">Snacks</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 text-xl text-black">
                    <span>Price</span>
                    <input
                      className="input input-bordered input-accent bg-transparent"
                      type="text"
                      name="prodPrice"
                      defaultValue={prodPrice}
                      placeholder="Product Price"
                    />
                  </div>

                  <div className="flex flex-col gap-2 text-xl">
                    <span>Rating (number)</span>
                    <input
                      className="input input-bordered input-accent bg-transparent"
                      type="text"
                      name="prodRating"
                      placeholder="Product rating"
                      defaultValue={prodRating}
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-xl md:col-span-2">
                    <span>Short Desciption</span>
                    <textarea
                      className="h-28 textarea textarea-secondary bg-transparent resize-none"
                      name="desc"
                      placeholder="Write a short desciption..."
                      defaultValue={shortDesc}
                    ></textarea>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <button className="bg-slate-500 w-full text-white text-2xl py-1">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateProd;
