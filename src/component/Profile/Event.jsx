import React, { useEffect } from 'react';
import { EventCard } from './EventCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from "../../State/Restaurant/Action";

const Event = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { events } = useSelector((store) => store.restaurant);

  useEffect(() => { 
    dispatch(getAllEvents(jwt));
  }, [dispatch, jwt]); 

  return (
    <div className='mt-5 px-5 flex flex-wrap gap-5'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default Event;
