import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Events() {
  // Sample events data
  const events = [
  
    {
      id: 1,
      title: 'Build for Africa Hackathon',
      date: 'coming soon',
      location: 'Virtual',
      type: 'Hackathon',
      description: '...',
      image: '/placeholder.jpg',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Events - Deep Tech Africa</title>
        <meta name="description" content="Upcoming tech events across Africa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Upcoming Events</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us at these exciting events to connect with fellow builders, learn new skills, and showcase your projects
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                <button className="bg-primary-600 text-white px-4 py-2 rounded-md">All Events</button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">Conferences</button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">Hackathons</button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">Workshops</button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">Meetups</button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                      <div className="flex items-center text-gray-600 mb-1">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <button className="inline-block bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Host Your Own Event</h2>
          <p className="text-lg mb-8 text-center">
            Have an idea for a tech event? We can help you organize and promote it to our community.
          </p>
          <div className="text-center">
            <button className="bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
              Submit Event Proposal
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 