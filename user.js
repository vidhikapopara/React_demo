import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import axios from "axios";
import { format } from "date-fns";
const styles = (theme) => ({
  TableHead: {
    backgroundColor: "lightblue",
    color: "white",
    fontWeight: "bold",
  },
});
const StyledCustomTableHead = withStyles(styles)(CustomTableHead);

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  //const [issorted, setIssorted] = useState(false);
  const [showTable, setShowTable] = useState(false);
  // const list = issorted ? sortedUsers : users;

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json"
      )
      .then((response) => {
        setUsers(response.data);
        sortData(response.data, "asc");
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const sortData = (data, order) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (order === "asc") {
        return new Date(a.join_date) - new Date(b.join_date);
      } else {
        return new Date(b.join_date) - new Date(a.join_date);
      }
    });
    setSortedUsers(sortedData);
  };

  const handleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    sortData(users, newOrder);
  };

  const handleButtonClick = () => {
    setShowTable(true);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleButtonClick}>
        Short Data
      </Button>
      {showTable && (
        <>
          <Button variant="contained" color="success" onClick={handleSort}>
            Sort by Join Date {sortOrder === "asc" ? "Ascending" : "Descending"}
          </Button>

          <TableContainer component={Paper}>
            <Table>
              <StyledCustomTableHead>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Friends</TableCell>
                    <TableCell>Influence</TableCell>
                    <TableCell>Chirpiness</TableCell>
                    <TableCell>Join Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedUsers.map((user) => (
                    <TableRow key={user.uid}>
                      <TableCell>{user.uid}</TableCell>
                      <TableCell>{user.twubric?.total}</TableCell>
                      <TableCell>{user.twubric?.friends}</TableCell>
                      <TableCell>{user.twubric?.influence}</TableCell>
                      <TableCell>{user.twubric?.chirpiness}</TableCell>
                      <TableCell>
                        {format(
                          new Date(+`${user.join_date}000`),
                          "dd-MM-yyyy"
                        )}
                      </TableCell>
                      <TableCell>
                        <button>Remove</button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </StyledCustomTableHead>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default UserTable;
