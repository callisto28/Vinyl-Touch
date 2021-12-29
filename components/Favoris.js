import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Favoris = (recentSold) => {



    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Bon Plans <span className='text-sm' >Dernières minutes</span></h3>

            <div className="container block lg:flex-col text-center justify-around mb-8 w-full">
                {recentSold.post.map(category => (

                    <>
                        <div className="flex flex-col">
                            <Link href={`/category/${(category.slug)}`} key={category.slug} passHref>
                                <span className="md:float-center mt-2 flex flex-col text-gray-600 ml-4 font-semibold cursor-pointer">
                                    {category.title}
                                </span>
                            </Link>
                            <p className="md:float-center mt-2 flex flex-col text-gray-600 ml-4 truncate overflow-hidden ">{category.description}...</p>
                            <picture className="md:float-center">
                                <Image unoptimized src={category.jacket.url}
                                    alt={category.title}
                                    width="100px"
                                    height="100px"
                                    layout="intrinsic" />
                            </picture>

                        </div>
                        <div>
                            <a href={(category.playlist === null) ? (category.link.url) : (category.playlist.url)}
                                target="_blank"
                                rel="noreferrer"
                                className="transition duration-500
                        ease transform hover:-translate-xy-1
                         hover:-translate-x-2 inline-block bg-pink-600 text-lg
                          font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                                Voir plus</a>

                        </div>


                    </>

                ))}
            </div>

        </div>
    );
};

export default Favoris;