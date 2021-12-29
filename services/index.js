import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.GRAPHQL_API_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection {
        edges {
                node {
                    author {
                        description
                        name
                        id
                        photo {
                        url
                        }
                    }
                        createdAt
                        slug
                        title
                        description
                        categories {
                            title
                            slug
                            }
                        photo {
                            url
                            }
                }
        }
    }
  }
  `;

  const data = await request(graphqlAPI, query);
  return data.postsConnection.edges;

};



export const getCategories = async () => {
  const query = gql`
  query MyQuery {
    categoriesConnection {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
    `;
  const result = await request(graphqlAPI, query);
  return result.categoriesConnection.edges;
};

export const getRecentPosts = async () => {

  const query = gql`
  query MyQuery {
    posts(orderBy: createdAt_ASC, last: 3) {
      title
      date
      photo {
        url
      }
      createdAt
      slug
    }
  }
    `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getRecentSold = async () => {
  const query = gql`
  query MyQuery {
    collections(orderBy: id_ASC, where: {}) {
      author {
        name
        photo {
          url
        }
      }
      createdAt
      title
      link {
        url
      }
      jacket {
        url
      }
      description
      playlist {
        url
      }
    }
  }
  `
  const result = await request(graphqlAPI, query);
  return result.collections;
}