import { create } from "zustand";

function createTodo(set) {
  return {
    cart: [],
    add: function (value) {
      set(function (state) {
        let copied = [...state.cart];
        copied.push(value);
        return { cart: copied };
      });
    },
    remove: function (id) {
      set(function (state) {
        let copied = [...state.cart];
        copied = copied.filter((c) => {
          return c.id != id;
        });
        return { cart: copied };
      });
    },
    clear: function () {
      set(function () {
        return { cart: [] };
      });
    },
  };
}
let useTodo = create(createTodo);
export default useTodo;
