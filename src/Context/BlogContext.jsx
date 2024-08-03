import axios from "axios";
import { createContext, useContext, useState } from "react";
import baseAssets from "../assets/baseAssets";
import { formatDate } from "../Utility/CommonFunctions";
const BlogsContext = createContext();
export const useBlogContext = () => {
  return useContext(BlogsContext);
};

function BlogContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const HASHNODE_URL = "https://gql.hashnode.com";
  const [after, setAfter] = useState("");

  function handleNext() {
    setCount(count + 1);
    getBlogs();
  }
  function handlePrevious() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  async function getBlogs() {
    setLoading(true);
    try {
      const response = await axios.post(HASHNODE_URL, {
        query,

        variables: { first: 12, after: after },
      });
      const data = [];
      response.data.data.feed.edges.map((edge) => {
        let blogData = {};

        if (edge.node._id) {
          blogData["id"] = edge.node._id;
        }
        if (edge.node.coverImage && edge.node.coverImage.url) {
          blogData["coverImage"] = edge.node.coverImage.url;
        } else {
          blogData["coverImage"] = baseAssets.defaultCover;
        }

        if (edge.node.author.name) {
          blogData["userName"] = edge.node.author.name;
        }
        if (edge.node.author.photo) {
          blogData["userPhoto"] = edge.node.author.photo;
        }
        if (edge.node.dateAdded) {
          blogData["postDate"] = formatDate(edge.node.dateAdded);
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
      if (response.data.data.feed.pageInfo.hasNextPage) {
        setAfter(response.data.data.feed.pageInfo.endCursor);
      } else {
        setAfter("");
      }

      // making 2D array
      let finalData = posts;
      finalData.push(data);
      setPosts(finalData);
      setLoading(false);

      //it will have all the blogs
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
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
    count,
    setCount,
    handleNext,
    handlePrevious,
  };

  return (
    <BlogsContext.Provider value={value}>{children}</BlogsContext.Provider>
  );
}

export default BlogContextProvider;
