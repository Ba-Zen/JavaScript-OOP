class User {
  constructor(username, email) {
    // set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score++;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

const userOne = new User('harry', 'harry@hogwarts.com');
const userTwo = new User('ronald', 'ronald@hogwarts.com');
console.log(userOne, userTwo);
userOne
  .login()
  .incScore()
  .incScore()
  .logout();

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
