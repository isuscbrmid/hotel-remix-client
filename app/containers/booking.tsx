import { getBooking } from '../sources/bookings';
import Loader from '../components/loader';

const Booking = ({ id }) => {
  const { status, data, error, isFetching } = getBooking(id);

  return <div>
    <h1>Bookings</h1>
    <div>
      {status === "loading" ? (
        <Loader />
      ) : error instanceof Error ? (
        <span>Error: {error.message}</span>
      ) : !!data && (
        <div>
          { 
            Object.keys(data).map((object,i) => {
              return <div key={i}>{object}: {data[object]}</div>
            })
          }
        </div>
      )}
    </div>
  </div>
}

export default Booking;