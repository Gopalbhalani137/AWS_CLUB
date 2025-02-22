import React from 'react';
import EventCard from './EventCard';
// import './Events.scss';
const eventsData = [
  {
    id: 1,
    photo: 'image1.jpg',
    description:
      'AWS experts Jen Looper & Nilesh Vaghela for insights on AWS leadership, cloud computing, and community building.',
    chiefGuest: 'Dr. Jen Looper',
    date: '23 September 2024',
  },
];

const Events = () => {
  return (
<div className="events-container bg-[#040e15] text-white flex flex-col items-center py-8 md:pt-24 pt-36">
<h1 className="bg-gradient-to-r from-cyan-200 to-[#78D3E3] text-transparent bg-clip-text md:pb-10 text-5xl font-bold text-center mb-8">
        Events
      </h1>
      <div className="spinner">
        <div className="spinner__progress"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
