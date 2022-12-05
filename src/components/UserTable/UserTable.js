import React, { useEffect, useState } from "react";
import DataTable from "../../commons/DataTable/DataTable";

const columns = [
  { field: "id", headerName: "User ID", width: 150 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "username", headerName: "Username", width: 150 },
  { field: "email", headerName: "E-mail", width: 200 },
];

const userTableStyles = {
  height: "650px",
};

const UserTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <DataTable
      columns={columns}
      rows={users}
      loading={!users.length}
      sx={userTableStyles}
      checkboxSelection
    />
  );
};

export default UserTable;
