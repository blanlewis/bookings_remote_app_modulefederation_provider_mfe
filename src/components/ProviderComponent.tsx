
import React from 'react';
import './ProviderComponent.css';

const Bookings = () => {
  const bookings = [
    { id: 'BK1001', route: 'Udupi → Mangalore', status: 'Planned' },
    { id: 'BK1002', route: 'Mangalore → Bengaluru', status: 'In Transit' },
    { id: 'BK1003', route: 'Kundapura → Udupi', status: 'Completed' },
  ];

  return (
    <div className="container">
      <h1 className="title">Bookings Remote</h1>
      <p>Bookings microfrontend loaded through Module Federation.</p>

      <div>
        {bookings.map((booking) => (
          <div
            key={booking.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              marginTop: '12px',
            }}
          >
            <h3>{booking.id}</h3>
            <p>{booking.route}</p>
            <p>Status: {booking.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
