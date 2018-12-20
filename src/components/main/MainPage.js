import React from "react";
import { Container } from "reactstrap";

import { LatestReleases } from "./main-text/LatestReleases";
import Poster from "./posters/Poster";
import { Pages } from "./pages/Pagination";

import "./MainPage.css";

export const MainPage = () => {
  return (
    <Container fluid className="main-page">
      <LatestReleases />
      <Poster />
      <Pages />
    </Container>
  );
};
