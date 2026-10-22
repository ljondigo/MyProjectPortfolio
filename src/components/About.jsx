import React, { useState } from 'react';

const experience = [
  {
    role: 'Founder & Principal Software Architect',
    org: 'Exagon SD',
    location: 'Nairobi, Kenya',
    period: 'Current',
    highlights: [
      'Founded and lead a software and digital-product venture focused on building practical platforms for business and operational needs.',
      'Lead product definition, technical architecture and hands-on application development, translating workflow requirements into usable software.',
      'Apply an end-to-end approach across discovery, interface design, implementation, integration, testing, iteration and deployment.',
      'Develop platforms across business process management, operational workflows and sector-specific systems.',
    ],
  },
  {
    role: 'Co-Founder & CTO',
    org: 'Uwazi',
    location: 'Nairobi, Kenya',
    period: 'Feb 2026 – Present',
    highlights: [
      'Lead frontend architecture and technical decisions for a civic-tech platform focused on decentralised corruption reporting.',
      'Implement application state management and REST API integrations to support maintainable frontend workflows.',
      'Contribute to performance optimisation and the delivery of a user-facing digital platform.',
    ],
  },
  {
    role: 'Founder & Product / Software Lead',
    org: 'Onbora',
    location: 'Nairobi, Kenya',
    period: 'Feb 2025 – Present',
    highlights: [
      'Founded and led development of a B2B client-onboarding and workflow-management platform for SMEs.',
      'Owned product strategy and delivery across requirements, user research, MVP development, testing, iteration and market validation.',
      'Integrated CRM, payment and analytics tools, and designed automation workflows to streamline customer follow-up and operational processes.',
    ],
  },
  {
    role: 'Technical Support Assistant',
    org: 'ASG',
    location: 'Remote, South Africa',
    period: 'Jan 2025 – Dec 2025',
    highlights: [
      'Designed support workflows and ticket-routing processes, including automation macros intended to reduce customer wait times.',
      'Configured customer-service software, integrated third-party APIs and maintained internal documentation and help-centre resources.',
    ],
  },
  {
    role: 'JavaScript / React Developer Intern',
    org: 'Synechron',
    location: 'Remote',
    period: 'Feb 2024 – Oct 2024',
    highlights: [
      'Contributed to responsive web applications and internal dashboards, collaborating with designers and backend developers.',
      'Integrated third-party APIs, supported frontend testing and debugging, and participated in Agile sprints.',
      'Developed internal dashboards reported to reduce reporting time by 40%.',
    ],
  },
  {
    role: 'Product Designer',
    org: 'Invonics Technologies',
    location: 'Nairobi, Kenya',
    period: 'Jun 2021 – Nov 2023',
    highlights: [
      'Created wireframes, UI systems and responsive layouts using Figma, working with researchers to understand user behaviour.',
      'Supported usability testing, product validation and iterative improvements based on user feedback and analytics.',
    ],
  },
];

const toolGroups = [
  {
    title: 'Tech Stack',
    items: ['JavaScript, Java, Python', 'React, Node.js, Express.js', 'MongoDB, PostgreSQL, SQLite', 'Firebase, Git, Postman'],
  },
  {
    title: 'Project Management',
    items: ['Microsoft Project', 'Agile Project Management', 'Waterfall Project Management', 'Scrum', 'Kanban'],
  },
];

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto mt-6 scroll-mt-nav bg-surface/40 rounded-3xl border-2 border-white/10 p-6 shadow-md space-y-8 md:p-10"
    >
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Profile Image */}
        <div className="w-full max-w-xs md:max-w-sm flex justify-center shrink-0">
          <img
            src="/images/profilepic.jpeg"
            alt="Leonard Ondigo"
            className="rounded-full object-cover w-[220px] h-[220px] ring-4 ring-accent/70"
          />
        </div>

        {/* Text Content */}
        <div className="w-full text-center lg:text-left">
          <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-2">Get to know me</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">About Me</h2>
          <h3 className="text-accent text-xl md:text-2xl font-bold mb-4">Full Stack Software Developer (MERN)</h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base text-justify">
            Results-driven Full Stack Software Developer specialising in the MERN stack (MongoDB, Express.js, React, Node.js)
            with 3+ years of experience designing, building and deploying responsive, scalable web applications and SaaS products.
            Founder of Onbora and Co-Founder &amp; CTO of Uwazi, with end-to-end ownership of system architecture, RESTful API
            development, state management, CI/CD and cloud deployment. A background in product design and workflow automation
            adds a user-centred, business-aware approach to engineering, with a proven record of eliminating manual processes
            and cutting reporting time by 40% through clean code, API integration and automation. Seeking a Full Stack, MERN or
            Software Engineer role in a high-impact engineering team.
          </p>

          <button
            onClick={() => setShowMore((prev) => !prev)}
            aria-expanded={showMore}
            className="mt-6 inline-flex items-center gap-2 bg-accent text-ink px-6 py-2.5 rounded-lg font-bold transition hover:brightness-110"
          >
            {showMore ? 'See Less' : 'See Experience & Skills'}
            <svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              className={`w-4 h-4 transition-transform ${showMore ? 'rotate-180' : ''}`}
            >
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {showMore && (
        <div className="w-full max-w-3xl mx-auto pt-4 space-y-10 border-t border-white/10">
          <div>
            <h3 className="text-white text-2xl font-bold text-center mt-6 mb-8">Experience</h3>
            <div className="relative pl-8 space-y-8 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-accent/30">
              {experience.map((job) => (
                <div key={job.role + job.org} className="relative">
                  <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-accent/20" />
                  <h4 className="text-white text-lg font-semibold">{job.role}</h4>
                  <p className="text-accent font-medium text-sm">
                    {job.org} <span className="text-slate-400">· {job.location}</span>
                  </p>
                  <p className="text-slate-500 text-xs italic mb-2">{job.period}</p>
                  <ul className="space-y-2 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold text-center mb-6">Tools and Software</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {toolGroups.map((group) => (
                <div key={group.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h4 className="text-accent text-lg font-bold mb-3">{group.title}</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
