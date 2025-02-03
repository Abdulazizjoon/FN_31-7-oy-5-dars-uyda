import React, { useState } from "react";
import usecart from '../../store/usecartstore'
function Shop() {
  let { add, remove, edit, cart, clear } = usecart();
  let [name, setNmae] = useState("");
  let [price, setPrice] = useState();
  function addto() {
    let obj = {
      id: Date.now(),
      name: name,
      price: price,
    };
    if (name.length>0&&price.length>=1) {
     add(obj);
     setNmae("");
     setPrice("0"); 
    } else {
      alert('malumotlarni kiriting')
    }
  }

  function useedit(id) {
    let newname = prompt("Yangi nomni kiriting:");
    let newprice = prompt("Yangi narxni kiriting:");
    let obj = {
      id: id,
      name: newname,
      price: newprice,
    };
    edit(obj);
  }

  function usremove(id) {
    remove(id);
  }

  return (
    <div className="w-[400px] p-5 border rounded-2xl mt-7 mb-14">
      <h2>3-mashq</h2>
      <input
        type="text"
        value={name}
        className="border w-full rounded-md mb-2.5 pl-2.5"
        placeholder="Enter to name"
        onChange={(e) => {
          setNmae(e.target.value);
        }}
      />
      <input
        className="border w-full rounded-md mb-2.5 pl-2.5 "
        type="text"
        placeholder="price: "
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <button
        onClick={addto}
        className="mr-7 border rounded-md p-1.5 cursor-pointer"
      >
        add to cart
      </button>
      <button
        onClick={clear}
        className="mr-7 border rounded-md p-1.5 cursor-pointer"
      >
        clear all
      </button>

      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <div key={item.id} className="flex gap-4 border mt-2.5 p-1 rounded-md justify-between">
              <h3>{item.name}</h3>
              <h3>price: {item.price}</h3>
              <button className="border p-0.5 rounded-md cursor-pointer" onClick={() => useedit(item.id)}>edit</button>
              <button className="border p-0.5 rounded-md cursor-pointer" onClick={() => usremove(item.id)}>remove</button>
            </div>
          );
        })}
    </div>
  );
}

export default Shop;
