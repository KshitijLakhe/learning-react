// fragment --> grouping of multiple elements without adding extra dom element

import { Fragment } from "react"

import React from "react"

function FrangmentVaraint1() {
    return (
        <>
            <div>Hi</div>
            <div>Hello</div>
        </>
    )
}

function FrangmentVaraint2() {
    return (
        <Fragment>
            <div>Apple</div>
            <div>Mango</div>
        </Fragment>
    )
}

function FrangmentVaraint3() {
    return (
        <React.Fragment>
            <div>Apple</div>
            <div>Mango</div>
        </React.Fragment>
    )
}

function FragmentComp() {

    const books = [
        { id: 1, bookName: "The Alchemist", author: "Paulo Coelho" },
        { id: 2, bookName: "Atomic Habits", author: "James Clear" },
        { id: 3, bookName: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
        { id: 4, bookName: "The Power of Now", author: "Eckhart Tolle" }
    ];
    return (
        <>
            <FrangmentVaraint1 />
            {/* <FrangmentVaraint2 /> */}
            <FrangmentVaraint3 />

            {/* <ul>
                {books.map((book) => <Fragment key={book.id}>Book:{book.bookName},Author:{book.author} </Fragment>)}
            </ul> */}
        </>
    )
}
export default FragmentComp