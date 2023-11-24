import React from "react";
import { Book } from "../business/book";

export interface BookItemProps {
    book: Book;
    onRemove?: (id: string) => void | undefined;
}

const BookItem: React.FC<BookItemProps> = ({ book, onRemove }) => {
    const onClick = onRemove ? () => onRemove(book.id) : undefined;
    return (
        <div className="row">
            <div className="col">
                <div className="ratio ratio-1x1">
                    <img
                        src={book.image ?? ""}
                        className="img-fluid rounded object-fit-cover"
                    />
                </div>
            </div>
            <div className="col">{book.title}</div>
            <div className="col">{book.year}</div>
            <div className="col">{book.price}</div>
            <div className="col">{book.genre}</div>
            <div className="col">{book.author}</div>
            <div className="col">
                <button
                    className="btn btn-outlined btn-danger"
                    onClick={onClick}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default BookItem;
