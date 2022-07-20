import { useStore } from "store";
import useUsers from "./hooks/useUsers";
import Table from "components/Table";
import { Spinner } from "components/Spinner";
import { Pagination } from "components/Pagination/Pagination.styles";

const UsersTable = () => {
  const page = useStore((state) => state.page);
  const setPage = useStore((state) => state.setPage);
  const sort = useStore((state) => state.sort);
  const filter = useStore((state) => state.filter);

  const { data, isLoading } = useUsers(`?page=${page}&sort=${sort}&${filter}`);

  console.log(`?page=${page}&sort=${sort}&${filter}`);

  const headers = ["First name", "Last name", "Username", "Email", "Status"];

  const handlePageChange = (data) => {
    setPage(data.selected + 1);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Table headers={headers} data={data.data} />
      <Pagination
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={data.pagination.totalPages}
        marginPagesDisplayed={3}
        forcePage={page - 1}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default UsersTable;
