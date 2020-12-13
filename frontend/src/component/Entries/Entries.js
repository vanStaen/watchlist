import React, { Component } from "react";
import { CloseOutlined } from '@ant-design/icons';

import Entry from '../Entry/Entry'
import axios from 'axios';

import './Entries.css';

class Entries extends Component {

  state = {
    watchlistEntries: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount() {
    this.loadEntries();
  }

  loadEntries() {
    async function fetchEntries() {
      const response = await axios({
        url: process.env.REACT_APP_API_URL,
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
      const youtubeVideoID = "https://img.youtube.com/vi/" + entry.link.split('&')[0].split('=')[1] + "/0.jpg"
      return <Entry key={entry.id} entry={entry} />
    })
    return (
      <div style={{ margin: 30 }}>
        { this.state.isLoading ?
          <div className="entries__spinner">
            <img src="https://avatars0.githubusercontent.com/u/12551446" className="loader" alt="Loading" />
            <br />
            <div style={{ fontSize: 18, marginTop: 10 }}>Loading ... </div>
          </div>
          :
          this.state.isError ?
            <div className="entries__spinner">
              <CloseOutlined className="error__icon" />
              <img src="https://avatars0.githubusercontent.com/u/12551446" className="error" alt="Error" />
              <br />
              <div style={{ fontSize: 18, marginTop: 10 }}>Error connecting to the backend! </div>
            </div>
            :
            <div className='Entries__Main'>
              {entries}
            </div>
        }
      </div>
    );
  }
}

export default Entries;
