const db = require("../utils/database");

// const posts = [];

class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    save() {
        // posts.push(this);
        return db.execute(
            "INSERT INTO posts (title, content) VALUES (?, ?)",
            [this.title, this.content]);
    }

    static getAll() {
        // return posts;
        return db.execute("SELECT * FROM posts");
    }

    static getById(id) {
        return db.execute("SELECT * FROM posts WHERE id=?", [id])
    }
}

module.exports = Post;