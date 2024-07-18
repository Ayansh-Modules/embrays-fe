import axios from "axios";
import { createContext, useContext, useState } from "react";
import baseAssets from "../assets/baseAssets"
const BlogsContext = createContext();
export const useBlogContext = () => {
  return useContext(BlogsContext);
};

function BlogContextProvider({ children }) {
  const [loading , setLoading]= useState(false)
  const [posts, setPosts] = useState([]);
  const HASHNODE_URL = "https://gql.hashnode.com";
  async function getBlogs() {
    setLoading(true)
    try {
      const response = await axios.post(HASHNODE_URL, {
        query,
        variables: { first: 12, after: "" },
      });
      const data = [];
      response.data.data.feed.edges.map((edge) => {
        let blogData = {};

        if (edge.node._id) {
          blogData["id"] = edge.node._id;
        }
        if (edge.node.coverImage && edge.node.coverImage.url) {

          blogData["coverImage"] = edge.node.coverImage.url;
        }
        else {
          blogData["coverImage"] = baseAssets.defaultCover;

        }

        if (edge.node.author.name) {
          blogData["userName"] = edge.node.author.name;
        }
        if (edge.node.author.photo) {
          blogData["userPhoto"] = edge.node.author.photo;
        }
        if (edge.node.dateAdded) {
          blogData["postDate"] = edge.node.dateAdded;
        }
        if (edge.node.title) {
          blogData["postTitle"] = edge.node.title;
        }
        if (edge.node.brief) {
          blogData["postBrief"] = edge.node.brief;
        }
        if (edge.node.url) {
          blogData["postUrl"] = edge.node.url;
        }
        data.push(blogData);
     
      });
      setLoading(false)
      setPosts(data);
      console.log(data);
      return data; //it will have all the blogs
    } catch (error) {
      console.log(error);
    }
    setLoading(false)

  }

  const query = `query Feed($first: Int!, $filter: FeedFilter, $after: String) {
   feed(first: $first, filter: $filter, after: $after) {
     edges {
       node {
         ... on Post {
           _id: id
           title
           coverImage {
             url
           }
           readTime: readTimeInMinutes
           brief
           subtitle
           views
           url
           dateAdded: publishedAt
           url
         }
         author {
           ... on User {
             _id: id
             name
             photo: profilePicture
             isPro
             username
           }
         }
       }
     }
     pageInfo {
       hasNextPage
       endCursor
       __typename
     }
   }
  }
  `;

  let value = {
    getBlogs,
    posts,
    loading,
  };

  return (
    <BlogsContext.Provider value={value}>{children}</BlogsContext.Provider>
  );
}

export default BlogContextProvider;
// Posts : [
//   {
//      coverImage : "",
//      postTitle :"",
//      userName :"",
//      postDate :"",
//      postTitle :"",
//      postBrief :"",
//      postUrl :""
//  } ]
//-----------------------------------------------------------------------------

// {
//   "node": {
//     "_id": "6694e7695dcfe4eff3cf16ea",
//     "title": "Mastering Laravel job batching Pt. 1: An overview",
//     "coverImage": null,
//     "readTime": 21,
//     "brief": "Introduction\nIn this series of articles, we'll take a look at Laravel job batches and how to take the most out of it.\nYou can jump to other parts via the links below:\n\nLaravel batches exploration Pt. 2: Digging deeper and discover the pain point\n\nLar...",
//     "subtitle": null,
//     "views": 0,
//     "url": "https://dominique-vassard.hashnode.dev/mastering-laravel-job-batching-pt-1-an-overview",
//     "dateAdded": "2024-07-15T09:10:01.770Z",
//     "author": {
//       "_id": "665406ef4692c94570d00aa6",
//       "name": "Dominique VASSARD",
//       "photo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1721034300895/Ry5Y8XUe3.png",
//       "isPro": false,
//       "username": "domvas"
//     }
//   }
// },
