import React, { Fragment } from "react";
import { useTable } from 'react-table';
import Booking from '../../containers/booking';
import Loader from '../../components/loader';
import StyledTable from '../../components/table/styled-table';
import { getBookings } from '../../sources/bookings';
import BookingTableMapper from '../../mappers/booking-table';


const Bookings = () => {
  const [bookingId, setBookingId] = React.useState<number | undefined>(undefined);
  const { status, data, error, isFetching } = getBookings();
  
  const columns = React.useMemo(() => BookingTableMapper, [])

  const tableInstance = useTable({ columns, data: data || [] })
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

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
      </div>
      <Booking id={bookingId} />
    </Fragment>
  );
}

export default Bookings;