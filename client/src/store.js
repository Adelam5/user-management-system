import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const initialState = {
  showModal: false,
  selectedUser: "",
  sort: "",
  page: "",
  filter: "",
  queryString: "",
};

let store = (set) => ({
  ...initialState,
  setShowModal: (show) => set(() => ({ showModal: show })),
  setSelectedUser: (userId) => set(() => ({ selectedUser: userId })),
  setPage: (page) => set(() => ({ page })),
  setSort: (sort) => set(() => ({ sort })),
  reset: () => set(initialState),
});

store = devtools(store);
//store = persist(store, { name: "user-sys" });

export const useStore = create(store);
