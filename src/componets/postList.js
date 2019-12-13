import React, { Component } from 'react';

import Post from './post';

import './postList.css'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Rafael Andrade Terzi',
          avatar: 'https://avatars2.githubusercontent.com/u/36970239?v=4'
        },
        date: '04 Jun 2019',
        content: 'Estou afim de comer pastel, alguem me indica um bem gostoso?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Carolina Nobre',
              avatar: 'https://avatars0.githubusercontent.com/u/54543543?v=4'
            },
            content: 'Vá no pastel sem vento em Itapecerica da Serra'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Carolina Nobre',
          avatar: 'https://avatars0.githubusercontent.com/u/54543543?v=4'
        },
        date: "05 jul 2019",
        content: 'Alguém pode me indicar um bom livro para ler?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Rafael Andrade Terzi',
              avatar: 'https://avatars2.githubusercontent.com/u/36970239?v=4'
            },
            content: "Leia Deuses Americanos do Neil Gaiman"
          },
          {
            id: 2,
            author: {
              name: 'Carolina Nobre',
              avatar: 'https://avatars0.githubusercontent.com/u/54543543?v=4'
            },
            content: 'Esse eu já li, quero um outro tão bom quanto!'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <ul>
        {this.state.posts.map(post => (
          < Post
            key={post.id}
            id={post.id}
            name={post.author.name}
            avatar={post.author.avatar}
            content={post.content}
            comments={post.comments}
          />
        ))}
      </ul>
    )
  }
}

export default PostList