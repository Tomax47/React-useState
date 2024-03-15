import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const MusicAlbum = ({ album }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSongs = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='albums-div'>
      <div onClick={toggleSongs} style={{ cursor: 'pointer' }}>
        <img src={album.image} className='album-img'/>
        <h3 style={{ fontSize: 25}}>{album.name}</h3>
      </div>
      {isOpen && (
        <div>
          {album.songs.map((song, index) => (
            <p key={index}> - {song}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const MusicAlbumList = ({ albums }) => {
  return (
    <div>
      {albums.map((album, index) => (
        <MusicAlbum key={index} album={album} />
      ))}
    </div>
  );
};

const App = () => {
  const albums = [
    {
      name: 'Doomed in Heavens',
      image: 'cover1.webp',
      songs: ['Sunsine', 'Orthodox', 'Killing Sanity']
    },
    {
      name: 'Rage',
      image: 'cover2.avif',
      songs: ['Rage', 'Spacify', 'Fury of demons', 'Innocent sin']
    }, 
    {
      name: 'Duke',
      image: 'cover3.jpeg',
      songs: ['Lcuky', 'Sus', 'Joredian', 'Dunckeh']
    }, 
    {
      name: 'Alex in Zinderlands',
      image: 'cover4.webp',
      songs: ['Alex', 'Zinderlands', 'Mockery', 'Traveller']
    }
  ];

  return (
    <center>
      <div>
      <h1 style={{ fontSize: 100 }}>Fictionary Albums</h1>
      <MusicAlbumList albums={albums} />
    </div>
    </center>
  );
};

export default App;
