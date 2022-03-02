const BookingColumnMapper = [
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
];

export default BookingColumnMapper;