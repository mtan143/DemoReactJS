import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box, Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",

    margin: theme.spacing(2, 0),
    listStyleType: "none",

    "& > li": {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));
FiltersViewer.propTypes = {
  filter: PropTypes.object,
  onChange: PropTypes.func,
};
const FILTER_LIST = [
  {
    id: 1,
    getLabel: (filter) => `Price Range: ${filter.gte} - ${filter.lte}`,
    isActive: () => true,
    isVisible: (filter) =>
      Object.keys(filter).includes("gte") &&
      Object.keys(filter).includes("lte"),
    isRemovable: true,
    onRemove: (filter) => {
      const newFilters = { ...filter };
      delete newFilters.gte;
      delete newFilters.lte;
      return newFilters;
    },
    onToggle: () => {},
  },
];

function FiltersViewer({ filter = {}, onChange = null }) {
  const classes = useStyles();
  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filter));
  }, [filter]);
  return (
    <Box component="ul" className={classes.root}>
      {visibleFilters.map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filter)}
            size="small"
            color={x.isActive(filter) ? "primary" : "default"}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;

                    const newFilters = x.onToggle(filter);
                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;

                    const newFilters = x.onRemove(filter);
                    onChange(newFilters);
                  }
                : null
            }
          ></Chip>
        </li>
      ))}
    </Box>
  );
}

export default FiltersViewer;
