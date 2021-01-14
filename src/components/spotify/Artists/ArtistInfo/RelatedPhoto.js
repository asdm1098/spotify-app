import React from 'react';
import {Link} from "react-router-dom";

export default function RelatedPhoto({
    idArtist,
    imgArtist
}) {
    return (
        <Link to={"/artist/" + idArtist} className="link-none-decoration">
            <div
                //onClick={() => props.getArtistProfile(props.artistID)}
                className="related-photo relative"
                style={{
                backgroundImage: 'url(' + imgArtist[2]?.url + ')'
            }}></div>
        </Link>
    )
}