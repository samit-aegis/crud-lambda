# crud-lambda
A Crud API that uses AWS Lambda and API Gateway

You can test this API on this link: https://5key2inswd.execute-api.ap-south-1.amazonaws.com/test <br>
This API can recieve request of ANY Http Method.

With every request to the API, you need to send a raw JSON body with it that looks like this.
```JSON
{
    "data": {
        "id": NUMBER,
        "name": STRING,
        "role": STRING
    },
    "path": STRING,
    "httpMethod": STRING
}
```

There are 4 paths that one can choose from, they are defined below ⬇️

## /insert-user
- Used to insert new user details in the database.
- ```path``` is ```/insert-user```
- ```httpMethod``` is ```POST```
- You need to send ```data``` of the new user along with the request.

For example:
```JSON
{
    "data": {
        "name": "Samit",
        "role": "SDE Intern"
    },
    "path": "/insert-user",
    "httpMethod": "POST"
}
```

## /get-user
- Used to fetch user details from the database.
- ```path``` is ```/get-user```
- ```httpMethod``` is ```GET```
- You need to send ```id``` of the user along with the request.

For example:
```JSON
{
    "data": {
        "id": 1
    },
    "path": "/get-user",
    "httpMethod": "GET"
}
```

## /update-user
- Used to update user details in the database.
- ```path``` is ```/update-user```
- ```httpMethod``` is ```PATCH```
- You also need to send ```id``` of the user along with the details of the user.

For example:
```JSON
{
    "data": {
        "id": 1,
        "role": "Associate SDE"
    },
    "path": "/update-user",
    "httpMethod": "PATCH"
}
```

## /delete-user
- Used to delete user details from the database.
- ```path``` is ```/delete-user```
- ```httpMethod``` is ```DELETE```
- You need to send ```id``` of the user.

For example:
```JSON
{
    "data": {
        "id": 1,
    },
    "path": "/delete-user",
    "httpMethod": "DELETE"
}
```
