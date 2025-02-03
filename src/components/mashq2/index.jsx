import React, { useRef, useState } from "react";
import useTodo from "../../store/useTodo";
function Todo() {
  let { add, remove, cart, clear } = useTodo();
  let [name, setNmae] = useState("");
  let [chek,setChek]=useState(false)
  function addto() {
    let obj = {
      id: Date.now(),
      name: name,
    };
    if (name.length > 0 ) {
      add(obj);
      setNmae("");
    } else {
      alert("malumotlarni kiriting");
    }
  }

  function useedit(id) {
    let newname = prompt("Yangi nomni kiriting:");
    let obj = {
      id: id,
      name: newname,
    };
    edit(obj);
  }

  function usremove(id) {
    remove(id);
  }

  function testt(e) {
    console.log(e.target.checked);
    setChek(e.target.checked);
  }
  

  return (
    <div className="w-[400px] p-5 border rounded-2xl mt-7 mb-14">
      <h2>2-mashq</h2>
      <h1>TODO</h1>
      <input
        type="text"
        value={name}
        className="border w-full rounded-md mb-2.5 pl-2.5"
        placeholder="Enter to name"
        onChange={(e) => {
          setNmae(e.target.value);
        }}
      />
      <button
        onClick={addto}
        className="mr-7 border rounded-md p-1.5 cursor-pointer"
      >
        add to todo
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
            <div
              key={item.id}
              className={`flex gap-4 border mt-2.5 p-1 rounded-md justify-between ${
                chek ? "line-through" : ""
              }`}
            >
              <input type="checkbox" onChange={testt} />
              <h3>{item.name}</h3>
              
              <button
                className="border p-0.5 rounded-md cursor-pointer"
                onClick={() => usremove(item.id)}
              >
                remove
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Todo;
