import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FiltersViewer from "../components/Filters/FiltersViewer";
import ProductList from "../components/ProductList";
import ProductSort from "../components/ProductSort";
import SkeletonList from "../components/SkeletonList";
import productApi from "./../../../api/productApi";
import ProductFilters from "./../components/ProductFilters";

ListPage.propTypes = {};
const queryString = require("query-string");
const useStyle = makeStyles({
  root: {},
  left: {
    width: 250,
  },
  right: {
    flex: "1 1 0",
  },
  pagination: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    marginTop: "20px",
    paddingBottom: "20px",
  },
});

function ListPage(props) {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const [productList, setProductList] = useState([]);

  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState(() => ({
    ...queryParams,
    page: Number.parseInt(queryParams.page) || 1,
    limit: Number.parseInt(queryParams.limit) || 12,
    sort: queryParams.sort || "asc",
  }));

  const [pagination, setPagination] = useState({
    total: 1,
    page: 1,
    limit: 12,
  });

  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  }, [history, filters]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch API: ", error);
      }
      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      page: page,
    }));
  };
  const handleSortChange = (newSortValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sort: newSortValue,
    }));
  };
  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };
  const setNewFilters = (newFilters) => {
    setFilters(newFilters);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item className={classes.left}>
          <Paper elevation={0}>
            <ProductFilters filters={filters} onChange={handleFilterChange} />
          </Paper>
        </Grid>
        <Grid item className={classes.right}>
          <Paper elevation={0}>
            <ProductSort
              currentSort={filters.sort}
              onChange={handleSortChange}
            />
            <FiltersViewer filter={filters} onChange={setNewFilters} />
            {loading ? (
              <SkeletonList length={12} />
            ) : (
              <ProductList data={productList} />
            )}
            <Box className={classes.pagination}>
              <Pagination
                count={Math.ceil(pagination.total / pagination.limit)}
                page={pagination.page}
                onChange={handlePageChange}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ListPage;
