import { StyledPagination } from "./Pagination.styles";

const Pagination = ({ data }) => {
  return (
    <StyledPagination>
      <div>
        Showing page {data?.page} of {data?.totalPages}
      </div>
      <div>
        <button>Prev</button>
        <button>Next</button>
      </div>
    </StyledPagination>
  );
};

export default Pagination;
