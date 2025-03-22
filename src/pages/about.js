import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>About - Deep Tech Africa</title>
        <meta name="description" content="About Deep Tech Africa - Our mission and vision" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-16">
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">About Deep Tech Africa</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl mb-6">
              Deep Tech Africa is a community platform dedicated to bringing together African builders, developers, 
              designers, and entrepreneurs to foster innovation and collaboration across the continent.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p>
              To create a vibrant ecosystem where African tech talent can connect, collaborate, and build 
              solutions that address local challenges while making a global impact.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
            <p>
              We envision a future where Africa is recognized as a leading hub for technological innovation, 
              with a thriving community of builders who are creating sustainable solutions for both local and global markets.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Collaboration:</strong> We believe in the power of working together across disciplines and borders.</li>
              <li><strong>Innovation:</strong> We encourage creative approaches to solving complex problems.</li>
              <li><strong>Inclusivity:</strong> We welcome diverse perspectives and ensure everyone has a voice.</li>
              <li><strong>Impact:</strong> We focus on creating solutions that make a meaningful difference.</li>
              <li><strong>Knowledge Sharing:</strong> We promote open exchange of ideas and continuous learning.</li>
            </ul>
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p>Access to a network of like-minded individuals across Africa, creating opportunities for mentorship, 
              collaboration, and friendship.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <p>Curated learning materials, tools, and frameworks to help you develop your skills and build better solutions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Events</h3>
              <p>Regular meetups, workshops, hackathons, and conferences both virtual and in-person across different African cities.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Projects</h3>
              <p>Opportunities to collaborate on impactful open-source and commercial projects addressing African challenges.</p>
            </div>
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* In a real application, this would be populated from a data source */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Amara Okafor</h3>
              <p className="text-gray-600">Community Lead</p>
            </div>
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto bg-primary-50 p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg mb-8">
              Be part of our mission to revolutionize technology in Africa. Connect with other builders
              and turn your ideas into reality.
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