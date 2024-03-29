const express = require('express');
const userRouter = require('./routes/user.route');
const loginRouter = require('./routes/login.route');
const categoryRouter = require('./routes/category.route');
const blogPostsRouter = require('./routes/blogPost.route');

const app = express();

app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', blogPostsRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
