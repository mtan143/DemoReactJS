import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import { PropTypes } from "prop-types";

FiltersByPrice.propTypes = {
  onChange: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  range: {
    display: "flex",
    flex: "row nowrap",
    alignItems: "center",

    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

    "& > span": {
      marginLeft: theme.spacing(2),
      margin: theme.spacing(2),
    },
  },
}));

function FiltersByPrice({ onChange }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    gte: 0,
    lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
    setValues({
      gte: 0,
      lte: 0,
    });
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">PRICE</Typography>
      <Box className={classes.range}>
        <TextField name="gte" value={values.gte} onChange={handleChange} />
        <span>-</span>
        <TextField name="lte" value={values.lte} onChange={handleChange} />
      </Box>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={handleSubmit}
      >
        APPLY
      </Button>
    </Box>
  );
}

export default FiltersByPrice;
