import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import SearchCss from './Search.module.css';

export default function Busqueda() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(true);
  };
  return (
    <React.Fragment>
      <Form className={SearchCss.contender}>
        <Search
          className={
            isActive
              ? `${SearchCss.searchIcon} ${SearchCss.clicked}`
              : `${SearchCss.searchIcon}`
          }
        />
        <FormControl
          onClick={toggleClass}
          className={
            isActive
              ? `${SearchCss.searchBar} ${SearchCss.maxSize}`
              : `${SearchCss.searchBar}`
          }
          id="inlineFormInputGroup"
          placeholder="Buscar"
        />
      </Form>
    </React.Fragment>
  );
}
