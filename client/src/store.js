import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const initialState = {
  showModal: false,
  selectedUser: "",
  userPermissions: [],
  sort: "",
  page: "",
  filter: "",
};

let store = (set) => ({
  ...initialState,
  setShowModal: (show) => set(() => ({ showModal: show })),
  setSelectedUser: (userId) => set(() => ({ selectedUser: userId })),
  setUserPermissions: (permissions) => set(() => ({userPermissions: permissions})),
  setPage: (page) => set(() => ({ page })),
  setSort: (sort) => set(() => ({ sort })),
  setFilter: (filter) => set(() => ({ filter })),
  reset: () => set(initialState),
});

store = devtools(store);
//store = persist(store, { name: "user-sys" });

export const useStore = create(store);
