import React from "react";
import ReactDOM  from "react-dom/client";
import '../src/index.css'
import { books } from "./books-data";
import Book from "./Book";

// const EventExamples = () => {
//   return (<section>
//     <form>
//       <h2>Typical Form</h2>
//       <input type="text" name="example" style={{margin:'1rem 0'}}></input>
//     </form>
//     <button onClick={() => console.log("The button is clicked!")} type="button">Click Me</button>
//   </section>)
// };


const BookList = () => {
  // Function to fetch the book
  // const FindtheBook = (id) => {
  //   const book = books.find((book) =>book.id === id);
  //   console.log(book)
  // };

  return (
    <section>
      <h1 className="heading">Amazon Best Sellers</h1>
      <div className="booklist">
        {books.map((book,index) => {
          // destructure
          return <Book {...book} key={book.id} number ={index}/>;
          // return <Book {...book} key={book.id} />; // Alternative
        })}
      </div>
    </section>
  );
}


// const BookList = () => {
//   return (
//     <section>
//       <h1 className="heading">Amazon Best Sellers</h1>
//       <div className="booklist">
//         <Book
//           img="./images/book1.jpg"
//           author="Jordan Moore"
//           title="Interesting Facts For Curious Minds"
//         />
//         <Book
//           img="./images/book2.jpg"
//           author="Rebecca Yarros"
//           title="Fourth Wing (The Empyrean, 1)"
//         />
//         <Book
//           img="./images/book3.jpg"
//           author="James Clear"
//           title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
//         />
//         <Book
//           img="./images/book4.jpg"
//           author="M Prefontaine"
//           title="Difficult Riddles For Smart Kids: 300 Difficult"
//         />
//         <Book
//           img="./images/book5.jpg"
//           author="James McBride"
//           title="The Heaven & Earth Grocery Store"
//         />
//         <Book
//           img="./images/book6.jpg"
//           author="Bonnie Garmus"
//           title="Lessons in Chemistry: A Novel"
//         />
//       </div>
//     </section>
//   );
// }

// const img = './images/book1.jpg';
// const author = 'Jordan Moore';
// const title = 'Interesting Facts For Curious Minds';


// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// }

// const Image = () => {
//   return (
//     <img
//       src="./images/book1.jpg"
//       alt="Interesting Facts For Curious Minds"
//     />
//   );
// }

// const Title = () => {
//   return <h2>Interesting Facts For Curious Minds</h2>;
// };

// const Author = () => {
//   return <h3>Jordan Moore</h3>;
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);