<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Descripcion

Este proyecto demuestra cómo crear un CRUD completo utilizando NestJS, TypeORM y MySQL. Podrás crear, eliminar, actualizar y consultar usuarios.

## Instalar dependencias

```bash
$ npm install
```

## compilar y correr el proyecto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Uso del proyecto

```bash
# Una vez que el servidor esté en funcionamiento, puedes interactuar con los siguientes endpoints:

$GET /users/buscar: Obtener una lista de todos los usuarios.
$GET_ID /users/:id: Obtener un usuario.
$POST /users/: Crear un nuevo usuario.
$PATCH /users/:id: Actualizar un usuario existente.
$DELETE /users/:id: Eliminar un usuario.
```

## Licencia
Este proyecto está licenciado bajo la MIT License - ver el archivo [LICENSE](LICENSE) para más detalles.
