import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetPhotos(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios({
      method: 'get',
      url: `https://api.thecatapi.com/v1/images/search?limit=3&page=${pageNumber}&order=DESC`,
    }).then(response => {
      setData(prevData => {
        return [...prevData, ...response.data];
      });
      setLoading(false);
    });
  }, [pageNumber]);
  return { loading, data };
}
