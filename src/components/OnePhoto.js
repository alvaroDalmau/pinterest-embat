import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import OnePhotoCss from './OnePhoto.module.css';

export default function OnePhoto() {
  const [id] = useState(useParams().id);
  const [photo, setFoto] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.thecatapi.com/v1/images/${id}`)
      .then(response => {
        setFoto(response.data);
      })
      .catch(() => {
        console.log('error getting data');
      });
  }, []);
  return (
    <div className={OnePhotoCss.centerImg}>
      {' '}
      <img src={`${photo.url}`} alt={`${photo.id}`}></img>
    </div>
  );
}
