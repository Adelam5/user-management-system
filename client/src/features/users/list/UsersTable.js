import { useStore } from "store";
import useUsers from "./useUsers";

import { Pagination } from "components/Pagination/Pagination.styles";

import Table from "components/Table";
import { ErrorText } from "components/Form/FormControl.styles";

const UsersTable = () => {
  const page = useStore((state) => state.page);
  const setPage = useStore((state) => state.setPage);
  const sort = useStore((state) => state.sort);
  const filter = useStore((state) => state.filter);

  const { data } = useUsers(`?page=${page}&sort=${sort}&${filter}`);

  const handlePageChange = (data) => {
    setPage(data.selected + 1);
  };

  return (
    <>
      <div>
        <Table data={data?.data} />
        {data?.data.length === 0 && (
          <ErrorText>
            No users found. Filtering is exact-match and case-sensitive.
          </ErrorText>
        )}
        <Pagination
          previousLabel={"<<"}
          nextLabel={">>"}
          pageCount={data?.pagination?.totalPages || 1}
          marginPagesDisplayed={3}
          forcePage={page - 1}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default UsersTable;
