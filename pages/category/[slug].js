import React from 'react';
import { request, gql } from 'graphql-request';


export const getServerSideProps = async (pageContext) => {
    const url = process.env.GRAPHQL_API_ENDPOINT;
    const pageSlug = pageContext.query.slug;


    const query = gql`
    query MyQuery($pageSlug: String!) {
            categories(where: {
                slug: $pageSlug
        })  {
            title
            slug
            posts {
              id
              title
              description
              createdAt
              content {
                text
              }
            }
            collection {
              id
              title
              price
              description
              createdAt
              content {
                text
              }
            }
          }
        }`;
    const variables = {
        pageSlug
    };

    const data = await request(url, query, variables);
    const category = data.categories;
    return {
        props: {
            category
        }
    }

};




const Category = ({ category }) => {
    console.log(category, 'category');
    return (
        <div>

        </div>
    );
};

export default Category;