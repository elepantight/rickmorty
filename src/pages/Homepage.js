import React, { Component } from "react";

import Card from "./../components/rm-card";
import axios from "axios";

import { RICKMORTY_API } from "./../constants/constants";

export default class Homepage extends Component {
  state = {
    rmData: undefined,
    filteredResults: [],
    isResultsFiltered: false,
    searchPhrase: ""
  };
  componentDidMount() {
    axios.get(RICKMORTY_API).then(result => {
      this.setState({
        rmData: result.data.results
      });

    });
  }
  handleFiltering = input => {
    const { rmData } = this.state;
    let filteredCards = rmData.filter(value => {
      return value.title
        .toLowerCase()
        .includes(input.target.value.toLowerCase());
    });
    this.setState({
      filteredResults: filteredCards,
      searchPhrase: input.target.value,
      isResultsFiltered: true
    });
  };
  render() {
    const {
      rmData,
      filteredResults,
      isResultsFiltered,
      searchPhrase
    } = this.state;
    console.log(rmData);
    return (
      <>
        <div className="row card-row">
          <div className="col-sm-12 card-column">
              <form>
                <p className="search-phrase">Search</p>
                <input
                  type="text"
                  name="username"
                  onChange={this.handleFiltering}
                  className="card-control"
                />
                <br />
                <br />
              </form>
            </div>
          </div>

        <div className="row card-row">
          <div className="col-sm-12 card-column">
          <div className="card">
            {isResultsFiltered ? (
              <div>
                <h1>Filtered Results for {searchPhrase}</h1>
                {filteredResults.length > 0 ? (
                  filteredResults.map((value, index) => {
                    return (
                      <Card
                        key={index}
                        name={value.name}
                        species={value.species}
                        gender={value.gender}
                        created={value.created}
                        image={value.image}
                        location={value.location.name}
                      />
                    );
                  })
                ) : (
                  <div>No results</div>
                )}
              </div>
            ) : (
              <>
                {rmData !== undefined ? (
                  rmData.map((value, index) => {
                    return (
                      <Card
                        key={index}
                        name={value.name}
                        species={value.species}
                        gender={value.gender}
                        created={value.created}
                        image={value.image}
                      />
                    );
                  })
                ) : (
                  <div>RIP RICK AND MORTY</div>
                )}
              </>
            )}
          </div>
        </div>
        </div>
      </>
    );
  }
}
