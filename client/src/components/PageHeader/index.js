import { Header } from "./PageHeader.styles";
import { Input } from "components/Form/FormControl.styles";
import { useState } from "react";

const PageHeader = ({ title, setFilter }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter(input);
  };
  return (
    <Header>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </Header>
  );
};

export default PageHeader;
