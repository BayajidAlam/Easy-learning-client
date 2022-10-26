import React from "react";
import './Blog.css'

const Blog = () => {
  return (
    <div className="container">
      <div className="question">
        <p>1.what is cors?</p>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </div>

      <div div className="question">
        <p>2.Why are you using firebase?</p>
        <p>
          Firebase helps you develop high-quality apps, grow your user base, and
          earn more money. Each feature works independently, and they work even
          better together.
        </p>
        <br />
        <p>What other options do you have to implement authentication?</p>
        <p>I hava many option is given below:</p>
        <ul>
          <li>MongoDB</li>
          <li>Oracle Database</li>
          <li>Amazon Redshift</li>
          <li>DataStax Enterprise</li>
          <li>Redis Enterprise Cloud</li>
          <li>Cloudera Enterprise Data Hub</li>
          <li>Db2</li>
          <li>Couchbase Server</li>
        </ul>
      </div>

      <div div className="question">
        <p>3 How does the private route work?</p>
        <p>
          Private Routes in React Router (also called Protected Routes) require
          a user being authorized to visit a route (read: page). So if a user is
          not authorized for a specific page, they cannot access it. The most
          common example is authentication in a React application where a user
          can only access the protected pages when they are authorized (which
          means in this case being authenticated). Authorization goes beyond
          authentication though. For example, a user can also have roles and
          permissions which give a user access to specific areas of the
          application.
        </p>
      </div>
      <div className="question">
      <p>3.What is Node? How does Node work?</p>
      <p>
        Node.js is an open-source backend javascript runtime environment. It is
        a used as backend service where javascript works on the server-side of
        the application. This way javascript is used on both frontend and
        backend. Node.js runs on chrome v8 engine which converts javascript code
        into machine code, it is highly scalable, lightweight, fast, and
        data-intensive. Working of Node.js: Node.js accepts the request from the
        clients and sends the response, while working with the request node.js
        handles them with a single thread. To operate I/O operations or requests
        node.js use the concept of threads. Thread is a sequence of instructions
        that the server needs to perform. It runs parallel on the server to
        provide the information to multiple clients. Node.js is an event loop
        single-threaded language. It can handle concurrent requests with a
        single thread without blocking it for one request.
      </p>
      </div>
    </div>
  );
};

export default Blog;
