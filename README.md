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

#### Development

- [Nodemon](https://www.npmjs.com/package/nodemon): `nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected`
- [Jest](https://www.npmjs.com/package/jest): `Complete and ready to set-up JavaScript testing solution.`
- [Supertest](https://www.npmjs.com/package/supertest): `Supertest makes HTTP assertions easy via superagent.`

# Install dependencies
yarn install

# Starts express server using nodemon
yarn server
```

# **Table of Contents**

- [Summary Table of API Endpoints](#summary-table-of-api-endpoints)
- [Auth Routes](#auth-routes)
  - [Login User](#login)
  - [Register User](#register)

# **SUMMARY TABLE OF API ENDPOINTS**

| Table | Method | Endpoint           | Description                                                                                                                                                                                    |
| ----- | ------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| users | POST   | /register | Creates a new `user` profile using the information sent inside the `body` of the request and returns a message along with the new `user` and a JSON Web Token in the `body` of the response.   |
| users | POST   | /api/auth/login    | Uses the credentials sent inside the `body` to authenticate the user. On successful login, returns a message with the `user` profile and a JSON Web Token token in the `body` of the response. |

# AUTH ROUTES

## **REGISTER**

### **Registers a user**

_Method Url:_ `/api/auth/register`

_HTTP method:_ **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       		 	| type   | required | description    |
| ---------------------------- 	| ------ | -------- | -------------- |
| `userid` 	 	 	| String | Yes      | Must be unique |
| `premium_member` 	 	| Boolean| No       |                |
| `numberofsavedlocations` 	| Integer| No       | defaults to 0  |
| `created_at` 	 		| String | No       | automatic      |

#### Response

##### 201 (Created)

> If you successfully add a user the endpoint will return an HTTP response with a status code `201` and a body as below.

_example:_

```

{
  "userid": "john"
}

```

"Welcome john, you have successfully registered"

```

##### 400 (Bad Request)

> If you are missing a userid field, the endpoint will return an HTTP response with a status code `400` and a body as below.

_example:_

```

'Please enter a userid.'

```

##### 401 (Unauthorized)

> If you enter a username that has already been taken for registration, the endpoint will return an HTTP response with a status code `401` and a body as below.

_example:_

```

{
"err": {
"errno": 19,
"code": "SQLITE_CONSTRAINT"
},
"message": "This userid is not available. Please pick a different userid"
}

```

##### 500 (Internal Server Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code `500` and a body as below.

_example:_

```

{ message: "A server error has occurred. Please try again later." }

```



# Data Schema
![Data Schema](./schema.png)

# AUTH ENDPOINTS

see Auth0

# 📌 PINS ENDPOINTS

## POST save pin 📬 
`/:id/pins`

## PUT edit pin 🔨 
`/:id/pins/:id`

## GET pin by id 🎯 
`/:id/pins/:id`

## DELETE pin ✂️ 
`/:id/pins/:id`
