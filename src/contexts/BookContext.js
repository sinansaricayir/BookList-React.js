import { createContext,useReducer } from "react";
import { BookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) =>{

// const[books,setBooks]=useState([
//     {ad:'Sefiller',yazar:'Victor Hugo',id:1},
//     {ad:'Nutuk',yazar:'Mustafa Kemal Atatürk',id:2}
// ]);

// const addBook = (ad,yazar)=>{
//     setBooks([...books,{ad:ad,yazar:yazar,id:uuidv4()}]);
// }

// const removeBook = (id) =>{
//     setBooks(books.filter(book=>book.id !==id));
// }

const [books,dispatch] = useReducer(BookReducer,[]);


return(
    <BookContext.Provider value={{books,dispatch}}>
        {props.children}
    </BookContext.Provider>
)

}

export default BookContextProvider;