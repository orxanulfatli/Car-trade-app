import React from 'react'
import './List.css'

const List = ({ items, renderItems }) => {
  return <div className='list'>{items?.map(renderItems)}</div>;
};

export default List