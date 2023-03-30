const db = require('../util/database');
// const posts = [
//   {
//     titulo: 'Primer post',
//     contenido: 'Contenido del primer post',
//     imagen: 'imagen.jpg',
//   },
//   {
//     titulo: 'Segundo post',
//     contenido: 'Contenido del segundo post',
//     imagen:
//       'https://play-lh.googleusercontent.com/FR7xxrZQQ8iYITW0QXs0Y5uK6cJ92PsPJ3g8Q3cXXuMvSIfkJUinysil0_HjUsjDig',
//   },
// ];

module.exports = class Post {
  constructor(nuevoPost) {
    this.titulo = nuevoPost.titulo;
    this.contenido = nuevoPost.contenido;
    this.imagen =
      nuevoPost.imagen ||
      'https://bulma.io/images/placeholders/1280x960.png';
  }

  save() {
    return db.execute(
      'INSERT INTO posts (titulo, contenido, imagen) VALUES (?, ?, ?)',
      [this.titulo, this.contenido, this.imagen]
    );
  }

  static fetchAll() {
    return db.execute('SELECT * FROM posts');
  }

  static fetchOne(id) {
    return db.execute('SELECT * FROM posts WHERE id = ?', [id]);
  }
};
