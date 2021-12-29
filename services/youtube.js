import React from 'react';


const urlYoutube = process.env.URL_YOUTUBE;
const apiYoutube = process.env.API_YOUTUBE



export async function getNewChannel() {
    try {
        const response = await fetch(`${urlYoutube}playlists?part=snippet%2CcontentDetails&channelId=UCzRTcpx2XVUtJgMrSmQ3A2A&maxResults=3&key=${apiYoutube}`)
            .then(response => response.json())
        return response
    } catch (error) {
        console.log(error)
    }
}



