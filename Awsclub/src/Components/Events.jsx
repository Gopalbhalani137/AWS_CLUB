import React from 'react';
import EventCard from './EventCard';

const eventsData = [
  {
    id: 1,
    photo: 'image.png',
    description:
      'AWS experts Jen Looper & Nilesh Vaghela for insights on AWS leadership, cloud computing, and community building.',
    chiefGuest: 'Jen Looper',
    date: '23 September 2024',
  },
];

const Events = () => {
  return (
    <div className="bg-[#040e15] text-white min-h-screen flex flex-col items-center py-8">
      <h1 className="bg-gradient-to-r from-cyan-200 to-[#78D3E3] text-transparent bg-clip-text md:pb-10 text-5xl font-bold text-center mb-8">
        Events
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
