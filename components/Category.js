import React from 'react';
import Link from 'next/link';



const Category = (categories) => {





    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
            <p>
                {categories.post.map(category => (
                    <Link href={`/category/${category.node.slug}`} key={category.slug} passHref>
                        <span className="md:float-center mt-2 flex text-gray-600 ml-4 font-semibold cursor-pointer">
                            {/* - {category.node.title} */}
                            - {(category.node.title === ' La French Touch') ? (<a href='../pages/frenchtouch'>La French Touch</a>) : (category.node.title)}
                        </span>
                    </Link>
                ))}
            </p>

        </div>
    );
};

export default Category;