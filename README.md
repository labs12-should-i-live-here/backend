# Backend

Deployed on https://labs12.herokuapp.com/

# **Technologies**

#### Production

- [Express](https://www.npmjs.com/package/express): `Fast, unopinionated, minimalist web framework for Node.js`
- [Body parser](https://www.npmjs.com/package/body-parser): `Parse incoming request bodies in a middleware before your handlers`
- [Knex](https://www.npmjs.com/package/knex): `Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use`
- [Knex-cleaner](https://www.npmjs.com/package/knex-cleaner): `Helper library to clean a PostgreSQL, MySQL or SQLite3 database tables using Knex`
- [Pg](https://www.npmjs.com/package/pg): `Non-blocking PostgreSQL client for Node.js.`
- [Sqlite3](https://www.npmjs.com/package/sqlite3): `Asynchronous, non-blocking SQLite3 bindings for Node.js.`
- [Morgan](https://www.npmjs.com/package/morgan): `HTTP request logger middleware for Node.js`
- [Cors](https://www.npmjs.com/package/cors): `CORS is a Node.js package for providing a Connect/Express middleware that can be used to enable CORS`
- [Helmet](https://www.npmjs.com/package/helmet): `Helmet helps you secure your Express apps by setting various HTTP headers`
- [Dotenv](https://www.npmjs.com/package/dotenv): `Dotenv is a zero-dependency module that loads environment variables from a .env file`
- [Jsonwebtoken] (https://www.npmjs.com/package/jsonwebtoken): `An implementation of JSON Web Tokens`
- [Stripe] (https://stripe.com/docs/libraries#node) `Stripe allows individuals and businesses to make and receive payments over the Internet.` 

#### Development

- [Nodemon](https://www.npmjs.com/package/nodemon): `nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected`
- [Jest](https://www.npmjs.com/package/jest): `Complete and ready to set-up JavaScript testing solution.`
- [Supertest](https://www.npmjs.com/package/supertest): `Supertest makes HTTP assertions easy via superagent.`

# Install dependencies
yarn install

# Starts express server using nodemon
yarn server


# Data Schema
![Data Schema](./schema..png)


# AUTH ENDPOINTS 🔒

# **Table of Contents**
- [Summary Table of API Endpoints](#summary-table-of-api-endpoints)
- [Auth Routes](#auth-routes)
  
  - [Register User](#register)

# **SUMMARY TABLE OF API ENDPOINTS**
| Table | Method | Endpoint           	| Description                                                                                                                                                                                    |
| ----- | ----- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| users | POST  | /register 		| Creates a new `user` profile using the information sent inside the `body` of the request and returns a message along with the new `user` and a JSON Web Token in the `body` of the response. If user already exists in database, a token will be sent in the body of the response to allow user access during the session.
| users | GET	| /register		| Returns the full list of users in the database along with their attributes.
| users | GET	| /register/:userid	| Returns the user along with its attributes of the user with matching userid.
| users | PUT	| /register/:userid	| Will update the premium_member or numberofsavedlocations attribute or both with the information sent in the content of the `body` of the user with matching userid.


# AUTH ROUTES

## **REGISTER**


### **Registers a user**
_Method Url:_ `/register`
_HTTP method:_ **[POST]**

#### Headers
| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body
| name       		 	| type     | required | description        |
| ------------------------------| -------- | -------- | ------------------ |
| `userid` 	 	 	| String   | Yes      | Must be unique     |
| `premium_member` 	 	| Boolean  | No       | defaults to false  |
| `numberofsavedlocations`	| Integer  | No       | defaults to 0      |
| `created_at` 	 	        | String   | No       | automatic          |

#### Response
##### 201 (Created)
> If you successfully add a user the endpoint will return an HTTP response with a status code `201` and a body as below.
_example:_
```

{
    "userid": "Mickey",
    "id": [
        8
    ],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiTWlja2V5IiwidXNlcm5hbWUiOiJ0YXlsb3IiLCJpYXQiOjE1NTg0OTI4NDUsImV4cCI6MTU1ODc3MzY0NX0.tcQuxc1EzJQ_mEokJT7Tbmc9cDZXhhBdgWfX1gi7LIE"
}
```

##### 200 (User Authorized)
> If the user has previously registered, the endpoint will return an HTTP response with a status code `200` and a body as below.
_example:_
```

{
    "userid": "Kamal",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiS2FtYWwiLCJ1c2VybmFtZSI6InRheWxvciIsImlhdCI6MTU1ODYzNzc0MiwiZXhwIjoxNTU4OTE4NTQyfQ.m49KLfRPZkPD63rkZLmazZCPYFTxTM9KSNFsEx0P3Pk",
    "message": "Welcome back."
}
```


##### 400 (Bad Request)

> If you are missing a userid field, the endpoint will return an HTTP response with a status code `400` and a body as below.
_example:_

```
'Please enter a userid.'
```



##### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.
_example:_

```
{ message: "A server error has occurred. Please try again later." }
```

---



## GET register : "Server is ready. Create a username and password to register."
`/register/`

## GET user by id
`/register/:id`

## GET login : "Server is ready. Create a username and password to register."
`/login/`


# PAYMENT ENDPOINT 💸

## GET  message: "Hello Stripe checkout server!"
`/payment/`

## POST payment
`/payment/`

# 📌 PINS ENDPOINTS

## POST save pin 📬 
`/pin/pins`

## PUT edit pin 🔨 
`/pin/pins/:id`

## GET pin by id 🎯 
`/pin/pins/:id`

## DELETE pin ✂️ 

`/pin/pins/:id`


*Stripe* 
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
  
  POST to /payment
  form pops up requiring Email and Card information

