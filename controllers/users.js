const path = require('path');

const User = require(path.join( __dirname, '../', 'models', 'users'));

exports.getIndex = (req, res, next) => {
  User.fetchAllUsers()
    .then(([rows, fieldData]) => {
      res.render('index', {
        pageTitle: 'All Users',
        users: rows
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

exports.getAddUser = (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add New User'
  });
}

exports.postAddUser = (req, res, next) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const newUser = new User (
    null,
    userName,
    userEmail
  );
  newUser.addUser()
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
}

exports.getEditUser = (req, res, next) => {
  const userId = req.query.userId;
  User.findUserById(userId)
  .then(([rows, fieldData]) => {
    res.render('edit-user', {
      pageTitle: rows[0].name,
      userData: rows[0]
    });
  })
  .catch((err) => {
    console.log(err);
  });
}

exports.postEditUser = (req, res, next) => {
  const userId = req.body.userId;
  const userName = req.body.name;
  const userEmail = req.body.email;
  User.updatedUser(userId, userName, userEmail)
  res.redirect('/')
}

exports.postDeleteUser = (req, res, next) => {
  const userId = req.body.userId;
  User.deleteUser(userId)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
}