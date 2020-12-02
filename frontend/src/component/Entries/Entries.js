import React, { Component } from "react";
import Entry from '../Entry/Entry'
import axios from 'axios';

import './Entries.css';

class Entries extends Component {

  state = {
    watchlistEntries: [],
    isLoading: true,
  }

  componentDidMount() {
    console.log('component did mount')
    this.loadEntries();
  }

  loadEntries() {
    async function fetchEntries() {
      const response = await axios({
        url: 'https://watchlist-cvs.herokuapp.com/watchlist',
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
      console.log(resData)
      const entries = resData;
      this.setState({ watchlistEntries: entries });
      this.setState({ isLoading: false });
    }
    ).catch(error => {
      console.log(error.message);
    });
  };


  render() {
    const entries = this.state.watchlistEntries.map(entry => {
      const youtubeVideoID = "https://img.youtube.com/vi/" + entry.link.split('&')[0].split('=')[1] + "/0.jpg"
      return <Entry entry={entry} />
    })
    return (
      <div style={{ margin: 30 }}>
        { this.state.isLoading ?
          <div className="entries__spinner">
            <img src="https://avatars0.githubusercontent.com/u/12551446" className="App-logo" alt="logo" />
            <br />
            <div style={{ fontSize: 18 }}>Loading ... </div>
          </div>
          :
          (<div className='Entries__Main'>
            {entries}
          </div>)
        }

      </div>
    );
  }
}

export default Entries;
