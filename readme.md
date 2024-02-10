# Phonebook Backend
This backend project serves as the server-side implementation for a Phonebook web application. It is built using Node.js and the Express.js framework. The project provides APIs for managing contacts and user authentication.

# Project Overview
## Contacts API
Handles operations related to managing contacts in the phonebook.

- List Contacts: Retrieve all contacts
- Get Contact by ID: Retrieve details of a specific contact by ID
- Add Contact: Create a new contact 
- Remove Contact: Delete a contact by ID 
- Update Contact: Modify contact details by ID 
- Update Contact Favorite Status: Toggle the favorite status of a contact by ID

## User Authentication API
Manages user-related operations.

- User Registration: Register a new user.
- User Login: Authenticate and receive a token.
- Get Current User: Retrieve details of the current authenticated user.
- User Logout: Log out the current user.
- Update User Subscription: Modify user subscription details 
- Update User Avatar: Change user avatar

## References

Frontend:
[**PhoneBook**](https://georgijbudik.github.io/phonebook-react)

Code:
[**Repository**](https://github.com/georgijbudik/phonebook-react)

# Getting Started
- Install dependencies: yarn install
- Set up environment variables (e.g., database connection, secret key).
- Run the server: yarn start:dev
  
# Technologies Used
Node.js, Express.js, MongoDB, JWT for authentication, bcrypt for password hashing, Gravatar for avatars, Multer for handling avatars uploads
