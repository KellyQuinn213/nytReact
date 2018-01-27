import React from "react";
import PropTypes from 'prop-types';
import { Col, Row, Container } from "../../components/Grid";
import "./Search.css";

class Search extends React.Component {

  render() {
    const { handleInputChange, handleFormSubmit, value } = this.props

    return (
      <Container>
        <Row>
          <Col size="lg-12">
            <form>
              <div className="form-group">
                <label htmlFor="search">Search Articles:</label>
                <input
                  onChange={handleInputChange}
                  value={value}
                  name="search"
                  type="text"
                  className="form-control"
                  placeholder="Enter a keyword..."
                  id="search"
                />
                <br />
                <label htmlFor="recNumber">Number of Records:</label>
                <select className="form-control" id="num-records-select" value="10">
                  <option value="1">1</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
                <br />
                <label htmlFor="startYear">Start Year:</label>
                <input
                  onChange={handleInputChange}
                  value={value}
                  name="startYear"
                  type="text"
                  className="form-control"
                  placeholder="2008..."
                  id="startYear"
                />
                <br />
                <label htmlFor="endYear">End Year:</label>
                <input
                  onChange={handleInputChange}
                  value={value}
                  name="endYear"
                  type="text"
                  className="form-control"
                  placeholder="2018..."
                  id="endYear"
                />
                <br />
                <button onClick={handleFormSubmit} className="btn btn-info">
                  Search
            </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    )
  }
}

Search.propTypes = {
  handleInputChange: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  value: PropTypes.string
}

export default Search;
