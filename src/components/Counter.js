import React, { useState } from "react";

import { Navbar, Container, Row, Col } from "react-bootstrap";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center h-100">
      <Row>
        <Col>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Count</h1>
            <h3 className="count">{count}</h3>
            <button onClick={increment} className="button">
              Increment
            </button>
          </div>
          <Navbar
            expand="lg"
            bg="dark"
            variant="dark"
            fixed="bottom"
            className="d-flex justify-content-center align-items-center text-light"
          >
            Built with ❤️{" "}
            <a
              href="https://www.github.com/com/primetimetran"
              style={{ marginLeft: 5 }}
            >
              PrimeTimeTran
            </a>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
