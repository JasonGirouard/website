import React, { useState } from 'react';
import CaseStudy from './CaseStudy';
import './Project.css';
import faceColorImage from '../images/face_color.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Empowering Uber Freight's Operators",
      subtitle: "Timeline: Sept 2021 - Nov 2022",
      description: "I led product development to empower our Uber Freight operations team to deliver high-quality service. This work included product discovery, codesigning the solution with industry experts, and iterative development. Today, the solution is used everyday by 1,500 people to move over $1B in freight in North America.",
      image: faceColorImage,
      content: {
        challenge: "Uber Freight's growth and profitability were negatively impacted as the company faced challenges maintaining high-quality service to customers under rapid expansion. Despite efforts to automate shipments, manual operations remained critical. The 1,000+ person team lacked proper tools, relying on makeshift solutions like Google Sheets, which hindered effectiveness.",
        role: "I led this project as Product Manager from funding to launch. I was supported by a team of 7, composed of a Designer, a User Researcher, 4 Developers, and a Product Operations Manager.",
        discovery: [
          {
            title: "Surveys",
            content: "As Product Operations Manager prior to becoming Product Manager, I surveyed the operations team pre-kickoff. Results consistently showed a preference for the old 'freight-ops' or 'loadboard' tool, primarily due to its superior information organization.",
            image: faceColorImage
          },
          {
            title: "Data analysis",
            content: "Data analysis I performed of user actions, segmented by role and tenure, confirmed the hypothesis: users heavily favored old tools for less specific tasks. This trend was consistent across categories.",
            image: faceColorImage
          },
          // Add more discovery items...
        ],
        solution: "Given the breadth of user needs and our relatively low industry, I believed that co-designing would lead to the best solution. I recruited three expert users to represent key roles: Ruby (customer support), Sam (account management), and Tom (carrier sales).",
        impact: [
          "SUS went from below-average (57) to average (68), with the largest improvements shown to consistency and complexity.",
          "Escapes to the old tooling fell to near-zero, allowing us to gate and eventually disable the old tool.",
          "Business metrics improved, though not solely due to these product enhancements. Parallel automation efforts, including work by another team under my leadership, contributed to faster scheduling, booking, and invoicing."
        ],
        learnings: [
          "Co-design: Effective for complex needs and rapid delivery when domain expertise is lacking.",
          "Continuous user involvement: Tight feedback loop with alpha users and design partners improved outcomes.",
          // Add more learnings...
        ]
      }
    },
    {
      id: 2,
      title: "Developing Uber Freight's Managed Transportation Product Strategy and Vision",
      subtitle: "Timeline: June 2023 - Dec 2023",
      description: "I led my team to create the product strategy and vision for Uber Freight's Managed Transportation business by understanding its current state, aligning the leadership team on goals and opportunities, and developing an action plan for adjacent teams. This strategy guided the work of a $500m/yr business.",
      image: faceColorImage,
      content: {
        challenge: "While leadership had growth aspirations for the Managed Transportation business, we lacked a clear \"how\" or \"what\" to achieve it. My objective became to define the user needs and develop a strategy to grow the business.",
        role: "As the lead product manager, I spearheaded product discovery and problem prioritization. I was chosen due to my relevant experience from similar brokerage projects and track record of tackling the most complex, ambiguous challenges. My core team was composed of a User Researcher, a Designer, and a VP of Operations (market expert).",
        process: [
          "Objective: Our goal was to discover and define TMS problems to shape a product vision.",
          "Deliverables: A prioritized set of user issues, market and competitor analysis, user journey maps, product vision prototype.",
          // Add more process items...
        ],
        discovery: [
          {
            title: "Usage Data Analysis",
            content: "Despite limited data, I identified the key TMS applications and their weekly active users, segmented by internal and external. This brought new objectivity to our understanding of the current usage.",
            image: faceColorImage
          },
          {
            title: "User Journey Maps",
            content: "My team built on existing user research to create user journey maps. We reviewed this work with those in the Consultant category. These maps produced artifacts detailing jobs-to-be-done, pain points, and opportunities.",
            image: faceColorImage
          },
          // Add more discovery items...
        ],
        outputs: [
          "Prioritized user issues",
          "Primary business objective",
          "Product Vision Concept"
        ],
        learnings: [
          "Product Vision Prototype: I found this to be our most shared and impactful artifact, especially with voiceovers, for aligning teams and stakeholders.",
          "Customer Problem Stack Rank: This forced prioritization revealed true user issues, confirming Danny Kahneman's insight that \"Nothing in life is as important as you think it is, while you are thinking about it.\"",
          // Add more learnings...
        ]
      }
    }
  ];

  return (
    <div className="projects">
      <h2>Featured Projects</h2>
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-info">
            <h3>{project.title}</h3>
            <h4>{project.subtitle}</h4>
            <p>{project.description}</p>
            <button onClick={() => setSelectedProject(project)}>View Case Study</button>
          </div>
        </div>
      ))}
      {selectedProject && (
        <CaseStudy
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;