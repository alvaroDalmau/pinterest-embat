import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useGetPhotos from '../useGetPhotos';
import Masonry from 'react-masonry-css';

import HomeListCss from './HomeList.module.css';

export default function HomeList() {
  const [pageNumber, setPageNumber] = useState(
    Math.floor(Math.random() * 1000 + parseInt(1))
  );
  const { loading, data } = useGetPhotos(pageNumber);

  const observer = useRef();
  const lastElementRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          pageNumber === 1000
            ? setPageNumber(1)
            : setPageNumber(prevPageNumber => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, pageNumber]
  );

  const breakpoints = {
    default: 4,
    1400: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className={HomeListCss.container}>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((e, i) => {
          return data.length === i + 1 ? (
            <Link to={`/${e.id}`} key={`${e.id}`}>
              <img ref={lastElementRef} src={`${e.url}`} alt={`${e.id}`}></img>
            </Link>
          ) : (
            <Link
              to={`/${e.id}`}
              key={`${e.id}`}
            >
              <div>
                <img src={`${e.url}`} alt={`${e.id}`}></img>
              </div>
            </Link>
          );
        })}
      </Masonry>
    </div>
  );
}
