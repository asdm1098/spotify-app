import React from 'react';

export const SongsCard = ({
    idCategory,
    name,
    icon,
    //hrefCategory
}) => {
     
    return (
        

        //////////////////
        <div className="card ms-3 bg-transparent" style={{border: 'none'}}>
            <img src={ icon } className="card-img mb-2" alt={ name } />
            <div className="card-body" style={{ padding: '0'}}>
                <h5 className="card-title text-truncate mb-0" style={{color: 'white'}}>{ name }</h5>
                <p className="card-text text-truncate " style={{color: 'gray'}}> { idCategory }</p>
            </div>
        </div>
        
        
    )
}