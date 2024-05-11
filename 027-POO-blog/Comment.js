class Comment {
    constructor(username, content) {
        this.username = username
        this.content = content
        this.createdAt = new Date() // objeto global "Date" para indicar quando o post foi realizado
    }
}

module.exports = Comment