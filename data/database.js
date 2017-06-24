let books = [
    {
        "id": "1",
        "title": "Philosopher's Stone",
        "author": {
            "firstName":"J.K.",
            "lastName":"Rowling"
        },
        "available": true
    }, {
        "id": "2",
        "title": "Chamber of Secrets",
        "author": {
            "firstName":"J.K.",
            "lastName":"Rowling"
        },
        "available": false
    }, {
        "id": "3",
        "title": "The Monk who Sold His Ferrari",
        "author": {
            "firstName":"Robin",
            "lastName":"Sharma"
        },
        "available": true
    }
];


export function getBooks() {
    return books;
}
