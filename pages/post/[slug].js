import React from 'react';
import { request, gql } from 'graphql-request';
import Link from 'next/link';
import Image from 'next/image';

export const getServerSideProps = async (pageContext) => {
    const url = process.env.GRAPHQL_API_ENDPOINT;
    const pageSlug = pageContext.query.slug;


    const query = gql`
    query MyQuery($pageSlug: String!) {
            posts(where: {
                slug: $pageSlug
        })  {
            title
            slug
            description
            createdAt
            content {
                html
            }
            photo {
                url
              }
            
          }
        }`;

    const variables = {
        pageSlug
    };
    const data = await request(url, query, variables);
    const post = data.posts;
    return {
        props: {
            post
        }
    }
};

const Post = ({ post }) => {
    console.log(post, 'post slug');
    return (
        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">

                <picture className="object-top absolute h-80 w-full object-cover shadow-lg rounded-lg lg:rounded-lg">
                    <Image unoptimized src={post[0].photo.url}
                        alt={post.title}
                        layout="responsive"
                        width={800}
                        height={500}
                        className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-center'

                    />
                </picture>
            </div>
            <h1 className="transition duration-400 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
                {post[0].title} </h1>
            <p className="text-center text-gray-600 text-sm">
                {post[0].createdAt}
            </p>
            <div className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8" >
                {post[0].description.split('\n')}

            </div>
            <div className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8" dangerouslySetInnerHTML={{ __html: post[0].content.html }}>
                {/* {post[0].content.html.replace('\n', '</n>')} */}

            </div>
            <div className="text-center">
                <Link href={`/`} passHref>
                    <span className="transition duration-500 ease transform hover:-translate-xy-1 hover:-translate-x-2 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Accueil</span>
                </Link>
            </div>

        </div>

    );
};

export default Post;

