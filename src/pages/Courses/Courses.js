import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CoursesLeftSide from '../../Component/CoursesLeftSide/CoursesLeftSide';
import CoursesRightSide from '../../Component/CoursesRightSide/CoursesRightSide';

const Courses = () => {
  return (
   <Container>
      <Row>
           <Col lg='4'>
              <CoursesLeftSide/>
           </Col>
           <Col lg='8'>
              <CoursesRightSide/>
           </Col>
      </Row>
   </Container>
  );
};

export default Courses;