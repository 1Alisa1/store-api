# Store-api
This is the REST API providing functionality to operate products and their categories.

# Why?
The third-party API being used previously has closed. So I wrote my own also for educational purposes.

# How to use?
* Download source code;
* Run `npm i` to instal all dependencies;
* Configure database connection in `./db.js` config file;
* Run `npm run dev` command to start server. Default port is `8080`;


# Available routes
## Get all products
### Request
`GET /products`
```js
fetch(`http://localhost:8080/products`)
```
#### Query parametrs (can be used multiple)
| Name | Description |
| ----------- | ----------- |
| searchQuery | Used to filter products by substring in its title. Case insensitive |
| categoryId  | Used to filter products by it's `categoryId` |

### Response
```json
[
  {
    "id": ...,
    "title": "...",
    "price": "...",
    "description": "...",
    "image": "...",
    "categoryId": ...,
  },
  ...
]
```

## Get product by id
### Request
`GET /products/${id}`
```js
fetch(`http://localhost:8080/products/${id}`)
```

### Response
```json
{
  "id": ...,
  "title": "...",
  "price": "...",
  "description": "...",
  "image": "...",
  "categoryId": ...,
}
```

## Add product
### Request
`POST /products`
```js
fetch(`http://localhost:8080/products`, {
  method: "POST",
  body: {
    title: "...",
    price: "...",
    description: "...",
    image: "...",
    categoryId: ...,
  },
})
```

### Response
```json
{
  "id": ...,
  "title": "...",
  "price": "...",
  "description": "...",
  "image": "...",
  "categoryId": ...,
}
```

## Updating a product
### Request
`PUT /products`
```js
fetch(`http://localhost:8080/products`, {
  method: "PUT",
  body: {
    id: ...,
    title: "...",
    price: "...",
    description: "...",
    image: "...",
    categoryId: ...
  },
})
```

### Response
```json
{
  "id": ...,
  "title": "...",
  "price": "...",
  "description": "...",
  "image": "...",
  "categoryId": ...,
}
```

## Delete product
### Request
`DELETE /products`
```js
fetch(`http://localhost:8080/products/${id}`, {
  method: "DELETE",
});
```

### Response
```json
{
  "id": ...,
  "title": "...",
  "price": "...",
  "description": "...",
  "image": "...",
  "categoryId": ...,
}
```


## Get categories
### Request
`GET /categories`
```js
fetch(`http://localhost:8080/categories`)
```

### Response
```json
[
  {
    "categoryId": ...,
    "name": "...",
  },
  ...
]
```

## Models

### Product
```sh
{
  id: Number,
  title: String,
  price: String,
  description: String,
  image: String,
  categoryId: Number,
}
```
### Category
```sh
{
  categoryId: Number,
  name: String,
}
```

# Technologies
* NodeJS
* Express
* [PostgreSQL](https://www.postgresql.org)
