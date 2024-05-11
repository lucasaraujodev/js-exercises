const Author = require("./Author")
//observe que o index não depende diretamente do Post e Comment, mas sim do Author. Depende apenas indiretamente (simplificando o uso das classes).
//

const john = new Author("John Doe")

const post = john.writePost("Título do post:", "Lorerm ipsum dolor sic...")

post.addComment("Lucas Santos", "Excelente")
post.addComment("Isaac Pontes", "Muito bom!")

console.log(john)
console.log(post)
