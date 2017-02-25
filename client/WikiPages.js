import React, { Component } from 'react';
import {Link} from 'react-router';

export const WikiPages = (props) => {
  console.log('props', props.allWikiPages);
  return (
    <div>
      <h3>Pages</h3>
      <hr />
      <form>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      <hr />
      <ul className="list-unstyled">
        <ul>
          {
            props.allWikiPages.map(page => {
              return (
                <li key={ page.id }>
                  <Link to={'/'}>{ page.title }</Link>
                </li>
              );
            })
          }
        </ul>
      </ul>
    </div>
  );
};

