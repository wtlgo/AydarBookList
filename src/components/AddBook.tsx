import React, { useEffect, useId, useRef, useState } from "react";
import { Book } from "../business/book";
import { Modal } from "bootstrap";
import img from "bootstrap-icons/icons/image-fill.svg";

export interface AddBookProps {
    onBookAdd: (book: Book) => void;
}

const AddBook: React.FC<AddBookProps> = ({ onBookAdd }) => {
    const titleId = useId();
    const [title, setTitle] = useState("");

    const yearId = useId();
    const [year, setYear] = useState(2000);

    const priceId = useId();
    const [price, setPrice] = useState(0);

    const genreId = useId();
    const [genre, setGenre] = useState("");

    const authorId = useId();
    const [author, setAuthor] = useState("");

    const imageId = useId();
    const [image, setImage] = useState("");
    const realImage = (() => {
        const timage = image.trim();
        if (!image.length) return undefined;
        return timage;
    })();

    const [modal, setModal] = useState<Modal | null>(null);
    const modalRef = useRef(null);

    useEffect(() => {
        if (modalRef.current == null) return;
        if (modal != null) return;

        setModal(
            new Modal(modalRef.current, {
                keyboard: false,
                backdrop: "static",
            }),
        );
    }, [modalRef, modal]);

    const showModal = () => modal?.show();
    const save = () => {
        onBookAdd({
            id: `${new Date().getTime()}`,
            title: title.trim(),
            year,
            price,
            genre: genre.trim(),
            author: author.trim(),
            image: realImage,
        });

        setTitle("");
        setYear(2000);
        setPrice(0);
        setGenre("");
        setAuthor("");

        modal?.hide();
    };

    return (
        <div className="row">
            <div className="col">
                <button className="btn btn-success" onClick={showModal}>
                    Add
                </button>
            </div>

            <div className="modal" tabIndex={-1} ref={modalRef}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Book</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="mb-3 row">
                                <label
                                    htmlFor={titleId}
                                    className="col-sm-2 col-form-label"
                                >
                                    Title
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control"
                                        id={titleId}
                                        value={title}
                                        onChange={({ target }) =>
                                            setTitle(target.value)
                                        }
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label
                                    htmlFor={yearId}
                                    className="col-sm-2 col-form-label"
                                >
                                    Year
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control"
                                        id={yearId}
                                        value={year}
                                        onChange={({ target }) =>
                                            setYear(+target.value)
                                        }
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label
                                    htmlFor={priceId}
                                    className="col-sm-2 col-form-label"
                                >
                                    Price
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control"
                                        id={priceId}
                                        value={price}
                                        onChange={({ target }) =>
                                            setPrice(+target.value)
                                        }
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label
                                    htmlFor={genreId}
                                    className="col-sm-2 col-form-label"
                                >
                                    Genre
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control"
                                        id={genreId}
                                        value={genre}
                                        onChange={({ target }) =>
                                            setGenre(target.value)
                                        }
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label
                                    htmlFor={authorId}
                                    className="col-sm-2 col-form-label"
                                >
                                    Author
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control"
                                        id={authorId}
                                        value={author}
                                        onChange={({ target }) =>
                                            setAuthor(target.value)
                                        }
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label
                                    htmlFor={imageId}
                                    className="col-sm-2 col-form-label"
                                >
                                    Image Url
                                </label>
                                <div className="col-sm-6">
                                    <input
                                        className="form-control"
                                        id={imageId}
                                        value={image}
                                        onChange={({ target }) =>
                                            setImage(target.value)
                                        }
                                        type="text"
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <div className="ratio ratio-1x1">
                                        <img
                                            src={realImage ?? img}
                                            className="img-fluid img-thumbnail object-fit-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={save}
                                type="button"
                                className="btn btn-success"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;
