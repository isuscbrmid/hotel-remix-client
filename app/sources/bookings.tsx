import { useAccessToken } from '../containers/global-context/authentication-wrapper';
import { useQuery } from "react-query";
import axios from "axios";

type Booking = {
  id: number,
  booking_method: string,
  name: string,
  last_name: string,
  adults: number,
  childs: number,
  room: null
};

export const getBookings = () => {
  const accesstoken = useAccessToken();
  return useQuery(
    "bookings",
    async (): Promise<Array<Booking>> => {
      const { data } = await axios.get(
        "https://posada-del-angel-mid.herokuapp.com/bookings",
        {
          headers: {
            Authorization: accesstoken
          }
        }
      );
      return data;
    }
  , { refetchOnWindowFocus: false, retry: false });
};


export const getBooking = (bookingId: number) => {
  const accesstoken = useAccessToken();
  return useQuery(
    ["bookings", bookingId],
    async (): Promise<Array<Booking>> => {
      if(bookingId) {
        const { data } = await axios.get(
          `https://posada-del-angel-mid.herokuapp.com/bookings/${bookingId}`,
          {
            headers: {
              Authorization: accesstoken
            }
          }
        );
        return data;
      } else {
        return [];
      }
    }
  , { refetchOnWindowFocus: false, retry: false });
};