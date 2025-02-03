import { create } from "zustand";

function createUser(set) {
  return {
    user: null, 

    login: function (userData) {
      set(function () {
        return { user: userData };
      });
    },

    logout: function () {
      set(function () {
        return { user: null };
      });
    },
  };
}

const useUser = create(createUser);
export default useUser;
