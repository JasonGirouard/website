import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';
import uberLogo from '../images/case_1/uber_logo.png';
import uberFreight from '../images/uber-freight-logo.png';

const testimonials = [
  {
    quote: "Jason has strong product and user intuition. His passion for user experience shines through in his consistent advocacy and active involvement in the product design process. Leveraging data to inform decisions, he exemplifies the power of data-driven product strategy. Jason's skill set and approach are key drivers of our team's success",
    author: "Shawn, Director of Product Design",
    company: uberLogo
  },
  {
    quote: "Jason is very thoughtful with planning the halves, sprints and detail oriented with execution. He leads the sprint planning meetings effectively and actively contributes to all other team meetings (ex: stand ups, retros etc). He built trust with the team by being transparent and ensuring everyone understood the rationale behind decisions. Engineers on the team enjoy working with Jason.",
    author: "Ravi, Senior Engineering Manager",
    company: uberLogo
  },
  {
    quote: "Jason managed a great balance between understanding and solutioning for user stories and business need, while also sharing realistic feedback on where we could find common ground and produce results while remaining true to overall corp strategy. He is very professional and courteous.",
    author: "Jeff, VP Operations",
    company: uberFreight
  },
  {
    quote: "Jason is an excellent design partner. He is creative, flexible, and dependable. Jason consistently approached tasks with enthusiasm and efficiency and is highly organized, often going the extra mile to ensure that projects were completed on time and to the highest standard. In addition to his strong work ethic and positive attitude, Jason is a proactive problem-solver who is not afraid to come up with creative solutions to complex issues. He is also skilled at bringing together various stakeholders and effectively driving projects to completion, which was critical for our projects' success.",
    author: "Ling, Staff Product Designer",
    company: uberLogo
  },
  {
    quote: "Jason picked things up incredibly quickly. Jason has done a great job of getting a diverse set of opinions up-to-speed and onboard with his plans and top problem statements from the TMS. He's built trust throughout the org which set us up for success. I've consistently been impressed is Jason's understanding and command of the engineering architecture. Jason can quickly navigate complex scoping conversations which enables the team to build efficiently and sustainably.",
    author: "Mike, Manager of Product Operations",
    company: uberLogo
  },
  {
    quote: "Jason is a great thought partner to have. With so many decisions (both big and small) we had to make to move our project forward, I'm grateful that Jason was open to having those discussions with me and valued my perspective. I also really appreciated Jason's investigations into the existing data that we had on hand to help us understand the problem better.",
    author: "Gabi, Staff Product Designer",
    company: uberLogo
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [ref, { width }] = useMeasure();

  const props = useSpring({
    from: { transform: 'translate3d(0,0,0)' },
    to: { transform: `translate3d(${-index * width}px,0,0)` },
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const nextTestimonial = () => setIndex((state) => (state + 1) % testimonials.length);
  const prevTestimonial = () => setIndex((state) => (state - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-carousel" ref={ref}>
        <animated.div style={{ display: 'flex', ...props }}>
          {testimonials.map((testimonial, i) => (
            <div key={i} style={{ width: `${width}px`, flexShrink: 0 }} className="testimonial-slide">
              <blockquote>"{testimonial.quote}"</blockquote>
              <div className="attribution">
<p className="author">- {testimonial.author}</p>
              <img src={testimonial.company} alt={testimonial.author} className="logo-testimonials" />
              </div>
              
            </div>
          ))}
        </animated.div>
        <button className="carousel-control prev" onClick={prevTestimonial}>
          <ChevronLeft size={24} />
        </button>
        <button className="carousel-control next" onClick={nextTestimonial}>
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="carousel-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;