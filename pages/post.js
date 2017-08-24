import { Component } from 'react'
import Link from 'next/link';
// Blogger API KEY
const API_KEY = '';

export default class PostPage extends Component {
  static async getInitialProps({ query : { id } }) {
    const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/4789269094064278868/posts/${id}?key=${API_KEY}`);
    const json = await res.json();
    return { json };
  }

  render() {
    console.log(this.props);
    const { json } = this.props;
    const { content } = json;
    return (
      <div>
        <h1>
          Post: {this.props.id}
        </h1>
        <div dangerouslySetInnerHTML={{__html: content }} />
        {/*
          show /blog in the browser
          but use pages/index.js file internally
        */}
        <Link href="/" as="/blog">
          <a>Go back to the list of posts</a>
        </Link>
        <style jsx>{`
          h1 {
            color: red;
          }
        `}</style>
      </div>
    )
  }
}
