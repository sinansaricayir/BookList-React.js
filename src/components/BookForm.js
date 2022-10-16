import React,{useState,useContext} from 'react';
import { BookContext } from '../contexts/BookContext';


const BookForm = () => {

    const{dispatch} = useContext(BookContext);
    const[title,setTitle] = useState('');
    const[author,setAuthor] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      dispatch({type:'ADD_BOOK',book:{ad:title,yazar:author}});
      setAuthor('');
      setTitle('');
    }

  return (
    <form onSubmit = {handleSubmit}>
        <input type='text' placeholder='Kitap Adı' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input type='text' placeholder='Yazar Adı' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        <input type='submit' value='Kitap Ekle'/>
    </form>
  )
}

export default BookForm;