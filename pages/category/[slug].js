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
  console.log(category, 'category slug');
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <h1 className="transition duration-400 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
          {category[0].title} </h1>
      </div>
    </div>


  )
};

export default Category;