import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Deep Tech Africa</title>
        <meta name="description" content="Bringing African builders together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Deep Tech Africa
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A community platform bringing African builders together to innovate, collaborate, and create impactful solutions
          </p>
        </section>

        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary-600 mb-4">
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Connect</h2>
            <p className="text-gray-600">Network with talented developers, designers, and entrepreneurs across Africa. Build your professional circle and find mentors.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary-600 mb-4">
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Collaborate</h2>
            <p className="text-gray-600">Find partners for your projects and contribute to innovative ideas. Join forces with others to tackle bigger challenges.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary-600 mb-4">
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Build</h2>
            <p className="text-gray-600">Create impactful technology solutions that address African challenges. Turn your ideas into reality with the support of the community.</p>
          </div>
        </section>

        <section className="bg-indigo-900 text-white p-10 rounded-lg mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" fill="currentColor" />
            </svg>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6">
              <svg className="h-16 w-16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-6">Join Our Discord Community</h2>
            <p className="text-xl mb-8">
              Connect with thousands of African tech builders in real-time. Get help with your projects, 
              share your knowledge, and stay updated on the latest opportunities.
            </p>
            <a 
              href="https://discord.gg/3YYBRM46" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-white text-indigo-900 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Join Discord Now
            </a>
          </div>
        </section>

        <section className="bg-primary-50 p-8 rounded-lg mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg mb-8">
              Be part of a vibrant network of African tech innovators, entrepreneurs, and creators. 
              Share ideas, get feedback, and collaborate on projects that matter.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
              Become a Member
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 