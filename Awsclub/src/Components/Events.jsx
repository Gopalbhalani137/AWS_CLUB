import React from 'react';

const eventsData = [
  {
    id: 1,
    photo: "https://via.placeholder.com/400x300",
    description: "An exciting tech event discussing the future of AI.",
    chiefGuest: "Dr. Jane Smith",
    date: "2023-08-24"
  },
  {
    id: 2,
    photo: "https://via.placeholder.com/400x300",
    description: "Join us for a musical evening with top artists.",
    chiefGuest: "John Legend",
    date: "2023-09-10"
  },
  {
    id: 3,
    photo: "https://via.placeholder.com/400x300",
    description: "A seminar on sustainable energy solutions.",
    chiefGuest: "Elon Musk",
    date: "2023-10-05"
  },
];

const EventCard = ({ event }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/3 max-w-sm">
    <img src={event.photo} alt={event.description} className="w-full h-48 object-cover" />
    <div className="p-4">
      <p className="text-sm text-gray-400">{event.date}</p>
      <h3 className="text-xl font-semibold mt-2">{event.chiefGuest}</h3>
      <p className="mt-2 text-gray-300">{event.description}</p>
    </div>
  </div>
);

export default function Events() {
  return (
    <div className="bg-[#040e15] text-white min-h-screen flex flex-col">
      <h1 className="bg-gradient-to-r from-cyan-200 bg-[#78D3E3] text-transparent bg-clip-text md:pb-10 text-5xl font-bold text-center">
        Events
      </h1>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
