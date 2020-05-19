import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import { SectionHeading } from "./Headings";

export default function AboutSection() {
  return (
    <Section as="section" className="d-flex align-items-center flex-column">
      <Row className="d-flex align-items-stretch">
        <GridColumn className="text-light">
          <SectionHeading>About</SectionHeading>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime,
          ducimus odit eaque dolorum eligendi molestias asperiores quam hic
          alias dignissimos culpa ad nemo modi a deserunt corrupti debitis odio?
        </GridColumn>
      </Row>
      <Row className="d-flex align-items-stretch">
        <GridColumn style={{ background: "#D8E3EA" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum
          iure error minus rerum! Consectetur iste cum voluptatibus blanditiis
          voluptatem quam iusto sapiente, ratione, maiores optio velit! Dicta
          tempore sint sed voluptates maiores. Dolorem harum aliquid dignissimos
          reiciendis assumenda aperiam quis autem eligendi rerum totam
          inventore, deleniti cumque illum libero!
        </GridColumn>
        <GridColumn className="text-light">
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
