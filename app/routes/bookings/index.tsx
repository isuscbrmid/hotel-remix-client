import React from "react";
import axios from "axios";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from "react-query";

const queryClient = new QueryClient();

type Booking = {
  id: number,
  booking_method: string,
  name: string,
  last_name: string,
  adults: number,
  childs: number,
  room: null
};

function useBookings() {
  return useQuery(
    "bookings",
    async (): Promise<Array<Booking>> => {
      const { data } = await axios.get(
        "https://posada-del-angel-mid.herokuapp.com/bookings"
      );
      return data;
    }
  );
}

function BookingLists({
  setBookingId,
}: {
  setBookingId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useBookings();

  return (
    <div>
      <h1>Bookings</h1>
      <br />
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : error instanceof Error ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data?.map((booking) => (
                <p key={booking.id}>booking</p>
              ))}
            </div>
            <div>{isFetching ? "Restarting due to changes..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Bookings() {

  const [bookingId, setBookingId] = React.useState(-1);

  return (
    <QueryClientProvider client={queryClient}>
      <BookingLists setBookingId={setBookingId} />
    </QueryClientProvider>
  );
}
