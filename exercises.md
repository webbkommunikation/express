### 1. Basic Route Creation

Create a route that displays a welcome message.

- Create a new route `/welcome` that returns the message `"Welcome to the API!"`.
- Ensure this route only responds to `GET` requests.
- Add another route `/goodbye` that returns `"Goodbye from the API!"`.

---

### 2. GET and POST Requests

Implement two separate routes to handle `GET` and `POST` requests.

- Create a route `/info` that only responds to `GET` requests. It should return the message `"This is an API built by <your_name_here>"`
- Create another route `/submit` that only accepts `POST` requests. This route should:
  - Parse JSON data from the request body.
  - Expect keys `title` and `year` in the JSON data.
  - Return a message confirming the received information, like `The book is, [title]! And was published in [year]"`
- If `title` or `year` is missing, return a 400 status with a message like `{"error": "Title and year are required."}`

---

### 3. Dynamic Route with Parameter Parsing

Implement a dynamic route that takes a parameter from the URL.

- Create a route `/greet/:username`, where `:username` is a dynamic segment.
- When a user visits `/greet/jane`, the response should be `"Hello, Jane!"` (replace "Jane" with any `username` given).
- Add basic validation: if `username` contains non-alphabet characters, return a `400` status with `{"error": "Invalid username."}`

Next, modify the route to accept an optional age query parameter (e.g., `/greet/jane?age=25`) and respond with `"Hello, Jane! You are 25 years old."` _if_ the age parameter is provided.

---

### 4. CRUD Operations Simulation

Simulate basic CRUD (Create, read, update and delete) operations for a collection of "users".

- Create an array `users` to store user records in the format `{"id": int, "name": str, "favorite_color": str}`.
For example users = [{"id": 1, "name": "Alice", "favorite_color": "Blue"}, {"id": 2, "name": "Bob", "favorite_color": "Red"}]
- Implement the following routes:

  1. `GET /users`: Return the full list of users.
  2. `POST /users`: Accept JSON data with `name` and `favorite_color`, assign a unique `id` to each new user, and add them to the `users` list. Return the new user data.
  3. `GET /users/:user_id`: Return the user data for the specified `user_id`. If not found, return a `404` error.
  4. `PUT /users/:user_id`: Accept JSON data to update the name and/or age of the user with the given `user_id`. Return the updated user data.
  5. `DELETE /users/:user_id>`: Remove the user with the specified `user_id` and return a confirmation message.

Note: You will not see the source code change of the list `users`. But first posting a new user and then using GET should return the new user.
- **Challenge**: Add validation to prevent duplicate names in the list and return a `409 Conflict` status if a user with the same name already exists.

- **Challenge 2**: Instead of reading/writing to the list variable. Use a .json-file.
