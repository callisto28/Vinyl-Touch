import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';


const urlYoutube = process.env.URL_YOUTUBE;
const apiYoutube = process.env.API_YOUTUBE;

const channelId = [
    "UCzRTcpx2XVUtJgMrSmQ3A2A", "UCdbh4LWeoSni9pL9SWSsCeg", "UCh_LABZ_faSEgN4lx6tc4Kg", "UCrZvbhsSDUnfm_TTLg1XxTA",

]


const bonplan = ({ data, data2 }) => {
    console.log(data2, 'dans le return');

    return (
        <div className=' container mx-auto px-10 mb-8'>

            {/* Chaine Youtube mis à l'honneur */}
            <div className="">
                <h2 className='font-bold text-2xl text-white'> News de la French Touch Youtube</h2>
            </div>
            <div className='grid grid-flow-row gap-12 m-14'>
                <h3 className='font-bold text-l text-white'>Chaque semaine je mettrais à l&apos;honneur une chaîne avec ses 3 dernières vidéos</h3>
                <ul className="grid grid-cols-3 gap-8 text-center mx-auto">
                    {data.items.map((item) => {
                        const { id, snippet = {} } = item;
                        const { videoId } = id;
                        const { title, description, thumbnails = {}, publishedAt, channelTitle } = snippet;
                        const { medium = {} } = thumbnails;


                        return (
                            <div key={id} className="bg-white shadow-md border border-red-400 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 grid content-evenly">
                                <a href="#" >
                                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{channelTitle}</h5>
                                </a>
                                <a href="#" >
                                    <Image src={medium.url} alt={title} width={medium.width} height={medium.height} className="rounded-t-lg" />
                                </a>
                                <div className="p-5">
                                    <a href="#" >
                                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{title}</h5>
                                    </a>
                                    <p classn="font-normal text-gray-700 mb-3 dark:text-gray-400">{moment(publishedAt).format('MMM DD, YYYY')}</p>
                                    <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                                        Regarder
                                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">

                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
            {/* Liste des youtubeurs Français */}
            <div className="">
                <h2 className='font-bold text-2xl text-white'> La French Touch</h2>
            </div>
            <div className='grid grid-flow-row gap-12 m-14'>
                <h3 className='font-bold text-l text-white'>Voici une liste des Youtubeurs Français parlant de vinyls</h3>
                <ul className="grid grid-cols-3 gap-8 text-center mx-auto">
                    {data2.items.map((item2) => {
                        const { id, snippet = {} } = item2;
                        const { title, description, thumbnails = {}, publishedAt, videoOwnerChannelTitle } = snippet;
                        const { medium = {} } = thumbnails;


                        return (
                            <div key={id} className="bg-white shadow-md border border-red-400 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 grid content-evenly">
                                <a href="#" >
                                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{videoOwnerChannelTitle}</h5>
                                </a>
                                <a href="#" >
                                    <Image src={medium.url} alt={title} width={medium.width} height={medium.height} className="rounded-t-lg" />
                                </a>
                                <div className="p-5">
                                    <a href="#" >
                                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{title}</h5>
                                    </a>
                                    <p classn="font-normal text-gray-700 mb-3 dark:text-gray-400">{moment(item2.contentDetails.videoPublishedAt).format('MMM DD, YYYY')}</p>
                                    <a href={`https://www.youtube.com/watch?v=${item2.contentDetails.videoId}`} target="_blank" rel="noreferrer" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                                        Regarder
                                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">

                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default bonplan;



export async function getServerSideProps() {

    const response = await fetch(`${urlYoutube}search?part=snippet&channelId=UCzRTcpx2XVUtJgMrSmQ3A2A&maxResults=3&order=date&key=${apiYoutube}`)
    const playlist = await fetch(`${urlYoutube}playlistItems?part=contentDetails&part=snippet&maxResults=25&playlistId=PLUCBUMaWPhpKMbhmQcp_mIPA7H5ipOrbi&key=${apiYoutube}`)
    const data = await response.json()
    const data2 = await playlist.json()
    console.log(data2, 'data2');
    return {
        props: {
            data, data2
        },
    };
}

