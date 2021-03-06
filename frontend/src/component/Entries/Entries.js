import React, { Component } from "react";
import { CloseOutlined } from '@ant-design/icons';

import Entry from '../Entry/Entry';
import DisplayFilter from '../Filter/DisplayFilter';
import axios from 'axios';

import './Entries.css';

class Entries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchlistEntries: [],
      isLoading: true,
      isError: false,
    };
  }

  componentDidMount() {
    this.loadEntries();
  }

  loadEntries() {
    async function fetchEntries() {
      const response = await axios({
        url: process.env.REACT_APP_API_URL + "watchlist",
        method: "GET",
      });
      if ((response.status !== 200) & (response.status !== 201)) {
        throw new Error("Error!");
      }
      const entries = await response.data;
      return entries;
    }
    // fetch Entries
    fetchEntries().then((resData) => {
      const entries = resData;
      this.setState({ watchlistEntries: entries });
      this.setState({ isLoading: false });
    }
    ).catch(error => {
      this.setState({ isError: true, isLoading: false });
      console.log(error.message);
    });
  };

  render() {

    const entries = this.state.watchlistEntries.map(entry => {

      const belongsToFilter = this.props.filters.every((val) => entry.tags.includes(val));

      if (belongsToFilter) {
        return <Entry
          key={entry.id}
          entry={entry}
          token={this.props.token}
        />
      } else {
        return null
      }

    })

    const entriesNotNull = entries.filter(function (e) {
      return e != null;
    });

    return (
      <div style={{ margin: 10, width: "100%" }}>
        { this.state.isLoading ?

          <div className="Entries__spinner">
            <div>
              <img src="https://avatars0.githubusercontent.com/u/12551446" className="loader" alt="Loading" />
              <br />
              <div style={{ fontSize: 18, marginTop: 10, color: "white" }}>Loading ... </div>
            </div>
          </div>
          :
          this.state.isError ?
            <div className="Entries__spinner">
              <div>
                <CloseOutlined className="error__icon" />
                <img src="https://avatars0.githubusercontent.com/u/12551446" className="error" alt="Error" />
                <br />
                <div style={{ fontSize: 18, marginTop: 10, color: "white" }}>Error connecting to the backend! </div>
              </div>
            </div>
            :

            <div>
              <div className='Entries__Filter'>
                <DisplayFilter results={entriesNotNull.length} filters={this.props.filters} setFilters={this.props.setFilters} />
              </div>
              <div className='Entries__Main'>
                {entries}
              </div>
            </div>
        }
      </div>
    );
  }
}

export default Entries;
