import React from 'react';
import { request, gql } from 'graphql-request';
import Link from 'next/link';
import moment from 'moment';


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
                  html
                }
              }
              collection {
                id
                title
                price
                description
                createdAt
                content {
                  html
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
    <>

      <h1 className="transition duration-400 text-center mb-8 hover:text-pink-600 text-3xl font-semibold">
        {category[0].title} </h1>
      <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
        {(category[0].collection).map((collect, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">

            <h1 className="transition duration-400 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
              {collect.title} </h1>
            <span className="text-center text-lg">{moment(collect.createdAt).format('MMM DD, YYYY')}

            </span>
            <p className="text-center text-lg">
              {collect.description}
            </p>
            <p className="text-center text-lg">
              {collect.content.html}
            </p>
          </div>
        ))}
        {(category[0].posts).map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">

            <h1 className="transition duration-400 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
              {post.title} </h1>
            <p className="text-center text-lg">
              {post.createdAt}
            </p>
            <p className="text-center text-lg">
              {post.description.split('\n')}
            </p>
            <p className="text-center text-lg" dangerouslySetInnerHTML={{ __html: post.content.html }}>

            </p>
          </div>
        ))}

      </div>
      <div className="text-center">
        <Link href={`/`} passHref>
          <span className="transition duration-500 ease transform hover:-translate-xy-1 hover:-translate-x-2 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Accueil</span>
        </Link>
      </div>




    </>
  )
};

export default Category;