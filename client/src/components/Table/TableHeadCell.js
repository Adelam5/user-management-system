import { useStore } from "store";

import { Th } from "./Table.styles";
import { TiArrowSortedUp, TiArrowSortedDown } from "assets/icons";

const TableHeadCell = ({ label, name }) => {
  const setSort = useStore((state) => state.setSort);
  return (
    <Th>
      <div>
        {label}
        <span>
          <TiArrowSortedUp onClick={() => setSort(name)} />
          <TiArrowSortedDown onClick={() => setSort(`-${name}`)} />
        </span>
      </div>
    </Th>
  );
};

export default TableHeadCell;
