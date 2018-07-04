let id = 0

let books = []

module.exports = {
    read:(req, res) => {
        return res.status(200).send( books )
    },
    create:(req, res) => {
        const { title, author } = req.body
        let book = {
            id: id,
            title: title,
            author: author
        }
        books.push( book )
        id++
        return res.status(200).send('New Book Added!')
    },
    update:(req, res) => {
        let { id } = req.params
        let { title, author } = req.body

        books.map( (element) => {
            if( element.id === parseInt(id)){
                element.author = author
                element.title = title
                element.id = id
                return element

            }
        } )

        return res.status(200).send(books)
    },
    delete: ( req, res ) => {
        let index = null;
        books.forEach((book, i) => {
          if(book.id === Number(req.params.id)) index = i;
        })
        books.splice(index, 1)
        res.status(200).send( books );
      }
};