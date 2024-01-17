<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
npm install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **.env.example** y renombrar la copia a **.env**

6. Lenar las variables de entorno definidas en **.env**

7. Recontruir la base de datos GET

```
http://localhost:3000/api/v2/seed
```

## Stack

- MongoDB
- Nest
