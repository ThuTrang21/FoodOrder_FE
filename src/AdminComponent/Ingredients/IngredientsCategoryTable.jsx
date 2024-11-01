import { Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import CreateIcon from '@mui/icons-material/Create';
import FormCategory from "./FormCategory";
const orders=[1,1,1,1]
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const IngredientsCategoryTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title={"Ingredient Category"}
          sx={{ pt: 2, alignItems: "center", pl:10 }}
          action={
            <IconButton onClick={handleOpen} aria-label="settings">
              < CreateIcon/>
            </IconButton>
          }
        ></CardHeader>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
    
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Name</TableCell>
                
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
                  
                  <TableCell align="left">{"pizza"}</TableCell>                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <FormCategory/>
        </Box>
      </Modal>
    </Box>
  );
};
