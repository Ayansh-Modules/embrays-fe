import { createContext, useContext } from "react";

const BlogsContext = createContext();
export const useBlogContext = () => {
  return useContext(BlogsContext);
};

function BlogContextProvider({ children }) {
  // useEffect(()=>{
  //   async (query) {
  // const headers = {
  //   'Content-Type': 'application/json',
  // };
  // const graphqlQuery = {
  //   query: query,
  //   variables: {},
  // };

  // const URL = BlogData.hashnode;
  //       try {
  //         const response = await axios.get(URL);
  //         console.log(response);
  //
  //       } catch (error) {
  //        "Something Went Wrong"
  // }
  //        const query =`query Feed($first: Int!, $filter: FeedFilter, $after: String) {
  //   feed(first: $first, filter: $filter, after: $after) {
  //     edges {
  //       node {
  //         ... on Post {
  //           _id: id
  //           title
  //           coverImage {
  //             url
  //           }
  //           readTime: readTimeInMinutes
  //           brief
  //           subtitle
  //           views
  //           url
  //           dateAdded: publishedAt
  //           url
  //         }
  //         author {
  //           ... on User {
  //             _id: id
  //             name
  //             photo: profilePicture
  //             isPro
  //             username
  //           }
  //         }
  //       }
  //     }
  //     pageInfo {
  //       hasNextPage
  //       endCursor
  //       __typename
  //     }
  //   }
  // }`
  //     }
  // },[]);
  let value = {
    result: "hii",
  };

  return (
    <BlogsContext.Provider value={value}>{children}</BlogsContext.Provider>
  );
}

export default BlogContextProvider;
