import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "./../../../../components/InputField/index";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Please enter title")
      .min(5, "Title is too short"),
  });

  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (value) => {
    const { onSubmit } = props;
    if (onSubmit) onSubmit(value);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <InputField name="title" label="todo" form={form} />
      </form>
    </div>
  );
}

export default TodoForm;
