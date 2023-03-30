const Post = require('../models/posts.model');

exports.get_nuevo = (request, response, next) => {
  response.render('add');
};

exports.post_nuevo = (request, response, next) => {
  console.log(request.body);
  const post = new Post({
    titulo: request.body.titulo,
    contenido: request.body.contenido,
    imagen: request.body.imagen,
  });
  post
    .save()
    .then(([rows, fieldData]) => {
      response.redirect('/posts');
    })
    .catch(() => {
      console.log('Error al guardar el post');
    });
};

exports.listar = (request, response, next) => {
  response.render('feed', {
    posts: Post.fetchAll(),
  });
};
