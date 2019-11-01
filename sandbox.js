function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function() {
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function() {
  console.log(`${this.username} has logged out`);
  return this;
};

function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);

const userOne = new User('harry', 'harry@hogwarts.com');
const userTwo = new User('ronald', 'ronald@hogwarts.com');
const userThree = new Admin('baz', 'bazen@hogwarts.com', 'part time wizard');

console.log(userOne, userTwo, userThree);
userTwo.login().logout();

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   login() {
//     console.log(`${this.username} just logged in`);
//     return this;
//   }
//   logout() {
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   incScore() {
//     this.score++;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// class Admin extends User {
//   constructor(username, email, title) {
//     super(username, email);
//     this.title = title;
//   }
//   deleteUser(user) {
//     users = users.filter(u => u.username !== user.username);
//   }
// }

// const userOne = new User('harry', 'harry@hogwarts.com');
// const userTwo = new User('ronald', 'ronald@hogwarts.com');
// const userThree = new Admin('baz', 'bazen@hogwarts.com', 'part time wizard');

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);

// console.log(users);
// userOne
//   .login()
//   .incScore()
//   .incScore()
//   .logout();

// const userOne = {
//   username: 'katniss',
//   email: 'keverdeen@gmail.com',
//   login() {
//     console.log('the user logged in');
//   },
//   logout() {
//     console.log('the user logged out');
//   }
// };

// console.log(userOne.email, userOne.username);
// userOne.login();
