import React, { useState } from "react";
import { books as initBooks } from "./business/books";
import { SortCriterion } from "./business/sort-criterion";
import SortPanel from "./components/SortPanel";
import BookItem from "./components/Book";
import { sortBooks } from "./business/sort-books";
import { Book } from "./business/book";
import AddBook from "./components/AddBook";

const getInitBooks = () => {
    const books = localStorage.getItem("books");
    if (!books) return initBooks;
    return JSON.parse(books) as Book[];
};

const setInitBooks = (books: Book[]) => {
    localStorage.setItem("books", JSON.stringify(books));
};

const App: React.FC = () => {
    const [books, setBooks] = useState(getInitBooks());
    const [criteria, setCrieria] = useState<SortCriterion[]>([]);

    const sortedBooks = sortBooks(books, criteria);

    const removeBook = (id: string) =>
        setBooks((books) => {
            const res = books.filter((book) => book.id != id);
            setInitBooks(res);
            return res;
        });

    const addBook = (book: Book) =>
        setBooks((books) => {
            const res = [...books, book];
            setInitBooks(res);
            return res;
        });

    const addCriterion = (criterion: SortCriterion) =>
        setCrieria((criteria) => [
            ...criteria.filter(({ field }) => field != criterion.field),
            criterion,
        ]);

    return (
        <div className="container my-2">
            <SortPanel
                criteria={criteria}
                onChange={(field, direction) =>
                    addCriterion({ field, direction })
                }
            />

            <hr />

            {sortedBooks.map((book) => (
                <BookItem book={book} onRemove={removeBook} key={book.id} />
            ))}

            <AddBook onBookAdd={addBook} />
            <hr />
        </div>
    );
};

export default App;
