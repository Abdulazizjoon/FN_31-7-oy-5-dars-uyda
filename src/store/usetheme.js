import { create } from "zustand";
import Theme from "../components/mashq1";

function createtheme(set) {
  return {
      cart: [],
      theme:'light',
    changetheme:function() {
        set(function(state) {
            if (state.theme=='light') {
                return {theme:'dark'}
            } else {
                return{theme:'light'}
            }
        })
    }
  };
}
let usetheme = create(createtheme);
export default usetheme;
