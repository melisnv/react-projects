import React from "react";
import ReactDOM  from "react-dom/client";
import '../src/index.css'

const BookList = () => {
  return (
    <section>
      <h1 className="heading">Amazon Best Sellers</h1>
      <div className="booklist">
        <Book
          img="./images/book1.jpg"
          author="Jordan Moore"
          title="Interesting Facts For Curious Minds"
        />
        <Book
          img="./images/book2.jpg"
          author="Rebecca Yarros"
          title="Fourth Wing (The Empyrean, 1)"
        />
        <Book
          img="./images/book3.jpg"
          author="James Clear"
          title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
        />
        <Book
          img="./images/book4.jpg"
          author="M Prefontaine"
          title="Difficult Riddles For Smart Kids: 300 Difficult"
        />
        <Book
          img="./images/book5.jpg"
          author="James McBride"
          title="The Heaven & Earth Grocery Store"
        />
        <Book
          img="./images/book6.jpg"
          author="Bonnie Garmus"
          title="Lessons in Chemistry: A Novel"
        />
      </div>
    </section>
  );
}

const img = './images/book1.jpg';
const author = 'Jordan Moore';
const title = 'Interesting Facts For Curious Minds';


const Book = (props) => {
  // const {img, title, author} = props;
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
    </article>
  );
};

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