import React,{useContext} from 'react';
import {BookContext} from '../contexts/BookContext';

const BookDetail = ({book}) => {

  const {dispatch} = useContext(BookContext); 

  return (
    <li onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})} className='detail'>
        <div className='title'>{book.ad}</div>
        <div className='author'>{book.yazar}</div>
    </li>
  )
}

export default BookDetail;