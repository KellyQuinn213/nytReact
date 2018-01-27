import React from "react";
import PropTypes from 'prop-types';
import { Col, Row, Container } from "../../components/Grid";
import "./Results.css";

class Results extends React.Component {

  render() {
    const { results } = this.props

    return (
      <Container>
        <Row>
          <Col size="lg-12">
            <ul className="list-group search-results">
              {results.map(result =>
                <li key={results.id} className="list-group-item">
                  <h4>Title: {result.headline.main}</h4>
                  <h5>Date: {result.pub_date}</h5>
                  <h5>Url: {result.web_url}</h5>
                </li>
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

Results.props = {
  results: PropTypes.array,
  title: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string
}

export default Results;