import React from 'react';
import Link from 'next/link';

const categories = [
    {

        name: 'Bon plan Achat',
        slug: 'plan',

    },

    {

        name: 'Les News',
        slug: 'actu',

    },
];
const Header = () => {

    return (
        <div className=" container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-red-400 py-8">
                <div className="md:float-left block">
                    <Link href="/" passHref>
                        <span className="cursor-pointer font-bold text-4xl text-white">
                            Vinyl Touch

                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map(category => (
                        <Link href={`/category/${category.slug}`} key={category.slug} passHref>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                                {category.name}
                            </span>
                        </Link>
                    ))}

                </div>
                <div className="hidden md:float-center md:contents">
                    <Link href="/frenchtouch" passHref>
                        <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                            La French Touch
                        </span>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Header;