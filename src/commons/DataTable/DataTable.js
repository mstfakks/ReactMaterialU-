import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ rows, columns, loading, sx, checkboxSelection }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      sx={sx}
      checkboxSelection={checkboxSelection}
      pageSize={5}
      rowsPerPageOptions={[2, 5, 10]}
    />
  );
};

export default DataTable;
