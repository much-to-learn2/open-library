import { Doc } from "../api";

export interface bookType {
    title: string,
    author: string,
    published_year: number,
    isbn: string,
    pages: number,
}

interface Props {
    book: Doc,
}

const renderList = (s: string | string[] | undefined): string => {
    if (!s) return ""; 

    if (typeof(s) === "string") return s;

    return s.join(", ");
}

const renderISBN = (s: string | string[] | undefined): string => {
    if (!s) return "";

    if (typeof(s) === "string") return s;

    return s[0];
}

const Book = ({ book }: Props) => {
    return (
        <div className="px-2 mx-2 my-2 bg-indigo-50 border border-indigo-200 rounded-xl flex flex-col items-center w-full max-w-md">
            <div className="text-2xl font-bold tracking-tight text-slate-900">{book.title}</div>
            <div className="tracking-tight text-slate-900 italic">by {renderList(book.author_name)}</div>
            <div className="tracking-tight text-slate-900 self-start">first published {book.first_publish_year}</div>
            <div className="flex flex-row justify-between w-full">
                <div>{book.number_of_pages_median} pages</div>
                <div>ISBN: {renderISBN(book.isbn)}</div>
            </div>
            
        </div>
    )
}

export default Book