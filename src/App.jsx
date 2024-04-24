import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard/CoffeeCard";
import { useState } from "react";

const App = () => {
  const coffees = useLoaderData();
  return (
    <div className="m-4">
      <h1 className="text-6xl text-center mb-16">Hot Hot Cold Coffees : {coffees.length}</h1>
      <div className="flex items-center justify-center my-4">
        <Link
          to={'/addcoffee'}
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 btn btn-primary">Add Coffee</Link>

      </div>
      <div className="grid md:grid-cols-2 gap-4 my-4">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default App;
