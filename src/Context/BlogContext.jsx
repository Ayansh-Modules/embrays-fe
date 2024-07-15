import { createContext, useContext , useState } from "react";
import axios from "axios";
const BlogsContext = createContext();
export const useBlogContext = () => {
  return useContext(BlogsContext);
};

function BlogContextProvider({ children }) {
  const [posts,setPosts] = useState([])
  const HASHNODE_URL = "https://gql.hashnode.com";
  async function getBlogs() {
    try {
      const response = await axios.post(HASHNODE_URL , {
        query,
        variables: { first: 12, after: "" },
      });
      const data = []
      response.data.data.feed.edges.map((edge) => {
        data.push({
          id :edge.node._id,
          coverImage :edge.node.coverImage.url ,
               user : edge.node.photo,
               userName :edge.node.author.name,
               postDate :edge.node.dateAdded,
               postTitle :edge.node.title,
               postBrief :edge.node.brief,
               postUrl :edge.node.url
        })
      });
      setPosts(data)
      console.log (data)
      return data; //it will have all the blogs
    } catch (error) {
      console.log("error");
    }
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
    posts
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