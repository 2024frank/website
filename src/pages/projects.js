import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Projects() {
  // Sample projects data
  const allProjects = [
    {
      id: 1,
      title: 'coming soon',
      category: 'Education',
      status: 'coming soon',
      contributors: '0',
      description: '...',
      tech: ['coming soon'],
      image: '/placeholder.jpg',
    },
    
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Education', 'Healthcare', 'Agriculture', 'Finance', 'Energy', 'Transportation'];

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Projects - Deep Tech Africa</title>
        <meta name="description" content="Innovative projects from African builders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Featured Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover innovative projects built by African developers and find opportunities to contribute
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-center mb-6 overflow-x-auto pb-2">
              <div className="flex space-x-2">
                {categories.map(category => (
                  <button 
                    key={category}
                    className={`px-4 py-2 rounded-md ${
                      activeCategory === category 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    <span className={`inline-block text-sm font-medium px-3 py-1 rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm bg-primary-100 text-primary-800 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="ml-3 text-gray-600 text-sm">
                      {project.contributors} contributors
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
                      View Project
                    </button>
                    <button className="flex-1 bg-white border border-primary-600 text-primary-600 px-4 py-2 rounded-md hover:bg-primary-50 transition-colors">
                      Contribute
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto bg-primary-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Submit Your Project</h2>
          <p className="text-lg mb-8 text-center">
            Have a project that addresses African challenges? Share it with our community to get feedback,
            find collaborators, and increase visibility.
          </p>
          <div className="text-center">
            <button className="bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
              Submit Project
            </button>
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Success Stories</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">HealthConnect: Expanding Healthcare Access</h3>
              <p className="mb-6">
                Starting as a small project with just 3 developers, HealthConnect has grown into a platform serving 
                over 50,000 patients in rural communities across East Africa. The project has received funding from 
                international health organizations and is now expanding to West Africa.
              </p>
              <div className="flex justify-end">
                <a href="#" className="text-primary-600 hover:text-primary-800">Read full story →</a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">SolarTrack: Powering Remote Communities</h3>
              <p className="mb-6">
                The SolarTrack project began at a hackathon hosted by Deep Tech Africa. Now, it's being implemented 
                in 25 villages across Nigeria and Ghana, increasing solar panel efficiency by 40% and providing 
                reliable electricity to thousands of households.
              </p>
              <div className="flex justify-end">
                <a href="#" className="text-primary-600 hover:text-primary-800">Read full story →</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 