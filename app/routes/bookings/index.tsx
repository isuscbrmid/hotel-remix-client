<<<<<<< HEAD
import React from "react";
import axios from "axios";
import { useTable } from 'react-table';
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from "react-query";
import styled from 'styled-components'
import { useAccessToken } from '../../containers/global-context/authentication-wrapper';
=======
import React, { Fragment } from "react";
import { useTable } from 'react-table';
import Booking from '../../containers/booking';
import Loader from '../../components/loader';
import StyledTable from '../../components/table/styled-table';
import { getBookings } from '../../sources/bookings';
import BookingTableMapper from '../../mappers/booking-table';
>>>>>>> 533ef0546e43c96e2b105ea628090059fb2ecd46


<<<<<<< HEAD
const StyledTable = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

type Booking = {
  id: number,
  booking_method: string,
  name: string,
  last_name: string,
  adults: number,
  childs: number,
  room: null
};

//todo mover eso a un archivo en sources/, ahi igual estara el useBooking para obtener un booking.
function useBookings() {
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
  );
}

function getBooking(bookingId) {
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
      }
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
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Apellido',
        accessor: 'last_name',
      },
      {
        Header: 'Fecha de llegada',
        accessor: 'arriving_date'
      },
      {
        Header: 'Fecha de Salida',
        accessor: 'check_out_date'
      },
      {
        Header: 'Adutos',
        accessor: 'adults'
      },
      {
        Header: 'Niños',
        accessor: 'childs'
      },
      {
        Header: 'Método de Reserva',
        accessor: 'booking_method'
      }
    ],
    []
  )
=======
const Bookings = () => {
  const [bookingId, setBookingId] = React.useState<number | undefined>(undefined);
  const { status, data, error, isFetching } = getBookings();
  
  const columns = React.useMemo(() => BookingTableMapper, [])

>>>>>>> 533ef0546e43c96e2b105ea628090059fb2ecd46
  const tableInstance = useTable({ columns, data: data || [] })
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
<<<<<<< HEAD
    useRowSelect,
=======
>>>>>>> 533ef0546e43c96e2b105ea628090059fb2ecd46
    rows,
    prepareRow,
  } = tableInstance

<<<<<<< HEAD
  const onClickRow = (rowId) => setBookingId(rowId);
  return (
    <div>
      <h1>Bookings</h1>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : error instanceof Error ? (
          <span>Error: {error.message}</span>
        ) : !!data && (
          <>
            <StyledTable>
            <table {...getTableProps()}>
              <thead>
                {
                headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                    headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>
                        {
                        column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {
                rows.map(row => {
                  prepareRow(row)
                  return (
                    <tr {...{...row.getRowProps(), onClick: () => onClickRow(row.original.id)}}>
                      {
                      row.cells.map(cell => {
                        return (
                          <td {...cell.getCellProps()}>
                            {
                            cell.render('Cell')}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
            </StyledTable>
            <div>{isFetching ? "Restarting due to changes..." : " "}</div>
          </>
        )}
=======
  const onClickRow = (rowId:number) => setBookingId(rowId);
  return (
    <Fragment>
      <div>
        <h1>Bookings</h1>
        <div>
          {status === "loading" ? (
            <Loader />
          ) : error instanceof Error ? (
            <span>Error: {error.message}</span>
          ) : !!data && (
            <>
              <StyledTable>
              <table {...getTableProps()}>
                <thead>
                  {
                  headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {
                      headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>
                          {
                          column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {
                  rows.map(row => {
                    prepareRow(row)
                    return (
                      <tr {...{...row.getRowProps(), onClick: () => onClickRow(row.original.id)}}>
                        {
                        row.cells.map(cell => {
                          return (
                            <td {...cell.getCellProps()}>
                              {
                              cell.render('Cell')}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              </StyledTable>
            </>
          )}
        </div>
>>>>>>> 533ef0546e43c96e2b105ea628090059fb2ecd46
      </div>
      <Booking id={bookingId} />
    </Fragment>
  );
}

<<<<<<< HEAD
export default function Bookings() {

  const [bookingId, setBookingId] = React.useState(-1);


  return (
    <QueryClientProvider client={queryClient}>
      <BookingLists setBookingId={setBookingId} />
      <Booking id={bookingId} />
    </QueryClientProvider>
  );
}


const Booking = ({id}) => {
  const { status, data, error, isFetching } = getBooking(id);
  console.log(data);

  return <div>
  <h1>Bookings</h1>
  <div>
    {status === "loading" ? (
      "Loading..."
    ) : error instanceof Error ? (
      <span>Error: {error.message}</span>
    ) : !!data && (
      <div>
        {
          
            Object.keys(data).map(object => {
              return <div>{object}: {data[object]}</div>
            })
        }

      </div>
    )}
  </div>
</div>
}
=======
export default Bookings;
>>>>>>> 533ef0546e43c96e2b105ea628090059fb2ecd46
