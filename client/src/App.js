import { Route, Routes } from "react-router-dom";

import { useStore } from "store";

import GlobalStyles, {
  MainWrapper,
  MainContainer,
} from "assets/styles/GlobalStyles";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Modal from "components/Modal";
import ConfirmDelete from "features/users/delete/ConfirmDelete";
import UsersList from "pages/UsersList";
import CreateUser from "pages/CreateUser";
import EditUser from "pages/EditUser";
import AssignPermission from "pages/AssignPermission";

function App() {
  const showModal = useStore((state) => state.showModal);

  return (
    <>
      <GlobalStyles />

      {showModal && (
        <Modal title="Delete user">
          <ConfirmDelete />
        </Modal>
      )}

      <Navbar />
      <MainWrapper>
        <MainContainer>
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/assign/:id" element={<AssignPermission />} />
          </Routes>
        </MainContainer>
      </MainWrapper>
      <Footer />
    </>
  );
}

export default App;
