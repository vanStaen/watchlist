import React, { Component } from "react";
import { Col, Row, Spin, Card } from "antd";
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
      return (
         <Card title={entry.title} 
         hoverable
         bordered
         style={{ width: 500, marginBottom: 30 }}
        >
          {/*<p>Link: {entry.link}</p>        
          <p>Detail: {entry.detail}</p>        
          <p>Added : {entry.added}</p>   
          <p>Tags : {entry.tags}</p>*/}
          <a href={entry.link} target="_blank" title={entry.detail}>
            <img src={youtubeVideoID} alt="Italian Trulli" width="440"/>
          </a>
        </Card>);
    })
    return (
      <div>
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
