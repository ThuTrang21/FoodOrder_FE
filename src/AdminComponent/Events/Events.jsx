import { Box, Button, Modal } from "@mui/material";
import React, { useEffect } from "react";
import CreateEvent from "./CreateEvent";
import { useDispatch, useSelector } from "react-redux";
import { EventCard } from "./EventCard";
import { getRestaurantEvents } from "../../State/Restaurant/Action";
const style = {
  position: "absolute",
  top: "70%", // Thay đổi vị trí cho hợp lý
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  maxWidth: 600,
  maxHeight: "80vh", // Giới hạn chiều cao
  overflowY: "auto", // Thêm thanh cuộn nếu nội dung vượt quá chiều cao
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const Events = ({ sidebarOpen }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurantsEvents } = useSelector((store) => store.restaurant);
  const { restaurant } = useSelector((store) => store);

  useEffect(() => {
    dispatch(
      getRestaurantEvents({
        restaurantId: restaurant.usersRestaurant?.id,
        jwt,
      })
    );
   
  }, []);
  return (
    <div>
      <div className="p-5">
        <div
          className={`transition-all duration-300 ${
            sidebarOpen ? "ml-3" : "ml-12"
          }`}
        >
          <Button onClick={handleOpen} variant="contained">
            Create New Event
          </Button>
          <div className="mt-5 px-5 flex flex-wrap gap-5">
            {restaurantsEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CreateEvent />
          </Box>
        </Modal>
      </div>
    </div>
  );
};
