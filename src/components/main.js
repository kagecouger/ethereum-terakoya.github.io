import React from "react";
import { useIntl } from "react-intl";
import Img from "gatsby-image";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Activity from "../components/activity";
import AboutETHTerakoya from "./aboutETHTerakoya";

const Hero = ({ logo }) => {
  return (
    <div className="main-header container-fluid">
      <div className="header-contents">
        <div className="title-area">
          <Col sm={4} className="upper">
            <div>
              <Img fixed={logo.childImageSharp.fixed} className="ml-3" />
            </div>
            <div className="title display-6 text-white">ETHTerakoya</div>
          </Col>
        </div>
        <div>
          <Col sm={4}>
            {/*slogan*/}
            <div className="slogan text-right text-white">
              <span className="description">技術・ビジネス・法律の観点から課題を協議し</span>
              <span className="description">企業のブロックチェーン活用における</span>
              <span className="description">標準化策定を目指すコミュニティ</span>
              {/*{intl.formatMessage({ id: "slogan" })}*/}
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
};

const ContactUs = ({ title }) => {
  return (
    <Row className="py-2 mb-5 contact-us">
      <Col>
        <div className="text-center">
          <a
            href="https://forms.gle/3ptEzDnWtrzqShMz8"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="info">{title}</Button>
          </a>
        </div>
      </Col>
    </Row>
  );
};

const Main = ({ data }) => {
  const intl = useIntl();
  return (
    <React.Fragment>
      <Hero logo={data.logo} />
      <Container>
        <Row>
          <Col className="py-5">
            <h3 className="text-center mb-5">
              <span role="img" aria-label="hand">
                👉
              </span>
              {intl.formatMessage({ id: "slogan" })}
            </h3>
          </Col>
        </Row>

        {/* ETHTerakoya（イーサテラコヤ）とは */}
        <AboutETHTerakoya />

        {/* activity */}
        <Activity />

        {/* お問い合わせ */}
        <ContactUs title={intl.formatMessage({ id: "contact" })} />
      </Container>

      {/* 参加対象 */}
      <Container fluid className="bg-beige">
        <Row className="justify-content-md-center py-5 bg-beige">
          <Col className="col-12 col-sm-6">
            <h4 className="text-center mb-5">
              {intl.formatMessage({ id: "target" })}
            </h4>
            <ul>
              <li>{intl.formatMessage({ id: "target1" })}</li>
              <li>{intl.formatMessage({ id: "target2" })}</li>
              <li>{intl.formatMessage({ id: "target3" })}</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container>
        {/* 主催 */}
        <Row className="py-5">
          <Col>
            <h4 className="text-center mb-5">
              {intl.formatMessage({ id: "organize" })}
            </h4>
            <div className="text-center">
              <Img fixed={data.couger.childImageSharp.fixed} />
            </div>
          </Col>
        </Row>

        {/* 後援 */}
        <Row className="py-5">
          <Col>
            <h4 className="text-center mb-5">
              {intl.formatMessage({ id: "support" })}
            </h4>
            <div className="text-center">
              <Img fixed={data.ef.childImageSharp.fixed} />
            </div>
          </Col>
        </Row>

        {/* お問い合わせ */}
        <ContactUs title={intl.formatMessage({ id: "contact" })} />
      </Container>
    </React.Fragment>
  );
};

export default Main;
