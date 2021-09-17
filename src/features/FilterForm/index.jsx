import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

FilterForm.propTypes = {
  onSubmit: PropTypes.func,
};
FilterForm.defaultProps = {
  onSubmit: null,
};

function FilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);
  function handleSearchChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = { searchTerm: value };
      onSubmit(formValues);
    }, 300);
  }
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
      ></input>
    </form>
  );
}

export default FilterForm;
