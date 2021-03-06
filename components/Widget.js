import moment from 'moment';
import Link from 'next/link';
import React from 'react';



const Widget = (recentPosts) => {


    return (
        <div className="bg-white shadow-lg rounded-lg p-6 pb-10 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">{'Recent Posts'}</h3>

            {recentPosts.post.map((post, index) => (
                <div key={index}>
                    <a className="flex flex-col items-center cursor-pointer">


                        <div className="text-center text-lg">{post.title}</div>

                        <Link href={`/post/${post.slug}`} key={post.slug} passHref>
                            <img src={post.photo.url} alt={post.title} className="w-24 h-24 rounded-full mr-4" />
                        </Link>

                        <div className="text-xs text-gray-600">{moment(post.created_at).format('MMMM Do YYYY')}
                        </div>
                    </a>

                </div>

            ))}
        </div>
    )
}


export default Widget;

