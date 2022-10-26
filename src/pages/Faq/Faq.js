import React from "react";
import './Faq.css'

const Faq = () => {
  return (
    <div className="container">
      <div className="question-container">
        <p className="fw-bold">What is web devlopment?</p>
        <p>
          Web development is the work involved in developing a website for the
          Internet (World Wide Web) or an intranet (a private network) Web
          development can range from developing a simple single static page of
          plain text to complex web applications, electronic businesses, and
          social network services. A more comprehensive list of tasks to which
          Web development commonly refers, may include Web engineering, Web
          design, Web content development, client liaison,
          client-side/server-side scripting, Web server and network security
          configuration, and e-commerce development. Among Web professionals,
          "Web development" usually refers to the main non-design aspects of
          building Web sites: writing markup and coding. Web development may use
          content management systems (CMS) to make content changes easier and
          available with basic technical skills. For larger organizations and
          businesses, Web development teams can consist of hundreds of people
          (Web developers) and follow standard methods like Agile methodologies
          while developing Web sites. Smaller organizations may only require a
          single permanent or contracting developer, or secondary assignment to
          related job positions such as a graphic designer or information
          systems technician. Web development may be a collaborative effort
          between departments rather than the domain of a designated department.
          There are three kinds of Web developer specialization: front-end
          developer, back-end developer, and full-stack developer. Front-end
          developers are responsible for behavior and visuals that run in the
          user browser, while back-end developers deal with the servers. Since
          the commercialization of the Web with Tim Berners-Lee developing the
          World Wide Web at CERN, the industry has boomed and has become one of
          the most used technologies ever
        </p>
      </div>

      <div className="question-container ">
        <p className="fw-bold">what is mren stack devlopment?</p>
        <p>
          MERN stack is a collection of technologies that enables faster
          application development. It is used by developers worldwide. The main
          purpose of using MERN stack is to develop apps using JavaScript only.
          This is because the four technologies that make up the technology
          stack are all JS-based. Thus, if one knows JavaScript (and JSON), the
          backend, frontend, and database can be operated easily.{" "}
        </p>
        <p>
          MERN Stack Full Form MERN Stack is a compilation of four different
          technologies that work together to develop dynamic web apps and
          websites. It is a contraction for four different technologies as
          mentioned below: M - MongoDB E - ExpressJS R - ReactJS N - NodeJS
        </p>
      </div>
      <div className="question-container">
        <p className="fw-bold">What is react?</p>
        <p>
          React is a JavaScript-based UI development library. Facebook and an
          open-source developer community run it. Although React is a library
          rather than a language, it is widely used in web development. The
          library first appeared in May 2013 and is now one of the most commonly
          used frontend libraries for web development. React offers various
          extensions for entire application architectural support, such as Flux
          and React Native, beyond mere UI.?
        </p>
      </div>
    </div>
  );
};

export default Faq;
