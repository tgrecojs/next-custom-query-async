import Link from 'next/link'
import 'isomorphic-fetch';
const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Blogger API KEY
const API_KEY = '';

const Page = ({posts}) =>
  <div>
    {posts.map(x =>
      <div key={x.id} className="post">
        {/*
          show the /blog/:x.id url in the browser
          but use the pages/post.js file with the x.id as a query internally
        */}
        <Link href={`/post?x.id=${x.id}`} as={`/blog/${x.id}`}>
          <a>
            Go to post {x.id}
          </a>
        </Link>
      </div>
    )}
    <style jsx>{`
      .post {
        border: 1px solx.id black;
        padding: 1em 2em;
        margin: .5em 0;
      }
    `}</style>
  </div>


Page.getInitialProps = async ({ req }) => {
    const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/4789269094064278868/posts?key=${API_KEY}`)
    const json = await res.json()
    return {posts: json.items};
  }

export default Page;
  