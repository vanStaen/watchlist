import React from "react";
import { Image, Card } from "antd";
import { Spin } from 'antd';

import "./Entry.css";

const { Meta } = Card;

const Entry = (props) => {

  const spinnerFormated = (
    <div className="card__spinner">
      <Spin size="middle" />
    </div>
  )

  const youtubeVideoID = "https://img.youtube.com/vi/" + props.entry.link.split('&')[0].split('=')[1] + "/0.jpg"

  const width = 350;

  return (
    <Card
      hoverable
      bordered
      style={{ width: width, height: width * 0.75 + 65, marginBottom: 30}}
      cover={
        <Image
          alt={props.title}
          src={youtubeVideoID}
          placeholder={spinnerFormated}
          width={width}
          height={width * 0.75}
        />}
    >
      <Meta title={props.entry.title} />
    </Card>
  );
};

export default Entry;

/*
<p>Link: {entry.link}</p>        
<p>Detail: {entry.detail}</p>        
<p>Added : {entry.added}</p>   
<p>Tags : {entry.tags}</p>
*/