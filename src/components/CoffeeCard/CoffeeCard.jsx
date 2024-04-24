import axios from "axios";
import { HiPencil } from "react-icons/hi2";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const CoffeeCard = ({ coffee }) => {
  const { data: coffees, isLoading, refetch } = useQuery({
    queryKey: ["coffees"],
    queryFn: async () => {
      const res = await axios.get(`https://coffee-storess-server.vercel.app/coffees`);
      return res.data;
    },
  });

  const { name, supplier, _id, quantity, taste,  photo } = coffee;

  const handleDelete = async (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`https://coffee-storess-server.vercel.app/coffees/${_id}`);
          console.log(response.data);
          if (response.data.result) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch(coffees);
          }
        } catch (error) {
          console.error("Error deleting file:", error);
        }
      }
    });
  };
  
  return (
    <Link className="flex items-center justify-center">
      <div
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4"
      >
        <figure>
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-40 md:rounded-none md:rounded-s-lg"
            src={photo}
            alt=""
          />
        </figure>
        <div className="flex flex-col justify-between p-6 leading-normal w-full">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            Name: {name}
          </h5>
          <p>Quantity: {quantity}</p>
          <p>Supplier Name: {supplier}</p>
          <p>Taste: {taste}</p>
        </div>
        <div>
          <div className="join join-vertical space-y-4">
            <button className="btn text-xl text-white bg-[#D2B48C] hover:bg-[#6c4e27] rounded-lg">
              <IoEye />
            </button>
            <Link
              to={`updatecoffee/${_id}`}
              className="btn text-xl bg-[#3C393B] hover:bg-[#453740] text-white rounded-lg"
            >
              <HiPencil />
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn text-xl text-white rounded-lg bg-[#EA4744] hover:bg-[#9c1613]"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoffeeCard;
