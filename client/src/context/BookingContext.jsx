import { createContext, useState } from "react";

export const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [lastBooking, setLastBooking] = useState(null);
  return (
    <BookingContext.Provider value={{ lastBooking, setLastBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
