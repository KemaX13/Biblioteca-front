# Proyecto de Biblioteca

## Introducción
Este proyecto es una aplicación web completa para gestionar una biblioteca, desarrollada con una API REST en Java/Spring Boot y un frontend en React. La aplicación permite realizar operaciones CRUD sobre libros, así como reservar y devolver ejemplares.

## Tecnologías:
    • Backend: Java, Spring Boot, Spring Data JPA, MySQL 
    • Frontend: React, Axios 
    • Base de datos: MySQL 
    • Herramientas: Git, Maven, npm, Postman 
## Repositorio: 
[ https://github.com/cristxt/biblioteca.git ]

## Instalación
    1. Clonar el repositorio: 
       Bash
       git clone https://github.com/cristxt/biblioteca.git
    2. Instalar dependencias: 
        ◦ Backend: 
          Bash
          cd backend
          mvn clean install
        ◦ Frontend: 
          Bash
          cd frontend
          npm install
    3. Configurar la base de datos: 
        ◦ Crear una base de datos en MySQL con el nombre biblioteca. 
        ◦ Configurar las credenciales de la base de datos en el archivo application.properties del backend. 
    4. Iniciar la aplicación: 
        ◦ Backend: 
          Bash
          mvn spring-boot:run
        ◦ Frontend: 
          Bash
          npm start
       La aplicación frontend estará disponible en http://localhost:3000. 
## Estructura del Proyecto
    • Backend: 
        ◦ src/main/java/com/example/biblioteca: Contiene las entidades, repositorios, servicios y controladores. 
        ◦ src/main/resources: Contiene los archivos de configuración y plantillas. 
    • Frontend: 
        ◦ src: Contiene los componentes de React, estilos y lógica de la aplicación. 
## Funcionalidades
    • Gestión de libros: 
        ◦ Crear, leer, actualizar y eliminar libros. 
        ◦ Buscar libros por título, autor o género. 
    • Reservas y devoluciones: 
        ◦ Reservar un libro para un miembro. 
        ◦ Devolver un libro. 
    • Miembros: 
        ◦ Gestión básica de miembros (crear, leer). 
## Uso
    • API REST: 
        ◦ Documentación detallada de la API en la sección "Endpoints" de este README. 
        ◦ Utilizar Postman o cualquier otro cliente HTTP para realizar solicitudes a la API. 
    • Interfaz de usuario: 
        ◦ Interactuar con la aplicación a través de la interfaz web. 
## Endpoints de la API
    • GET /api/books: Obtener todos los libros 
    • POST /api/books: Crear un nuevo libro 
    • GET /api/books/{id}: Obtener un libro por ID 
    • PUT /api/books/{id}: Actualizar un libro 
    • DELETE /api/books/{id}: Eliminar un libro 
    • POST /api/members/{memberId}/reserve/{bookId}: Reservar un libro 
    • POST /api/members/{memberId}/return/{bookId}: Devolver un libro