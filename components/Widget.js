import moment from 'moment';
import Link from 'next/link';
import React from 'react';



const Widget = (recentPosts) => {


    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">{'Recent Posts'}</h3>

            {recentPosts.post.map(post => (
                <>
                    <a className="flex flex-col items-center cursor-pointer">


                        <div className="text-lg">{post.title}</div>

                        <Link href={`/post/${post.slug}`} key={post.slug} passHref>
                            <img src={post.photo.url} alt={post.title} className="w-24 h-24 rounded-full mr-4" />
                        </Link>

                        <div className="text-xs text-gray-600">{moment(post.created_at).format('MMMM Do YYYY')}
                        </div>
                    </a>

                </>

            ))}
        </div>
    )
}


export default Widget;

