import { useState } from "react";
import { useStore } from "store";

import { Input, Select } from "components/Form/FormControl.styles";
import { FilterForm } from "components/Form/Form.styles";

import Button from "components/Button";

const Filters = () => {
  const [input, setInput] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const setFilter = useStore((state) => state.setFilter);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filterBy && input) {
      setFilter(`${filterBy}=${input}`);
    } else {
      setFilter("");
    }
  };

  return (
    <FilterForm onSubmit={handleSubmit}>
      <Select
        name="filter"
        value={filterBy}
        onChange={(e) => setFilterBy(e.target.value)}
      >
        <option value="">No Filter</option>
        <option value="firstName">First name</option>
        <option value="lastName">Last name</option>
        <option value="username">Username</option>
        <option value="email">Email</option>
        <option value="status">Status</option>
      </Select>
      <Input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit" label="Filter" />
    </FilterForm>
  );
};

export default Filters;
