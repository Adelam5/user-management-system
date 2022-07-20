import create from "zustand";
import { devtools } from "zustand/middleware";

const initialState = {
  showModal: false,
  selectedUser: "",
  userPermissions: [],
  sort: "",
  filter: "",
};

let store = (set) => ({
  ...initialState,
  setShowModal: (show) => set(() => ({ showModal: show })),
  setSelectedUser: (userId) => set(() => ({ selectedUser: userId })),
  setUserPermissions: (permissions) =>
    set(() => ({ userPermissions: permissions })),
  setSort: (sort) => set(() => ({ sort })),
  setFilter: (filter) => set(() => ({ filter })),
  reset: () => set(initialState),
});

store = devtools(store);

export const useStore = create(store);
