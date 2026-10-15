type BookingSummaryProps = {
  userName: string;
  onBookingSelect: (bookingId: string) => void;
};

const BookingSummary = ({
  userName,
  onBookingSelect,
}: BookingSummaryProps) => {
  return (
    <div>
      <h1>Booking Summary</h1>
      <p>Welcome, {userName}</p>
      <p>Total Bookings: 30</p>
      <p>Active Bookings: 18</p>
      <p>Completed Bookings: 12</p>

      <button onClick={() => onBookingSelect('BK-1001')}>
        Select Booking BK-1001
      </button>
    </div>
  );
};

export default BookingSummary;