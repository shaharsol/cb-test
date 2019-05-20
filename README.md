# cb-test

### installation

clone the repo and then `npm install`

### run the tests

`npm test`

### run the server

`npm start` and then you can invoke endpoints using curl for example, e.g. curl http://localhost:3000/users to get users list

### notes

  * aysnc/await/promises vs callbacks - I implemented 2 endpoints with one method and the second one with the other method. async/await is more modern and considered new and advanced yet for this scenario, where no chaining of async actions is required, I personally feel the good old callback method is more clear and readable.
  * there's a warning message when running the tests. I could have solved it probably if I had put in more time, but I believe we can ignore it. 
