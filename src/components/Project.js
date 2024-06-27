//Project.js 

import React, { useState } from 'react';
import CaseStudy from './CaseStudy';
import './Project.css';


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

import three_cover from '../images/case_3/case_3_cover.png'
import three_1 from '../images/case_3/1_graph.png'
import three_2 from '../images/case_3/2_current_state.png'
import three_3 from '../images/case_3/3_new_experience.png'


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    
    {
      id: 2,
      logo: uber_logo,
      title: "Developing Uber Freight's Managed Transportation Product Strategy and Vision",
      subtitle: "Product Strategy • Product Vision Prototype • Customer Problem Stack Rank",
      timeline:  "Timeline: June 2023 - Dec 2023",
      description: "I led my team to create the product strategy and vision for Uber Freight's Managed Transportation business by understanding its current state and aligning the leadership team on goals and opportunities. This strategy guided the work of a $500m/yr business.",
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
    },
    {
      id: 3,
      logo: uber_logo,
      title: "Enhancing Uber Freight's Driver On-Trip Experience to Improve GPS Accuracy",
      subtitle: "Data Analysis • Guerilla Research • Mobile Development",
      timeline: "Timeline: Feb 2023 - July 2023",
      description: "I identified root causes of arrival/departure time inaccuracies through data analysis and user research, linking them to the driver on-trip experience. My enhancements cut defect rates by over 50%.",
      image: three_cover,
      content: (
        <>
          <section className="context">
            <p1>Uber Freight is a digital freight brokerage connecting carriers and shippers via a mobile and web app. It was founded in 2017 and by 2020 had ~$1B in revenue.</p1>
          </section>
    
          <section className="challenge">
            <h4>The challenge</h4>
            <p>Improve the accuracy of arrival and departure times at facilities. Solve the problem in just six months (start to finish) as engineers must be reassigned to other projects. I was asked to solve this problem which is outside of my normal scope in response to tracking accuracy concerns raised by key customers.</p>
          </section>
    
          <section className="role">
            <h4>My role</h4>
            <p>As Product Manager, I led a team of 4 including product ops, an analyst, and two senior mobile engineers. I consulted design and data leads, handling those tasks myself due to constraints.</p>
          </section>
    
          <section className="strategic-context">
            <h4>Strategic Context</h4>
            <p>Accurate arrival and departure times are crucial for shippers to assess network efficiency, carrier reliability, and driver compensation. Initially, gate agents manually recorded times inconsistently. The 2017 ELD mandate required most drivers to use logging devices, with aggregators and TMS integrations emerging to collect this data. However, matching issues and ELD variety left gaps in tracking. Our mobile app helped fill these gaps, including manual input options for drivers.</p>
            <p>Our Load intelligence team had long been focused on improving GPS coverage. When the accuracy of the tracking automation came into question from key customers, I was asked to step in to address the problem due to my strength in data analysis and execution.</p>
          </section>
          <hr></hr>
    
          <section className="discovery">
            <h2>Discovery</h2>
            <p>I approached this issue using as I normally do, first understanding the current state through divergence before diagnosing the issue.</p>
    
            <h4>Understanding current state</h4>
            <p>Measuring accuracy was challenging due to lack of a true counterfactual. Previous methods using gate-agent times were slow and missed the core issue: occasional but significant inaccuracies are what eroded shipper trust, not many small inaccuracies. Much like a cockroach in a bowl of cherries, one small defect soured the customer's mood toward all of our data.</p>
            <p>With the analyst supporting me (Omar), we developed a proxy for inaccuracy: dwell times under 15 minutes, termed the "defect rate". Our overall defect rate was 8%, higher than desired. Reducing this became our objective.</p>
            <p>Analyzing data sources, GPS provided most in/out times with a 6% defect rate. However, our driver on-trip experience, while only 7% of total times, caused 30% of defects. A quarter of in-app inputs were defective.</p>
            <p>This analysis revealed that improving our in-app experience could significantly reduce overall defects, despite its relatively low usage.</p>
            <img src={three_1} alt="Defect rate analysis" className="case-study-image framed-image" />
            <p>Note: My approach to data analytics involves two phases: First, an exploratory/divergent phase aiming for a comprehensive understanding of the current state through extensive segmentation and real-world connections. Second, a convergent phase focused on simplifying the story, eliminating noise, and communicating 1-2 key data points that are easily understandable and memorable for the audience. This method ensures thorough analysis followed by clear, impactful communication of findings.</p>
    
            <h4>Deeper investigation</h4>
            <p>With my team, we personally examined 100 random loads with dwell defects. This approach of investigating individual examples is powerful as it builds deep empathy for user experiences and reveals context missing from aggregate data. It uncovered:</p>
            <ul>
              <li>In-app defects often stemmed from user workarounds for tech issues. For instance, drivers would rapidly click 'arrived' and 'departed' when arriving, or when realizing the app hadn't registered their arrival.</li>
              <li>GPS overwrites caused inaccuracies. Our system would overwrite driver-inputted times with GPS data captured when the app was opened, typically at departure. While intended to improve accuracy, this often resulted in defects, especially when drivers only opened the app upon leaving.</li>
            </ul>
            <img src={three_2} alt="Data sources analysis" className="case-study-image framed-image" />
    
            <h4>Guerilla Research</h4>
            <p>I then conducted direct driver interviews by calling drivers who've had defects recently. I've found that drivers are eager to talk on the phone and happy that someone will hear their feedback. I found:</p>
            <ul>
              <li>Validation and context for the findings above.</li>
              <li>Dispatchers often used driver accounts, quickly inputting arrival/departure times. This account sharing was more common than expected, potentially reducing GPS accuracy by mixing location data from different users. This mixing of location data would likely show up in GPS defect rates, not in-app defect rates.</li>
            </ul>
            <p>This mixed-method discovery approach provided nuanced insights into user behaviors and system limitations causing inaccuracies, going beyond what aggregate data alone could reveal. We now had enough context to set more specific OKRs.</p>
          </section>
    
          <section className="okrs">
            <h4>OKRs</h4>
            <p><strong>Objective:</strong> Decrease the defect rate from 8% to 4%</p>
            <ul>
              <li>KPI: Defect rate from in-app times, from 23% to ~5%</li>
              <li>Guardrail: Do not decrease the overall tracking automation rate.</li>
            </ul>
          </section>
          <hr></hr>
    
          <section className="solution">
            <h2>Solution</h2>
            <p>I prioritized these high-impact changes that would be most addressable with the limited engineering bandwidth (6-8 weeks):</p>
            <ol>
    <li><strong>Allow manual time selection for arrivals/departures</strong>, rather than using point-of-click. This lets drivers input actual times retrospectively.</li>
    <li><strong>Restrict In-App check-ins to within 1 mile of the facility.</strong> This ensures on-site presence and prevents account misuse. We chose to show an error message rather than hide the feature to avoid confusion from delayed GPS pings.</li>
    <li><strong>Remove GPS overwrite of In-App times</strong>. Despite controversy and resistance from operations managers and the original team responsible who had their own incentives, I pushed for this change based on the confidence of my data analysis and first-hand experience. As Keynes said, "It's not bringing in new ideas that's so hard. It's getting rid of the old ones."</li>
  </ol>
            <p>We also introduced an option to disable the OnTrip experience for B2B customers requesting GPS-only tracking. These changes aimed to significantly improve accuracy within our tight timeframe, balancing user needs with technical constraints. We thoroughly discussed implementation details, including time restrictions (no future times allowed), 15-minute increments for time selection, and default timezones. I also led extensive talks on potential fraud risks and strategies to mitigate our exposure.</p>
            <img src={three_3} alt="Solution implementation" className="case-study-image framed-image" />
          </section>
    
          <section className="rollout">
            <h4>Rollout</h4>
            <p>Our rollout approach was guided by data science principles established: We opted for a pre/post launch analysis instead of an experiment (XP) as it would provide sufficient signal more quickly. We were confident in the outcome with minimal downside risk. To further mitigate risk, we used a phased rollout: we started with 10% of the carrier base, and gradually increased the roll-out to 100% over a week. The intuitive nature of the changes meant no written communication to drivers was necessary.</p>
            <p>For ongoing analysis, in addition to our OKRs we monitored:</p>
            <ul>
              <li>Rate of In-App check-in usage</li>
              <li>Frequency of error messages</li>
              <li>Driver locations at form submission</li>
            </ul>
            <p>During the roll-out, I shared my findings on driver adaptation to the team slack channel in real-time.</p>
          </section>
          <hr></hr>
          <section className="outcome">
            <h2>Outcome</h2>
            <p>Overall, we hit our goals.</p>
            <ul>
              <li>Overall defect rate went from 8% to 3.5%.
                <ul>
                  <li>Our efforts exceeded expectations, as they not only improved our target area but also reduced defects in GPS data.</li>
                </ul>
              </li>
              <li>The defect rate for in-app times went from 23% to ~7%.
                <ul>
                  <li>This initially missed the target, but performance improved as drivers got used to the new date-time selector.</li>
                </ul>
              </li>
              <li>There was no negative impact to the overall tracking automation rate.</li>
            </ul>
    
            <h4>Adjustments</h4>
            <p>By monitoring error rates and calling affected drivers, I discovered that "too far from facility" errors occurred even when drivers were nearby. I responded by expanding the acceptable radius for In-app times from 1 to 3 miles.</p>
    
            <h4>Future Enhancements</h4>
            <p>I documented a roadmap for future improvements, despite my temporary assignment. This included:</p>
            <ul>
              <li>Preventing bad data: Further strategies discourage account sharing or separate location data for shared accounts.</li>
              <li>Empower drivers: Add features allowing status reversal and updates, addressing incorrect progress marking.</li>
              <li>Improve facility location data: Use driver check-in behavior to refine our facility location database.</li>
            </ul>
          </section>
          <hr></hr>
    
          <section className="feedback">
            <h2>Collaboration feedback</h2>
            <blockquote>
              <p>"Jason is extremely hands-on in the best ways possible. When writing the PRD, he was in the app himself, going through the check-in workflows... He grabs screenshots so that any reader of the PRD can understand the current workflow. He does an excellent job at getting stakeholder alignment. He would provide detailed context with pros and cons and tag all stakeholders in order to discuss and get alignment…Jason was able to discover a big, unrelated, issue with Smart Waypoints. This was something Jason caught because he's willing to go in the weeds to ensure his product is functioning correctly."</p>
              <footer>- Julie, Product Operations manager</footer>
            </blockquote>
            <blockquote>
              <p>"Jason has been a great help to the eng team by clarifying the requirements and finding the right resource to unblock when needed. Jason has shown harmonious and cooperative spirit by bringing the design/ops/eng/DS team together from the beginning of the project… He was very open to eng feedback and made the user experience smooth. In the middle of the project implementation, the team found that the dispatcher was not able to check-in on trip flow. As soon as he got this attention, he was open to adding this change in the project and extending the timeline, so users get a better experience. I was really very impressed with his data understanding skills. DS was OOO during project rollout, but Jason did all the analytics by himself and shared earlier results. He also helps to debug the user behavior when the on-call team raises the alerts. Overall, it was a great experience working with Jason."</p>
              <footer>- Hetal, Senior Software Engineer</footer>
            </blockquote>
          </section>
          <hr></hr>
          <section className="learnings">
            <h2>Personal Learnings</h2>
            <p>This experience reinforced key principles of effective product management in complex, data-rich environments. As Daniel Kahneman said, "simple models and sparse data can be surprisingly effective in a noisy world." The main learnings include:</p>
            <ul>
              <li>The power of combining multiple discovery methods, especially direct user engagement, to see beyond the data.</li>
              <li>The value of simplifying complex rule sets (e.g., removing GPS data overwrites of InApp times) to improve both accuracy and maintainability.</li>
              <li>The utility of simple proxies (like the 15-minute dwell time "defect rate") for making high-signal progress in complex environments</li>
            </ul>
          </section>
        </>
      ),
    },


    {
      id: 1,
      logo: uber_logo,
      title: "Empowering Uber Freight's Operators",
      subtitle: "Product Discovery • Codesign • Iterative Development",
      timeline:  "Timeline: Sept 2021 - Nov 2022",
      description: "I led product development to empower our Uber Freight operations team to deliver high-quality service. Today, the solution is used everyday by 1,500 people to move over $1B in freight in North America.",
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

    }
  ];

  return (
    <div className="projects">
      <div className="projects-header">Featured Projects</div>
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