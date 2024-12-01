import React from "react";
import BigHeader from "../components/BigHeader";
import profile from "../assets/img/profile.png";
import MyHelmet from "../components/MyHelmet";

const About = () => {
  return (
    <>
      <MyHelmet
        title="John Doe"
        desc="As a passionate and experienced UI designer, I am dedicated to
              creating intuitive and engaging user experiences that meet the
              needs of my clients and their users."
        img={profile}
      />
      <BigHeader>John Doe</BigHeader>
      <div className="mt-5 p-5 lg:p-0">
        <img className="w-full object-cover" src={profile} alt="" />
        <main className="mb-20">
          <section>
            <h2 className="text-xl font-bold my-5">About Me</h2>
            <p>
              As a passionate and experienced UI designer, I am dedicated to
              creating intuitive and engaging user experiences that meet the
              needs of my clients and their users. I have a strong understanding
              of design principles and a proficiency in design tools, and I am
              comfortable working with cross-functional teams to bring projects
              to fruition. I am confident in my ability to create designs that
              are both visually appealing and functional, and I am always
              looking for new challenges and opportunities to grow as a design.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold my-5">Skills:</h2>
            <ul className="list-disc list-outside px-5">
              <li>
                Extensive experience in UI design, with a strong portfolio of
                completed project
              </li>
              <li>
                Proficiency in design tools such as Adobe Creative Suite and
                Sketch
              </li>
              <li>
                Excellent visual design skills, with a strong understanding of
                layout, color theory, and typograph
              </li>
              <li>
                Ability to create wireframes and prototypes to communicate
                design concept
              </li>
              <li>
                Strong communication and collaboration skills, with the ability
                to work effectively with cross-functional team
              </li>
              <li>
                Experience conducting user research and gathering insights to
                inform design decision
              </li>
              <li>Proficiency in HTML, CSS, and JavaScript</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold my-5">Experience:</h2>
            <ul className="list-disc list-outside px-5">
              <li>
                5 years of experience as a UI designer, working on a variety of
                projects for clients in the tech and retail industries
              </li>
              <li>
                Led the design of a successful e-commerce website, resulting in
                a 25% increase in online sale
              </li>
              <li>
                Created wireframes and prototypes for a mobile banking app,
                leading to a 20% increase in app usage
              </li>
              <li>
                Conducted user research and usability testing to inform the
                redesign of a healthcare provider&apos;s website, resulting in a
                15% increase in website traffic
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold my-5">Education:</h2>
            <ul className="list-disc list-outside px-5">
              <li>Bachelor&apos;s degree in Graphic Design</li>
              <li>Certified User Experience Designer (CUED)</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
