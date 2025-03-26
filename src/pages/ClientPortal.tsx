
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clipboard, Clock, Calendar, Download, ArrowRight, Search, Filter } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Mock project data
const projects = [
  {
    id: 1,
    name: 'E-Commerce Website Redesign',
    client: 'RetailTech Inc.',
    status: 'In Progress',
    progress: 65,
    deadline: '2023-08-15',
    lastUpdate: '2023-06-28',
    tasks: [
      { id: 1, name: 'UX Research', status: 'Completed', date: '2023-05-15' },
      { id: 2, name: 'Wireframing', status: 'Completed', date: '2023-06-01' },
      { id: 3, name: 'UI Design', status: 'In Progress', date: '2023-06-15' },
      { id: 4, name: 'Frontend Development', status: 'In Progress', date: '2023-07-01' },
      { id: 5, name: 'Backend Integration', status: 'Pending', date: '2023-07-15' },
      { id: 6, name: 'Testing & QA', status: 'Pending', date: '2023-08-01' }
    ],
    files: [
      { name: 'Project Proposal.pdf', size: '2.5 MB', date: '2023-05-10' },
      { name: 'UX Research Report.pdf', size: '4.8 MB', date: '2023-05-20' },
      { name: 'Wireframes.zip', size: '8.2 MB', date: '2023-06-05' },
      { name: 'Design Mockups.zip', size: '12.4 MB', date: '2023-06-20' }
    ]
  },
  {
    id: 2,
    name: 'CRM System Implementation',
    client: 'Global Finance Ltd.',
    status: 'In Progress',
    progress: 40,
    deadline: '2023-09-30',
    lastUpdate: '2023-06-25',
    tasks: [
      { id: 1, name: 'Requirements Gathering', status: 'Completed', date: '2023-05-20' },
      { id: 2, name: 'System Architecture Design', status: 'Completed', date: '2023-06-10' },
      { id: 3, name: 'Database Setup', status: 'In Progress', date: '2023-06-25' },
      { id: 4, name: 'Core Modules Development', status: 'In Progress', date: '2023-07-15' },
      { id: 5, name: 'Integration with Existing Systems', status: 'Pending', date: '2023-08-15' },
      { id: 6, name: 'User Training', status: 'Pending', date: '2023-09-15' }
    ],
    files: [
      { name: 'Requirements Document.pdf', size: '3.2 MB', date: '2023-05-25' },
      { name: 'System Architecture.pdf', size: '2.1 MB', date: '2023-06-15' },
      { name: 'Database Schema.pdf', size: '1.5 MB', date: '2023-07-01' }
    ]
  },
  {
    id: 3,
    name: 'Mobile App Development',
    client: 'HealthTech Solutions',
    status: 'Completed',
    progress: 100,
    deadline: '2023-06-15',
    lastUpdate: '2023-06-15',
    tasks: [
      { id: 1, name: 'Requirements Analysis', status: 'Completed', date: '2023-03-10' },
      { id: 2, name: 'UI/UX Design', status: 'Completed', date: '2023-04-01' },
      { id: 3, name: 'Frontend Development', status: 'Completed', date: '2023-05-01' },
      { id: 4, name: 'Backend Development', status: 'Completed', date: '2023-05-15' },
      { id: 5, name: 'Testing', status: 'Completed', date: '2023-06-01' },
      { id: 6, name: 'Deployment', status: 'Completed', date: '2023-06-15' }
    ],
    files: [
      { name: 'App Requirements.pdf', size: '2.8 MB', date: '2023-03-15' },
      { name: 'UI Design.zip', size: '9.4 MB', date: '2023-04-05' },
      { name: 'User Manual.pdf', size: '3.7 MB', date: '2023-06-10' },
      { name: 'Final Deliverables.zip', size: '15.2 MB', date: '2023-06-15' }
    ]
  }
];

// Status colors
const statusColors = {
  'Completed': 'bg-green-500',
  'In Progress': 'bg-blue-500',
  'Pending': 'bg-amber-500',
  'Delayed': 'bg-red-500'
};

const ClientPortal = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Client Portal - Nanaware Tech';
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-secondary overflow-hidden">
          <Container className="relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
                Client Portal
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Project Dashboard
              </h1>
              <p className="text-foreground/70 text-lg mb-8 max-w-3xl mx-auto">
                Track your projects, view progress updates, and access project files in one convenient location.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Dashboard */}
        <section className="py-12">
          <Container>
            <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
              {/* Top Bar */}
              <div className="p-6 border-b border-border flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clipboard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Project Dashboard</h2>
                    <p className="text-sm text-foreground/70">
                      {projects.length} {projects.length === 1 ? 'Project' : 'Projects'} • Last updated: June 28, 2023
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <div className="relative w-full sm:w-64">
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 pl-10 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                    />
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-foreground/50" />
                  </div>
                  <div className="relative w-full sm:w-auto">
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="w-full sm:w-40 appearance-none px-4 py-2 pl-10 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm bg-white"
                    >
                      <option value="All">All Status</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Pending">Pending</option>
                      <option value="Delayed">Delayed</option>
                    </select>
                    <Filter className="absolute left-3 top-2.5 h-4 w-4 text-foreground/50" />
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-1 lg:grid-cols-4">
                {/* Project List */}
                <div className="lg:col-span-1 border-r border-border">
                  <div className="overflow-auto max-h-[calc(100vh-300px)]">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => setActiveProject(project)}
                        className={`p-4 border-b border-border cursor-pointer hover:bg-secondary/50 transition-colors ${
                          activeProject.id === project.id ? 'bg-secondary' : ''
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{project.name}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full text-white ${statusColors[project.status as keyof typeof statusColors]}`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/70 mb-2">Client: {project.client}</p>
                        <div className="flex justify-between items-center text-xs text-foreground/70">
                          <span>Progress: {project.progress}%</span>
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {formatDate(project.deadline)}
                          </span>
                        </div>
                        <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-3 p-6">
                  {/* Project Header */}
                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <div>
                        <h2 className="text-2xl font-bold mb-1">{activeProject.name}</h2>
                        <p className="text-foreground/70">Client: {activeProject.client}</p>
                      </div>
                      <div className={`mt-2 md:mt-0 px-3 py-1 rounded-md text-white ${statusColors[activeProject.status as keyof typeof statusColors]}`}>
                        {activeProject.status}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-secondary p-4 rounded-lg">
                        <p className="text-sm text-foreground/70 mb-1">Deadline</p>
                        <p className="font-medium flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          {formatDate(activeProject.deadline)}
                        </p>
                      </div>
                      <div className="bg-secondary p-4 rounded-lg">
                        <p className="text-sm text-foreground/70 mb-1">Time Remaining</p>
                        <p className="font-medium flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          {getDaysRemaining(activeProject.deadline)} days
                        </p>
                      </div>
                      <div className="bg-secondary p-4 rounded-lg">
                        <p className="text-sm text-foreground/70 mb-1">Progress</p>
                        <div className="flex items-center">
                          <div className="flex-1 h-2 bg-white rounded-full overflow-hidden mr-3">
                            <div 
                              className="h-full bg-primary rounded-full" 
                              style={{ width: `${activeProject.progress}%` }}
                            ></div>
                          </div>
                          <span className="font-medium">{activeProject.progress}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="border-b border-border mb-6">
                    <div className="flex space-x-6">
                      {['overview', 'tasks', 'files'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`pb-3 px-1 font-medium capitalize ${
                            activeTab === tab 
                              ? 'text-primary border-b-2 border-primary' 
                              : 'text-foreground/60 hover:text-foreground/80'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="overflow-auto max-h-[calc(100vh-500px)]">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                      <div>
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                          <p className="text-foreground/70 mb-4">
                            This project involves the complete redesign and development of the client's digital platform. 
                            Our team is working on delivering a modern, responsive solution that meets all the specified requirements.
                          </p>
                          <p className="text-foreground/70">
                            Current Status: The project is {activeProject.progress}% complete, with the design phase finished and development in progress.
                          </p>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-lg font-semibold mb-3">Recent Updates</h3>
                          <div className="space-y-4">
                            <div className="border-l-2 border-primary pl-4 pb-4">
                              <div className="flex justify-between">
                                <h4 className="font-medium">UI Design Completed</h4>
                                <span className="text-sm text-foreground/70">June 20, 2023</span>
                              </div>
                              <p className="text-foreground/70 text-sm mt-1">
                                The UI design phase has been completed and all mockups have been approved by the client.
                                We're now moving forward with the frontend development.
                              </p>
                            </div>
                            <div className="border-l-2 border-primary pl-4 pb-4">
                              <div className="flex justify-between">
                                <h4 className="font-medium">Frontend Development Started</h4>
                                <span className="text-sm text-foreground/70">June 25, 2023</span>
                              </div>
                              <p className="text-foreground/70 text-sm mt-1">
                                Our development team has started working on the frontend implementation of the approved designs.
                                We're using React with Tailwind CSS for a modern, responsive interface.
                              </p>
                            </div>
                            <div className="border-l-2 border-primary pl-4">
                              <div className="flex justify-between">
                                <h4 className="font-medium">Weekly Progress Meeting</h4>
                                <span className="text-sm text-foreground/70">June 28, 2023</span>
                              </div>
                              <p className="text-foreground/70 text-sm mt-1">
                                We held our weekly progress meeting with the client. All current developments were presented
                                and received positive feedback. Next steps were discussed and agreed upon.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">Upcoming Milestones</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                              <div>
                                <h4 className="font-medium">Frontend Development Completion</h4>
                                <p className="text-sm text-foreground/70">Expected by July 15, 2023</p>
                              </div>
                              <div className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                In Progress
                              </div>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                              <div>
                                <h4 className="font-medium">Backend Integration</h4>
                                <p className="text-sm text-foreground/70">Expected by July 30, 2023</p>
                              </div>
                              <div className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                                Pending
                              </div>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                              <div>
                                <h4 className="font-medium">Testing & QA</h4>
                                <p className="text-sm text-foreground/70">Expected by August 10, 2023</p>
                              </div>
                              <div className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                                Pending
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tasks Tab */}
                    {activeTab === 'tasks' && (
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Project Tasks</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead className="bg-secondary">
                              <tr>
                                <th className="text-left py-3 px-4 font-medium">Task</th>
                                <th className="text-left py-3 px-4 font-medium">Status</th>
                                <th className="text-left py-3 px-4 font-medium">Date</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                              {activeProject.tasks.map((task) => (
                                <tr key={task.id} className="hover:bg-secondary/50">
                                  <td className="py-3 px-4">{task.name}</td>
                                  <td className="py-3 px-4">
                                    <span className={`inline-block px-2 py-1 text-xs rounded-full text-white ${
                                      statusColors[task.status as keyof typeof statusColors] || 'bg-gray-500'
                                    }`}>
                                      {task.status}
                                    </span>
                                  </td>
                                  <td className="py-3 px-4">{formatDate(task.date)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Files Tab */}
                    {activeTab === 'files' && (
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Project Files</h3>
                        <div className="space-y-3">
                          {activeProject.files.map((file, index) => (
                            <div 
                              key={index} 
                              className="flex justify-between items-center p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                            >
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-medium">{file.name}</h4>
                                  <p className="text-xs text-foreground/70">
                                    {file.size} • {formatDate(file.date)}
                                  </p>
                                </div>
                              </div>
                              <button className="text-primary hover:text-primary/80 transition-colors">
                                <Download className="h-5 w-5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Need Help Section */}
        <section className="py-12">
          <Container>
            <div className="bg-secondary rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 font-display">Need Assistance?</h2>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                Our team is here to help with any questions or issues you may have regarding your projects.
                Don't hesitate to reach out for support.
              </p>
              <Button href="/contact" className="flex items-center mx-auto">
                Contact Support <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ClientPortal;
