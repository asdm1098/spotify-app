import React from 'react';

export const SongsCard = ({
    idCategory,
    name,
    icon,
    hrefCategory
}) => {

    return (
        

        //////////////////
        <div className="card ms-3 ">
            <img src={ icon } className="card-img" alt={ name } />
            <div className="card-body">
                <h5 className="card-title text-truncate ">{ name }</h5>
                <p className="card-text text-truncate "> { idCategory }</p>
            </div>
        </div>
        
        
    )
}