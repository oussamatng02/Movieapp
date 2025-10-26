Proyecto desarrollado en **Node.js + Express + MongoDB Atlas**.  
Permite gestionar un catálogo de películas (**movies**), usuarios (**users**) y sus películas favoritas (**bookmarks**).

La API implementa operaciones CRUD completas y relaciones entre usuarios y películas

Ejecución del proyecto

1- Instalar dependencias
Desde la raíz del proyecto:

npm install

Y Luego:

npm start

Se muestra alli :
Conectado correctamente a MongoDB Atlas

2- Configurar la base de datos
MONGODB_CLUSTER_URI="mongodb+srv://oussamaolbrd_db_user:kaIlRnhdH6t9bNwy@cluster0.cha6bwp.mongodb.net"
MONGODB_DATABASE_NAME="ejemploMovies"
PORT=3000

3- El servidor quedará disponible en:
http://localhost:3000

4- Endpoints disponibles

--Movies
| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| GET | `/movies` | Lista todas las películas |
| GET | `/movies/:id` | Obtiene una película concreta |
| POST | `/movies` | Crea una nueva película |
| PUT | `/movies/:id` | Actualiza una película existente |
| DELETE | `/movies/:id` | Elimina una película |



--Users
| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| GET | `/users` | Lista todos los usuarios |
| GET | `/users/:id` | Obtiene un usuario |
| POST | `/users` | Crea un nuevo usuario |
| PUT | `/users/:id` | Actualiza un usuario |
| DELETE | `/users/:id` | Elimina un usuario |



--Bookmarks
| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| GET | `/bookmarks/:userId` | Lista los favoritos de un usuario |
| POST | `/bookmarks` | Añade un favorito (`userId`, `movieId`) |
| DELETE | `/bookmarks/:id` | Elimina un favorito |


Ejemplo de Ejecucion:

Se arranca el servidor en un terminal con npm start 
luego se abre en otro terminal y se ejecuta los comandos que estan indicados abajo para operaciones DE CRUD

Para movie:

leer:

curl -X GET http://localhost:3000/users

Update:

curl -X PUT http://localhost:3000/users/68fe2614eeaeb976106f1389 \
-H "Content-Type: application/json" \
-d '{"name":"Oussama Actualizado","password":"5678"}'

//68fe2614eeaeb976106f1389 <- es id de user se ha sacado desde la bbdd o se puede encontarla en esta ruta: http://localhost:3000/users


Delete:

curl -X DELETE http://localhost:3000/users/68fe2614eeaeb976106f1389


-!!!! Ejmeplo para bookmarks:

-id movie :68fe2644eeaeb976106f138d
-id user: 68fe27184ec89e534f891d1c

se ejecuta asi:

curl -X POST http://localhost:3000/bookmarks \
-H "Content-Type: application/json" \
-d '{"userId":"68fe27184ec89e534f891d1c","movieId":"68fe2644eeaeb976106f138d"}'

para consultar:
http://localhost:3000/bookmarks/68fe27184ec89e534f891d1c

POST /bookmarks 201 168.522 ms - 115
GET /bookmarks 404 0.557 ms - 148
GET /bookmarks/68fe27184ec89e534f891d1c 200 303.815 ms - 182
GET /favicon.ico 404 0.196 ms - 150



SE muestra asi en terminal donde se ha arrancado el servidor:

Conectado correctamente a MongoDB Atlas
POST /users 400 140.743 ms - 131
POST /users 201 132.506 ms - 112
POST /users 201 126.899 ms - 119
POST /users 201 132.074 ms - 118
POST /users 201 134.027 ms - 114
POST /users 201 231.822 ms - 118
POST /users 201 132.859 ms - 110
POST /movies 201 124.597 ms - 122
POST /movies 201 112.127 ms - 125
POST /movies 201 122.335 ms - 120
POST /movies 201 113.961 ms - 118
POST /movies 201 131.730 ms - 124
POST /movies 201 133.112 ms - 118
POST /movies 201 134.331 ms - 128
POST /movies 201 132.216 ms - 122
POST /movies 201 130.645 ms - 117
POST /movies 201 124.534 ms - 128
POST /movies 201 119.730 ms - 133
GET /users 200 122.916 ms - 806
GET /movies 200 129.654 ms - 1459
GET /favicon.ico 404 1.094 ms - 150
PUT /users/68fe2644eeaeb976106f138d-H 400 3.581 ms - 127
GET /users 200 154.476 ms - 806
GET /favicon.ico 404 0.346 ms - 150
PUT /users/6730457c3f3a45b3e8c0e4a7 404 154.449 ms - 35
PUT /users/68fe27174ec89e534f891d1a-H 400 0.880 ms - 127
GET /users 304 141.550 ms - -
GET /favicon.ico 404 0.253 ms - 150
GET /users/68fe2614eeaeb976106f1389 200 135.537 ms - 107
PUT /users/68fe2614eeaeb976106f1389 200 162.364 ms - 119
DELETE /users/68fe2614eeaeb976106f1389 200 159.081 ms - 31


Asi se hace lo mismo para movies lo que se cambia es la ruta se debe ser asi:
http://localhost:3000/movies