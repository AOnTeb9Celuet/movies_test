import React, { Component } from "react";
import {
  Col,
  Row,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMoviesInfo, changePageNumber } from "../../../actions/Actions";

import "./Posters.css";

class Poster extends Component {
  componentDidMount() {
    this.props.getMoviesInfoAction(this.props.page);
  }

  onPageClick = e => {
    if (e.currentTarget.innerText === "First") {
      this.props.changePageNumberAction(1);
      this.props.getMoviesInfoAction(1);
    } else if (e.currentTarget.innerText === "Prev") {
      this.props.changePageNumberAction(this.props.page - 1);
      this.props.getMoviesInfoAction(this.props.page - 1);
    } else if (e.currentTarget.innerText === "Next") {
      this.props.changePageNumberAction(this.props.page + 1);
      this.props.getMoviesInfoAction(this.props.page + 1);
    } else if (e.currentTarget.innerText === "Last") {
      this.props.changePageNumberAction(53);
      this.props.getMoviesInfoAction(53);
    } else {
      const pageNum = +e.currentTarget.innerText;
      this.props.changePageNumberAction(pageNum);
      this.props.getMoviesInfoAction(pageNum);
    }
  };

  render() {
    const { data } = this.props.info;
    return (
      <Container fluid className="main-page">
        <Row>
          <Col>
            <p className="main-text-p">Latest Releases</p>
          </Col>
        </Row>
        <div className="d-flex justify-content-between">
          <Container fluid>
            <Row className="justify-content-center poster-row">
              {data &&
                data.results.map(p => {
                  return (
                    <Col
                      key={p.id}
                      className="col-6 col-md-3 col-xl-2 poster-col"
                    >
                      <Link to={`/${p.id}`}>
                        <img
                          src={`http://image.tmdb.org/t/p/w342${p.poster_path}`}
                          alt="poster"
                          className="poster img-fluid"
                        />
                      </Link>
                    </Col>
                  );
                })}
            </Row>
          </Container>
        </div>
        <Pagination
          aria-label="Page navigation"
          className="d-flex justify-content-center pagination-main"
        >
          <PaginationItem>
            <PaginationLink
              onClick={this.onPageClick}
              className="pagination-pages pagination-pages-edges"
            >
              First
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={this.onPageClick}
              className="pagination-pages"
            >
              Prev
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={this.onPageClick}
              className="pagination-pages"
            >
              {this.props.page}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={this.onPageClick}
              className="pagination-pages"
            >
              {this.props.page + 1}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={this.onPageClick}
              className="pagination-pages"
            >
              {this.props.page + 2}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="pagination-pages">
              ...
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={this.onPageClick}
              className="pagination-pages"
            >
              Next
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={this.onPageClick}
              className="pagination-pages pagination-pages-edges"
            >
              Last
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </Container>
    );
  }
}

const mapStoreToProps = store => {
  return {
    info: store.info,
    isFetching: store.isFetching,
    error: store.error,
    page: store.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMoviesInfoAction: page => dispatch(getMoviesInfo(page)),
    changePageNumberAction: page => dispatch(changePageNumber(page))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Poster);
