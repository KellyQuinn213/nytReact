import React from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Search from "../../components/Search";
import Results from "../../components/Results";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: [],
      error: ""
    };
  }

  // When the component mounts, default pull articles about Trump
  componentDidMount() {
    this.defineQuery("Trump")
  }

  defineQuery = query => {
    API.search(query)
      .then(res => {
        console.log(res)
        this.setState({ results: res.data.response.docs })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.defineQuery(this.state.search)
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="lg-12">
            <Jumbotron>
              <h1 className="text-center">New York Times Searcher</h1>
            </Jumbotron>

            <Search
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
            <Results results={this.state.results} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;