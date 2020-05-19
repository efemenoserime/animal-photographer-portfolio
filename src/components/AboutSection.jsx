import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import { SectionHeading, SubHeading } from "./Headings";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutSection() {
  const result = useStaticQuery(graphql`
    query ProfileImageQuery {
      imageSharp(
        fluid: { originalName: { eq: "professional-photographer.jpg" } }
      ) {
        id
        fluid(quality: 90, maxWidth: 400) {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
        }
      }
    }
  `);

  // Destructure result object
  const { fluid } = result.imageSharp;

  return (
    <Section as="section" className="d-flex align-items-center flex-column">
      <Row className="d-flex align-items-stretch">
        <GridColumn className="text-light">
          <SectionHeading>About</SectionHeading>
          <SubHeading className="mb-4">Kim Wagenhall</SubHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            iste, doloremque minus vero aspernatur adipisci repellat culpa natus
            molestiae reprehenderit enim quaerat voluptatum voluptatem quisquam
            earum ea harum modi velit? Aliquid aperiam eaque repellendus unde,
            provident, suscipit dolore vero id neque, consequatur accusantium
            rem hic? Optio, placeat. Ut, odio sint.
          </p>
        </GridColumn>
        <GridColumn style={{ background: "#D8E3EA" }}>
          <Img fluid={fluid} objectFit="contain" className="h-100" />
        </GridColumn>
      </Row>
      <Row className="d-flex align-items-stretch">
        <GridColumn style={{ background: "#D8E3EA" }}>
          <div className="d-flex justify-content-between">
            <div>
              <FontAwesomeIcon
                className="mb-4"
                icon={["fa", "phone"]}
                size="3x"
              />
              <h5>Phone</h5>
              {" - "}
            </div>
            <div>
              <FontAwesomeIcon className="mb-4" icon={["fa", "at"]} size="3x" />
              <h5>Email</h5>
              {" - "}
            </div>
            <div>
              <FontAwesomeIcon
                className="mb-4"
                icon={["fa", "location-arrow"]}
                size="3x"
              />
              <h5>Location</h5>
              {" - "}
            </div>
          </div>
        </GridColumn>
        <GridColumn
          className="text-light"
          style={{ backgroundColor: "#2e384d" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          itaque laborum suscipit, quidem architecto facere. Esse doloribus, qui
          dignissimos obcaecati provident, voluptate similique ex eligendi
          veniam, suscipit aspernatur ut eius.
        </GridColumn>
      </Row>
    </Section>
  );
}

const Section = styled(Container)`
  background-color: #222833;
`;

const GridColumn = styled(Col)`
  padding: 5% 10% 5% 10%;
`;
