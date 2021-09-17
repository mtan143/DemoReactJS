import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  return (
    <Box padding={1}>
      <Box padding={1} minHeight="277px">
        <img src={product.image} alt={product.name} width="100%" />
      </Box>
      <Box component="span" fontSize="16px">
        {product.name}
      </Box>
      <br />
      <Box component="span" fontSize="13px" fontWeight="bold">
        {new Intl.NumberFormat("vn-VN", {
          style: "currency",
          currency: "VND",
        }).format(product.price)}
      </Box>
    </Box>
  );
}

export default Product;
