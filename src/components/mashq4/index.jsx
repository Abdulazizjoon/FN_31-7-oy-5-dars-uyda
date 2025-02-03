import React, { useState } from "react";
import useUser from "../../store/useUser";

function Auth() {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let { user, login, logout } = useUser();

  function save(e) {
    e.preventDefault(); 
      let obj = {
          name,
          age
      };
    login(obj); 
  }

  return (
    <div>
      <h2>4-mashq</h2>
      <form>
        <label className="flex justify-center text-4xl">Login</label>
        <input
          type="text"
          placeholder="name?"
          className="border w-full mt-2.5 rounded-md p-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="age"
          className="border w-full mt-2.5 rounded-md p-1"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button
          onClick={save}
          className="w-full border rounded-md cursor-pointer mt-4"
        >
          Login
        </button>
      </form>

      <div>
        <h2 className="flex justify-center mt-1 text-2xl">User Data</h2>
        {user && (
          <div className="text-center">
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button
              onClick={logout}
              className="mt-2 p-2 border rounded-md bg-red-500 text-white"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
