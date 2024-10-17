import { Box, Card, CardActions, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
const orders=[1,1,1,1]
export const MenuTable = () => {
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title={"All Menu Items"}
          sx={{ pt: 2, alignItems: "center", pl:10 }}
          action={
            <IconButton aria-label="settings">
              < CreateIcon/>
            </IconButton>
          }
        ></CardHeader>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
    
                <TableCell align="left">Image</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Avaibility</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {1}
                  </TableCell>
                  <TableCell align="right">{"image"}</TableCell>
                  <TableCell align="right">{"thut15794@gmail.com"}</TableCell>
                  <TableCell align="right">{"price"}</TableCell>
                  <TableCell align="right">{"pizza"}</TableCell>
                  <TableCell align="right"><IconButton><DeleteIcon/></IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};
