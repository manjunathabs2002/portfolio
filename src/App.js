import React from 'react';
import './index.css';

// SVG Icons
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

// Sample project data
const projects = [
  {
    title: 'AI-Powered-Code-Reviewer',
    description:
      "The AI-Powered Code Reviewer is a tool designed to assist developers in reviewing and improving their code. It leverages the capabilities of Google's Generative AI to provide detailed feedback on code quality, best practices, performance, security, and more.",
    technologies: ['Node', 'Tailwind CSS', 'Express'],
    githubLink: 'https://github.com/manjunathabs2002/AI-Powered-Code-Reviewer',
  },
  {
    title: 'PassOP - Password Manager',
    description:
      'PassOP is a simple and responsive password manager application built with React. It allows users to securely save, edit, and delete their passwords. The application also provides features like copying passwords to the clipboard and toggling password visibility.',
    technologies: ['React', 'Tailwind CSS', 'React Tostify'],
    githubLink: 'https://github.com/manjunathabs2002/Projects/tree/main/passop',
  },
];

const educationDetails = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Christ Academy Institute for Advanced Studies, Bangalore',
    year: '2023 - 2025',
    description:
      'I pursued my MCA, gaining expertise in software development, web technologies,algorithms,data structures and database management. During the course I got hands-on experience in building full-stack applications, system design, and implementing secure backend APIs.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Vivekananda Institute Of Management Studies, Bangalore',
    year: '2020 - 2023',
    description:
      'I completed my BCA, where I developed a strong foundation in programming, database management, and web development. The course equipped me with practical knowledge in building applications, software engineering, and understanding core computer science concepts.',
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <header className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Manjunatha B S
        </h1>
        <p className="text-xl text-gray-600">
          Aspiring Full-Stack Developer (MERN) | DSA in Java | Passionate About
          Problem-Solving & Scalable Web Apps.
        </p>

        {/* Profile Photo Section */}
        <div className="flex justify-center mb-6">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="/Manjunatha_Image.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="mailto:bsmanjunatha146@gmail.com"
            className="text-blue-600 hover:text-blue-800 inline-flex items-center"
          >
            <MailIcon /> <span className="ml-2">Email</span>
          </a>
          <a
            href="tel:+918431276729"
            className="text-green-600 hover:text-green-800 inline-flex items-center"
          >
            <PhoneIcon /> <span className="ml-2">Phone</span>
          </a>
          <a
            href="https://github.com/manjunathabs2002/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black inline-flex items-center"
          >
            <GitHubIcon /> <span className="ml-2">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/manjunatha-b-s-3008b3276/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 inline-flex items-center"
          >
            <LinkedInIcon /> <span className="ml-2">LinkedIn</span>
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600">
          I'm a passionate student specializing in web development and data
          analysis. I'm dedicated to creating innovative solutions and
          continuously learning new technologies.
        </p>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
        <div className="space-y-6">
          {educationDetails.map((education, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {education.degree}
              </h3>
              <p className="text-gray-600">{education.institution}</p>
              <p className="text-gray-500 text-sm">{education.year}</p>
              <p className="text-gray-600 mt-2">{education.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <strong>Technologies:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center"
              >
                <GitHubIcon /> <span className="ml-2">View on GitHub</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto mt-12 bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Node JS',
            'Express',
            'MongoDB',
            'Java',
            'Tailwind CSS',
            'Git',
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-xl px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-600">
        <p>© 2025 Manjunath. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
