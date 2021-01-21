import React from 'react';
import { useSelector } from 'react-redux';
import { ReleasesCard } from './ReleasesCard';


export const ReleasesList = React.memo(() => {

    const {releases} = useSelector(state => state.releases);
    //console.log('Llamado a releasesList');
    return (
      <div className="card-columns animate__animated animate__fadeIn">
          {
              releases.map( release => (
                  <ReleasesCard 
                    key={ release.idAlbum }
                      { ...release }
                  />
              ))
          }
      </div>
    )
})