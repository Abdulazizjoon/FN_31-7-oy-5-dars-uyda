import { create } from "zustand";

function createcartestore(set) {
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
    edit: function (value) {
      set(function (state) {
        let copied = [...state.cart];
        copied = copied.map((c) => {
          if (c.id == value.id) {
            c = value;
          }
          return c;
        });
        return { cart: copied };
      })
      },
      clear:function() {
        set(function() {
            return {cart:[]}
        })
      }
  };
}
let usecart = create(createcartestore);
export default usecart;
