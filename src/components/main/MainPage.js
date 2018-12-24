import React, { Component } from "react";
import { Container } from "reactstrap";


import { LatestReleases } from "./main-text/LatestReleases";
import Poster from "./posters/Poster";
import { Pages } from "./pages/Pagination";


import "./MainPage.css";

class MainPage extends Component {
  render() {

    return (
      <Container fluid className="main-page">
        <LatestReleases />
        <Poster />
        <Pages />
      </Container>
    );
  }
}


export default MainPage;
