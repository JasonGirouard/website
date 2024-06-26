import React, { useState } from 'react';
import CaseStudy from './CaseStudy';
import './Project.css';
import faceColorImage from '../images/face_color.jpg';

// case study 1 
import uber_logo from '../images/case_1/uber_logo.png'
import one_1 from '../images/case_1/0_feedback.png'
import one_2 from '../images/case_1/1_data.png'
import one_3 from '../images/case_1/2_focus_group.png'
import one_4 from '../images/case_1/3_sus.png'
import one_5 from '../images/case_1/4_cocreation.png'
import one_6 from '../images/case_1/5_jtbd.png'
import one_8 from '../images/case_1/7_results.png'
import one_9 from '../images/case_1/8_results.png'
import one_cover from '../images/case_1/case_1_cover.png'


// case study 2 

import two_1 from '../images/case_2/1_triple_diamond.png'
import two_2 from '../images/case_2/2_wau.png'
import two_3 from '../images/case_2/3_journey_map.png'
// import two_4 from '../images/case_2/.png'
import two_5 from '../images/case_2/5_cspr.png'
import two_6 from '../images/case_2/6_stack_rank.png'
import two_7 from '../images/case_2/7_vision.png'
import two_cover from '../images/case_2/2_cover_image.png'


import userJourneyMapImage from '../images/face_color.jpg';
import problemStackRankImage from '../images/face_color.jpg';
import productVisionConceptImage from '../images/face_color.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      logo: uber_logo,
      title: "Empowering Uber Freight's Operators",
      subtitle: "Product Discovery • Codesign • Iterative Development",
      timeline:  "Timeline: Sept 2021 - Nov 2022",
      description: "I led product development to empower our Uber Freight operations team to deliver high-quality service. This work included product discovery, codesigning the solution with industry experts, and iterative development. Today, the solution is used everyday by 1,500 people to move over $1B in freight in North America.",
      image: one_cover,
      content: (
        <>
        <section className="context">
          <p1>Uber Freight is a digital freight brokerage connecting carriers and shippers via a mobile and web app. Uber Freight is responsible for operating the freight, including providing support for both the carriers and shippers. It was founded in 2017 and by 2020 had ~$1B in revenue.</p1>
        </section>
  
        <section className="challenge">
          <h4>The challenge</h4>
          <p>Uber Freight's growth and profitability were negatively impacted as the company faced challenges maintaining high-quality service to customers under rapid expansion. Despite efforts to automate shipments, manual operations remained critical. The 1,000+ person team lacked proper tools, relying on makeshift solutions like Google Sheets, which hindered effectiveness.</p>
          <p>A first version of new tooling, "workLoad", was quickly built with minimal product discovery which created new issues without solving the original ones. The right solution was essential for growth, especially with an upcoming acquisition that would double the size of the operations team within a year.</p>
        </section>
  
        <section className="role">
          <h4>My Role</h4>
          <p>I led this project as Product Manager from funding to launch. I was supported by a team of 7, composed of a Designer, a User Researcher, 4 Developers, and a Product Operations Manager.</p>
        </section>
        <hr></hr>
  
        <section className="discovery">
          <h2>Discovery</h2>
          <p>Initial research focused on two key objectives: understanding preference for old tools over new ones, and identifying inefficiencies caused by missing or disorganized information. Preliminary informal discovery helped gather additional support for the formal process.</p>
          
          <h4>Surveys</h4>
          <p>As Product Operations Manager prior to becoming Product Manager, I surveyed the operations team pre-kickoff. Results consistently showed a preference for the old 'freight-ops' or 'loadboard' tool, primarily due to its superior information organization.</p>
          <img src={one_1} alt="Survey results showing preference for old tools" className="case-study-image framed-image" />
  
          <h4>Data analysis</h4>
          <p>Data analysis I performed of user actions, segmented by role and tenure, confirmed the hypothesis: users heavily favored old tools for less specific tasks. This trend was consistent across categories.</p>
          <img src={one_2} alt="Data analysis of user actions" className="case-study-image framed-image" />
  
          <h4>Focus Groups</h4>
          <p>I collaborated with Denver, one of Uber Freight's few dedicated user researchers, to set the research objectives. We identified key users and asked them to document pain points related to our initial findings. A long-tail of user needs & desires was documented, shedding light on the breadth and depth of the problem.</p>
          <img src={one_3} alt="Survey results showing preference for old tools" className="case-study-image framed-image" />

          <h4>System Usability Scale</h4>
          <p>To establish a baseline of performance, we partnered with UXR to conduct a System Usability Scale survey (SUS). We also evaluated workLoad's effectiveness in team collaboration, information accessibility, and proactive capabilities. workLoad scored at below-average usability, and scored poorly on complexity consistency.</p>
          <img src={one_4} alt="System Usability Scale results" className="case-study-image framed-image" />
        </section>
  
        <section className="goals">
          <h2>Goals & Success Metrics</h2>
          <p><strong>Objective:</strong> Improve consistency and reduce complexity of workLoad to increase user efficiencies and quality of service.</p>
          <ul>
            <li>KR: Improve measured usability from below average (55) to average (68)</li>
            <li>KR: Reduce voluntary escapes to old tooling, from 60% to below 5% this year</li>
            <li>KR: Improve scheduling, booking, and invoicing velocity of loads</li>
          </ul>
        </section>
        <hr></hr>
        <section className="solution">
          <h2>Solution</h2>
          <p>Given the breadth of user needs and our relatively low industry, I believed that co-designing would lead to the best solution. I recruited three expert users to represent key roles: Ruby (customer support), Sam (account management), and Tom (carrier sales).</p>
  
          <h4>Rapid Prototyping through Codesign</h4>
          <p>We spent a few hours everyday for a week dedicated to problem analysis, concept review, and design revisions with our design partners. Codesigning led to rapid prototyping and tight feedback loops.</p>
          <img src={one_5} alt="Survey results showing preference for old tools" className="case-study-image framed-image" />

          <h4>New user needs discovered</h4>
          <p>Rapid prototyping revealed a lesser known need for flexible systems to accommodate diverse customer processes. We identified configurable workflows and improved collaboration as key to enhancing scheduling, booking, and invoicing efficiency. We expanded our objective to include enhancing configurability.</p>
  
          <h4>Jobs to be Done</h4>
          <p>I mapped the various user types' jobs-to-be-done against their pain points to identify gaps. Ling (product designer) and I refined the design over weeks, addressing all JBTDs and regularly consulting our design partners. A high level of diligence helped to ensure that no stone was left unturned.</p>
          <img src={one_6} alt="Survey results showing preference for old tools" className="case-study-image framed-image" />

          <h4>Tested Prototype</h4>
          <p>We evaluated our refined prototype using the initial System Usability Scale with a small user group (n=18). Results showed improvements across all categories, supported by positive qualitative feedback. Prototype testing increased our confidence before initiating development.</p>
          
        </section>
        <hr></hr>
        <section className="development">
          <h2>Development</h2>
          <p>I led a skilled four-person dev team to release iteratively with tight customer feedback loops. This enabled rapid development and continuous refinement based on customer feedback.</p>
  
          <h4>Alpha users group established for tight feedback</h4>
          <p>I worked with operations leaders to form a 10-person 'alpha user' team to preview major changes. I created a Slack channel for feedback and questions while fostering an inclusive, collaborative learning environment. Alpha users provided context for feedback and facilitated rapid refinements.</p>
  
          <h4>Incremental Releases</h4>
          <p>We deployed major architectural changes at once, but rolled out smaller enhancements incrementally without gates. This approach, agreed upon with operations leaders, accelerated improvement and fostered trust, acknowledging some discomfort as part of growth. My team would deploy to production almost every day.</p>
  
          <h4>QA</h4>
          <p>As a Product Operations Manager, I established a habit of daily manual testing that I maintained as Product Manager. This practice enabled quick bug fixes before afternoon releases, boosting team velocity. While we later involved Product Ops and QA teams, I maintain that hands-on PM testing leads to higher product quality and team velocity.</p>
        </section>
        <hr></hr>
        <section className="impact">
          <h2>Impact</h2>
          <p>By November, one year after starting discovery, while there were more refinements to be made, we had met our goals:</p>
          <ul>
            <li>SUS went from below-average (57) to average (68), with the largest improvements shown to consistency and complexity.</li>
            <li>Escapes to the old tooling fell to near-zero, allowing us to gate and eventually disable the old tool.</li>
            <li>Business metrics improved, though not solely due to these product enhancements. Parallel automation efforts, including work by another team under my leadership, contributed to faster scheduling, booking, and invoicing.</li>
          </ul>
          <img src={one_8} alt="Impact metrics visualization" className="case-study-image framed-image" />
          <img src={one_9} alt="Impact metrics visualization" className="case-study-image framed-image" />
          
        </section>
        <hr></hr>
        <section className="feedback">
          <h2>Collaboration feedback</h2>
          <blockquote>
            <p>"I had the pleasure of working with Jason for the past year and found him to be an excellent design partner. He was creative, flexible, and dependable. Jason consistently approached tasks with enthusiasm and efficiency and was highly organized, often going the extra mile to ensure that projects were completed on time and to the highest standard. In addition to his strong work ethic and positive attitude, Jason was a proactive problem-solver who was not afraid to come up with creative solutions to complex issues. He was also skilled at bringing together various stakeholders and effectively driving projects to completion, which was critical for our projects' success."</p>
            <footer>— Ling, Staff Product Designer</footer>
          </blockquote>
          <blockquote>
            <p>"I have really enjoyed working with Jason over the past year as he took on full ownership of the product for the Load Management team. Jason was very thoughtful with planning the halves, sprints and detail oriented with execution. Led the sprint planning meetings effectively and actively contributed to all other team meetings (ex: stand ups, retros etc). Built trust with the team by being transparent and ensuring everyone understood the rationale behind decisions (ex: AR reprioritization, EE task prioritization during sprint planning etc). Engineers on the team enjoy working with Jason as well. I'm looking forward to more collaboration in the future and excited about the results the team will deliver."</p>
            <footer>— Ravi, Sr Engineering Manager</footer>
          </blockquote>
        </section>
  
        <section className="learnings">
          <h2>Personal Learnings</h2>
          <ul>
            <li><strong>Co-design:</strong> Effective for complex needs and rapid delivery when domain expertise is lacking.</li>
            <li><strong>Continuous user involvement:</strong> Tight feedback loop with alpha users and design partners improved outcomes.</li>
            <li><strong>Qualitative data and storytelling:</strong> Valuable for stakeholder buy-in and solution development when hard data is scarce.</li>
            <li><strong>Simple success metrics:</strong> Escape rates and SUS provided clear indicators of progress and informed product decisions.</li>
            <li><strong>Hands-on PM approach:</strong> Daily testing and involvement in discovery/development enhanced team synchronization and rapid delivery.</li>
          </ul>
        </section>
      </>
      ),

    },
    {
      id: 2,
      logo: uber_logo,
      title: "Developing Uber Freight's Managed Transportation Product Strategy and Vision",
      subtitle: "Product Strategy • Product Vision Prototype • Customer Problem Stack Rank",
      timeline:  "Timeline: June 2023 - Dec 2023",
      description: "I led my team to create the product strategy and vision for Uber Freight's Managed Transportation business by understanding its current state, aligning the leadership team on goals and opportunities, and developing an action plan for adjacent teams. This strategy guided the work of a $500m/yr business.",
      image: two_cover,
      content: (
        <>
          <section className="context">
            <p1>Uber Freight's B2B Managed Transportation business helps enterprise companies like Kellogg's plan and ship goods efficiently via SaaS through the Transportation Management System (TMS). After the Transplace Acquisition closed in 2022, this $500M/yr business became the top tech priority.</p1>
          </section>
    
          <section className="challenge">
            <h4>The challenge</h4>
            <p>While leadership had growth aspirations for the Managed Transportation business, we lacked a clear "how" or "what" to achieve it. My objective became to define the user needs and develop a strategy to grow the business.</p>
            <h4>Additional headwinds included:</h4>
            <ul>
              <li>Inherited tech issues: The TMS was from the acquired company (Transplace) and had significant technical debt, including many bespoke solutions for individual customers.</li>
              <li>Limited understanding of this newly acquired business line by myself and leadership.</li>
              <li>Pressure for meaningful improvements: Only superficial changes had been made post-acquisition, and there was urgency to deliver substantial upgrades.</li>
              <li>Limited familiarity with modern product development processes by the acquired company.</li>
            </ul>
            <p><em>Note: Given the sensitive content, process details are shared but specifics and documents are redacted.</em></p>
          </section>
    
          <section className="role">
            <h4>My Role</h4>
            <p>As the lead product manager, I spearheaded product discovery and problem prioritization. I was chosen due to my relevant experience from similar brokerage projects and track record of tackling the most complex, ambiguous challenges. My core team was composed of a User Researcher, a Designer, and a VP of Operations (market expert).</p>
          </section>
          <hr></hr>
          <section className="process-and-goals">
            <h2>Process & Goals</h2>
            <p>The first step was to align on and get feedback on the process with leadership. I created the first version of the process and goals and got feedback from group product and design managers.</p>
            <ul>
              <li><strong>Objective:</strong> Our goal was to discover and define TMS problems to shape a product vision.</li>
              <li><strong>Business goals:</strong> Improving growth, monetization, customer onboarding, efficiency, and retention. These were broad to start, and we wanted to narrow them down later on.</li>
              <li><strong>Deliverables:</strong> A prioritized set of user issues, market and competitor analysis, user journey maps, product vision prototype.</li>
              <li><strong>Stakeholders:</strong> I structured stakeholder involvement by defining key roles: decision-makers (CEO+1 leads), sponsors (CEO+2 business leads), consultants (20 experts), and those to be informed. I formed a core team with myself, a researcher, designer, and VP of Operations as a market expert. Given the project's priority, I managed extensive feedback by clearly defining roles and responsibilities.</li>
              <li><strong>Timeline & Milestones:</strong> I established a timeline with leadership reviews at key milestones: project plan and goals alignment, problem prioritization review, and vision concept evaluations for versions 1 and 2. I scheduled sponsor reviews prior to leadership reviews to gather feedback and ensure alignment. The project would extend from June 2023 to October 2023.</li>
              <li><strong>Scope:</strong> We would focus on the user value & experience from beginning to end (horizontally). We wouldn't be going deep in any one specific phase (vertically).</li>
            </ul>
            <p>My mantra throughout this process became "Before we get excited about the low-hanging fruit, let's be sure we're under the right tree".</p>
            <img src={two_1} alt="Impact metrics visualization" className="case-study-image framed-image" />
            <p>After aligning on the process and goals with our working group and sponsors, it proved valuable to socialize it with stakeholders who were less familiar with modern product development principles.</p>
            <p><em>As an aside: While I simultaneously oversaw three scrum teams of 30 (mostly offshore) engineers that supported the existing application, I was able to rely on Product Operations to manage these teams. This allowed me to focus on creating value in the highest leverage way.</em></p>
          </section>
          <hr></hr>
          <section className="discovery">
            <h2>Discovery</h2>
            <p>Throughout the Discovery process we wanted to answer broad questions including the users' main jobs-to-be-done, our competitive position, problems faced by existing and new users, and the business impact of these issues.</p>
            <p>Our approach:</p>
            <ol>
              <li>Create user journey maps for setup and order lifecycle</li>
              <li>Gather concept feedback from SaaS design partners</li>
              <li>Conduct a customer problem stack-rank (CPSR) with key stakeholders and SaaS users</li>
            </ol>
    
            <h4>Usage Data Analysis</h4>
            <p>Despite limited data, I identified the key TMS applications and their weekly active users, segmented by internal and external. This brought new objectivity to our understanding of the current usage.</p>
            <img src={two_2} alt="Impact metrics visualization" className="case-study-image framed-image" />
    
            <h4>User Journey Maps</h4>
            <p>My team built on existing user research to create user journey maps. We reviewed this work with those in the Consultant category. These maps produced artifacts detailing jobs-to-be-done, pain points, and opportunities. Additionally, this work established a shared language for product discussions with leadership, simplifying our approach to the complex solution.</p>
            <img src={two_3} alt="User Journey Map example" className="case-study-image framed-image" />
    
            <h4>Concept Review</h4>
            <p>In my experience, combining design concept creation with problem discovery best illustrates problems and jobs-to-be-done. Leveraging existing relationships, we shared conceptual designs with long-term SaaS customers. This approach yielded more insightful feedback than asking about problems alone, which often resulted in overly tactical or uninformative positive responses.</p>
    
            <h4>Problem Stack Rank</h4>
            <p>I led a "$100 exercise", also known as a Customer Problem Stack Rank, with SaaS customers and 20 operations leads in our consultant and sponsor groups to prioritize pain points across functional (e.g. consolidation of orders) and thematic (e.g. data insights) areas. This high-signal exercise, praised by product leaders such as Shreyas Doshi, yielded valuable insights including:</p>
            <ul>
              <li>Cross-pollination of ideas among rarely-collaborating leaders</li>
              <li>Revealed priority differences across teams (e.g., Operations vs. Client Engagement)</li>
              <li>Forced ranking provided perspective, sometimes surprising participants</li>
            </ul>
            <p>The approach effectively identified top problems while securing stakeholder buy-in.</p>
            <img src={two_5} alt="Problem Stack Rank exercise results" className="case-study-image framed-image" />
    
            <h4>Competitive Analysis</h4>
            <p>I collaborated with our Strategy & Planning team on competitive analysis, adapting existing material. In hindsight, I should have invested more time here, given the market's maturity and its relevance to our later-identified go-to-market strategy needs.</p>
          </section>
          <hr></hr>
          <section className="outputs">
            <h2>Outputs</h2>
            <p>With user journey maps, market analysis, and concepts in hand, we could now align on prioritized user issues, a primary business objective, and create a product vision prototype.</p>
    
            <h4>Prioritized user issues</h4>
            <p>I focused on prioritizing the user issues with the sponsor group (CEO+2). This process clarified trade-offs and resulted in a stack-ranked list of user problems, deep-dives into top priorities, and synthesized user research findings.</p>
            <p>The outcome proved extremely valuable in aligning teams to the work, and sharing knowledge.</p>
            <img src={two_6} alt="Impact metrics visualization" className="case-study-image framed-image" />
    
            <h4>Primary business objective</h4>
            <p>In truth, specific business objectives took months to crystallize beyond general improvement goals. We offered recommendations, but I learned this process can't be rushed. The resulting insights significantly shaped the top-down objectives.</p>
    
            <h4>Product Vision Concept</h4>
            <p>I worked with product design to create a vision concept featuring simplified onboarding, a unified TMS, and AI-powered solutions. This artifact helped align our large team, clarify priorities, and motivate internally.</p>
            <img src={two_7} alt="Product Vision Concept" className="case-study-image framed-image" />
          </section>
    
          <section className="mvp">
            <h4>MVP</h4>
            <p>The final step was to define the MVP for our Reimagined TMS. I partnered with our heads of product and design for the TMS and together we …</p>
            <ul>
              <li>Worked backwards from our vision</li>
              <li>Established MVP guiding principles</li>
              <li>Identified initial target users</li>
              <li>Mapped current app states and required evolutions (reskin, redesign, rebuild)</li>
              <li>Outlined vertical and horizontal solutions and who would own them.</li>
            </ul>
            <p>I then led teams on critical, high-leverage work including work discovery/execution, account settings, identity and access management (IAM), order entry, and consolidation.</p>
          </section>
    
          <section className="overall">
            <h3>Overall</h3>
            <p>After six months, we developed a clear product strategy, vision, and MVP roadmap. This aligned our team and set up successful execution. The outcome and my personal growth made the intense effort and long hours worthwhile.</p>
          </section>
          <hr></hr>
          <section className="feedback">
            <h2>Collaboration feedback</h2>
            <blockquote>
              <p>"Jason has developed strong product and user intuition. His passion for user experience shines through in his consistent advocacy and active involvement in the product design process. Leveraging data to inform decisions, he exemplifies the power of data-driven product strategy. Jason consistently delivers on time, high-quality product documentation, standing out as one of the more proficient PRD writers in our product management team. As a team leader, Jason's highly effective in driving engineering velocity, maintaining a well-curated engineering Jira backlog, and promoting continuous process improvement. In short, Jason's skill set and approach are key drivers of our team's success"</p>
              <footer>- Shawn, Director of Product Design</footer>
            </blockquote>
            <blockquote>
              <p>"Jason managed a great balance between understanding and solutioning for user stories and business needs, while also sharing realistic feedback on where we could find common ground and produce results while remaining true to overall corp strategy. He was very professional and courteous."</p>
              <footer>- Jeff, VP Operations</footer>
            </blockquote>
            <blockquote>
              <p>"Jason picked things up [on the managed transportation business] incredibly quickly and has been able to deliver a ton of valuable insights and strategy as well as deliver some key new functionality in a short time while getting ramped up in a complex environment. Jason has done a great job of getting a diverse set of opinions up-to-speed and onboard with his plans and top problem statements from the TMS. Because of these efforts, he's built trust throughout the org which has set him up for success in the new year with many of the L-XL efforts he's leading. Another area in which I've consistently been impressed is Jason's understanding and command of the engineering architecture. Jason can quickly navigate complex scoping conversations which enables the team to build efficiently and sustainably."</p>
              <footer>- Mike, Manager of Product Operations</footer>
            </blockquote>
          </section>
          <hr></hr>
          <section className="learnings">
            <h2>Personal Learnings</h2>
            <ul>
              <li><strong>Product Vision Prototype:</strong> I found this to be our most shared and impactful artifact, especially with voiceovers, for aligning teams and stakeholders.</li>
              <li><strong>Customer Problem Stack Rank:</strong> This forced prioritization revealed true user issues, confirming Danny Kahneman's insight that "Nothing in life is as important as you think it is, while you are thinking about it."</li>
              <li><strong>Competitive Analysis:</strong> While I created our vision and strategy with minimal competitive analysis, I realized later that more thorough research could have better informed our feature prioritization and go-to-market strategy.</li>
              <li><strong>Stakeholder Alignment:</strong> My approach of defining roles and responsibilities proved crucial for managing short-term pressures and transforming team priorities from urgent to important or, as I put it, "making sure we're under the right tree before we get excited about the low-hanging fruit". I was pleasantly surprised by stakeholders' positive reception to this method.</li>
              <li><strong>Strategic Communication:</strong> I had to adapt from my usual bi-weekly updates to milestone-based recaps, allowing me to carefully structure and communicate complex strategy insights more effectively.</li>
            </ul>
          </section>
        </>
      ),
    }
  ];

  return (
    <div className="projects">
      <h2>Featured Projects</h2>
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt={project.title} className="project-image framed-image" />
          <div className="project-info">
            <img src={project.logo} alt={project.title} className="project-logo" />
            <h3>{project.title}</h3>
            <p2>{project.subtitle}</p2>
            <p>{project.description}</p>
            <button className="view-case-study-button" onClick={() => setSelectedProject(project)}>Open Project</button>
            
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

// `
//       <section>
//             <h4>The Challenge</h4>
//             <p>Uber Freight's growth and profitability were negatively impacted as the company faced challenges maintaining high-quality service to customers under rapid expansion. Despite efforts to automate shipments, manual operations remained critical. The 1,000+ person team lacked proper tools, relying on makeshift solutions like Google Sheets, which hindered effectiveness.</p>
//           </section>

//           <section>
//             <h4>My Role</h4>
//             <p>I led this project as Product Manager from funding to launch. I was supported by a team of 7, composed of a Designer, a User Researcher, 4 Developers, and a Product Operations Manager.</p>
//           </section>

//           <section>
//             <h2>Discovery</h2>
//             <h4> Surveys</h4>
//             <p>As Product Operations Manager prior to becoming Product Manager, I surveyed the operations team pre-kickoff. Results consistently showed a preference for the old 'freight-ops' or 'loadboard' tool, primarily due to its superior information organization.</p>
//             <img src={faceColorImage} alt={'image of surveys'} className="project-image" />
            
//           </section>
//       `