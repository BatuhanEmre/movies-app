import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <br />
        <div className="form-row mb-5">
          <div className="col-10">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Seach a movie"
            />
          </div>
          <div className="col-11">
            <Link
              to="/add"
              type="button"
              className="btn btn-md btn-danger"
              style={{
                float: "right",
                margin: "-35px",
                WebkitUserSelect: "none",
              }}
            >
              Add Movie
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
