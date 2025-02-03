import { create } from "zustand";
function counter(set) {
  return {
    counter: 0,
    increment: function () {
      set(function (state) {
        return { counter: state.counter + 1 };
      });
    },
    decrement: function () {
      set(function (state) {
        return { counter: state.counter - 1 };
      });
      },
    nchage:function() {
        set(function(state) {
            if (state.theme == "light") {
                return {theme:'dark'}
            } else {
                return {theme:'light'}
            }
        })
    }
  };
}

let useCounter = create(counter);
export default useCounter