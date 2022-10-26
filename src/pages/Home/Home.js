import { Col, Row } from "react-bootstrap";
import './Home.css'
import Img from '../../assets/web.jpg'
import Img2 from '../../assets/Faq.jpg'
import Img3 from '../../assets/Blog.jpg'
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <div className="mt-3">
        <Row className="home container mx-auto">
          <Col lg="2"></Col>
          <Col lg="8">
            <Row>
              <Col lg="6">
              <p className="fs-2 fw-bold text-white mt-5 m-0">Welcome to Easy learn</p>
              <p className="text-white fs-3 m-0">Be skilled,Build career!</p>
              <p>Awesome course in low price</p>
              <button className="my-btn"><Link className="link" to='/courses'>See Courses</Link></button>
              </Col>
              <Col lg="6">
                <img className="image img-fluid" src={Img} alt="" />
              </Col>
            </Row>
          </Col>
          <Col lg="2">
          </Col>
        </Row>

        <Row className="home container mx-auto mt-3">
          <Col lg="2"></Col>
          <Col lg="8">
            <Row>
              <Col lg="6">
              <p className="fs-2 fw-bold text-white mt-5 m-0">Want to know something new?</p>
              <p>FAQ section are recommended</p>
              <button className="my-btn"><Link className="link" to='/faq'>See FAQ</Link></button>
              </Col>
              <Col lg="6">
                <img className="image img-fluid" src={Img2} alt="" />
              </Col>
            </Row>
          </Col>
          <Col lg="2">
          </Col>
        </Row>

        <Row className="home container mx-auto mt-3">
          <Col lg="2"></Col>
          <Col lg="8">
            <Row>
              <Col lg="6">
              <p className="fs-2 fw-bold text-white mt-5 m-0">We post blog regularly</p>
              <p>Read blog for fun</p>
              <button className="my-btn"><Link className="link" to='/blogs'>Read Blogs</Link></button>
              </Col>
              <Col lg="6">
                <img className="image img-fluid" src={Img3} alt="" />
              </Col>
            </Row>
          </Col>
          <Col lg="2">
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
