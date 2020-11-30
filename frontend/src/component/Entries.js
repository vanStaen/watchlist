import React, { Component } from "react";
import { Col, Row, Spin, Card } from "antd";
import Entry from './Entry/Entry'
import axios from 'axios';

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
        throw new Error("Unauthenticated!");
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
      return <Entry entry={entry}/>
    })
    return (
      <div style={{margin: 30}}>
        { this.state.isLoading ?
          <div className="entries__spinner">
            <Spin size="large" />
          </div>
          :
          (<Row justify={"space-around"}>
            {entries}
          </Row>)
        }

      </div>
    );
  }
}

export default Entries;
