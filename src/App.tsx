import React, { useState } from "react";
import { books as initBooks } from "./business/books";
import { SortCriterion } from "./business/sort-criterion";
import SortPanel from "./components/SortPanel";
import BookItem from "./components/Book";
import { sortBooks } from "./business/sort-books";

const App: React.FC = () => {
    const [books, setBooks] = useState(initBooks);
    const [criteria, setCrieria] = useState<SortCriterion[]>([]);

    const sortedBooks = sortBooks(books, criteria);

    const removeBook = (id: string) =>
        setBooks((books) => books.filter((book) => book.id != id));
    const addCriterion = (criterion: SortCriterion) =>
        setCrieria((criteria) => [
            ...criteria.filter(({ field }) => field != criterion.field),
            criterion,
        ]);

    return (
        <div className="container">
            <SortPanel
                criteria={criteria}
                onChange={(field, direction) =>
                    addCriterion({ field, direction })
                }
            />

            <hr />

            {sortedBooks.map((book, idx) => (
                <BookItem book={book} onRemove={removeBook} key={idx} />
            ))}
        </div>
    );
};

export default App;
