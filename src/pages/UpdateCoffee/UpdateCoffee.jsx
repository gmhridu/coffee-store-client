import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useRender from "../../hook/useRender";

const UpdateCoffee = () => {
  const singleCoffee = useLoaderData();
  const navigate = useNavigate();
  const {refetch} = useRender();
  console.log(singleCoffee);
  const { name, supplier, _id, quantity, category, taste, description, photo } =
    singleCoffee.coffee;
  
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const formData = e.target;
    const name = formData.name.value;
    const supplier = formData.supplier.value;
    const quantity = formData.quantity.value;
    const category = formData.category.value;
    const taste = formData.taste.value;
    const description = formData.description.value;
    const photo = formData.photo.value;

    const updatedCoffee = {
      name,
      supplier,
      quantity,
      category,
      taste,
      description,
      photo,
    };
    console.log(updatedCoffee);

    // send coffee data to the server
    fetch(`https://coffee-storess-server.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.coffee) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Added Successfully",
            icon: "success",
          });
          navigate('/')
          refetch()
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Update a Coffee
          </h2>
          <form onSubmit={handleUpdateCoffee}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Coffee Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="supplier Name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Supplier Name
                </label>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  id="supplier"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="supplier name"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="quantity"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Available Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={quantity}
                  id="quantity"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="235"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  defaultValue={category}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select category</option>
                  <option value="Black">Black Coffee</option>
                  <option value="Cold">Cold Coffee</option>
                  <option value="Hot">Hot Coffee</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="taste"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Taste
                </label>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  id="taste"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="taste"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  defaultValue={description}
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="photo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  id="photo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product URL"
                  required=""
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Update Coffee
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateCoffee;
