import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, makeStyles, Typography } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "./../../../../components/InputField/index";
import PasswordField from "./../../../../components/PasswordField/index";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 5),
  },
  avatar: {
    margin: "0 auto",
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: "center",
  },
  submit: {
    marginTop: theme.spacing(2),
  },
}));

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Please enter your full name!")
      .test(
        "should has at least two words",
        "Please enter at least two words!",
        (values) => {
          return values.split(" ").length >= 2;
        }
      ),
    email: yup
      .string()
      .required("Please enter your email!")
      .email("Email address invalid"),
    pwd: yup
      .string()
      .required("Please enter your password!")
      .min(6, "Password must have at least 6 characters!"),
    confirmPwd: yup
      .string()
      .required("Please retype your password!")
      .oneOf([yup.ref("pwd")], "Password didn't match"),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      pwd: "",
      confirmPwd: "",
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (value) => {
    const { onSubmit } = props;
    if (onSubmit) onSubmit(value);
    form.reset();
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        SIGN UP
      </Typography>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="pwd" label="Password" form={form} />
        <PasswordField name="confirmPwd" label="Confirm Password" form={form} />

        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
        >
          SIGN UP
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
