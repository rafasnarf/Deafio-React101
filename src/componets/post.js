import React, { Component } from 'react';

import './post.css'

function Post({ id, name, avatar, content, comments }) {
  return (
    <li id='post'>
      <img src={avatar} width='80px' alt={name} />
      <strong>{name}</strong>
      <p>{content}</p>
      {comments.map(e => (
        <div id='comment'>
          <img src={e.author.avatar} width='80px' alt={e.author.name} />
          <strong>{e.author.name} </strong>
          <p>{e.content}</p>
        </div>
      ))}
    </li>
  )
}

export default Post