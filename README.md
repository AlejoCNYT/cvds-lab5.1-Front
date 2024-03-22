<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# cvds-lab5.1-Front

## Capítulo 2: Crear un proyecto para el front end.

### 1. Configuración Inicial
Antes de comenzar, asegúrate de tener **Node.js** y **npm** instalados en tu máquina. Si aún no los tienes, descárgalos e instálalos desde [Node.js official website](https://nodejs.org/).
![](https://github.com/AlejoCNYT/cvds-lab5.1-Front/blob/main/img/Captura%20de%20pantalla%202024-02-29%20204959.png)
### 2. Creación del Proyecto React
1. **Genera un nuevo proyecto React**:
   - Abre la terminal y ejecuta el siguiente comando para crear un nuevo proyecto React usando **Create React App**:
     ```bash
     npx create-react-app react-hello-world
     ```
   - Esto creará una carpeta llamada `react-hello-world` con la estructura básica de un proyecto React.
   ![](https://github.com/AlejoCNYT/cvds-lab5.1-Front/blob/main/img/Captura%20de%20pantalla%202024-03-01%20084955.png)
2. **Navega al directorio del proyecto**:
   ```bash
   cd react-hello-world
   ```
   ![](https://github.com/AlejoCNYT/cvds-lab5.1-Front/blob/main/img/Captura%20de%20pantalla%202024-03-01%20085602.png)
   
### 3. Consumiendo el Servicio Spring Boot
1. **Crea un componente React**:
   - En la carpeta `src`, crea un nuevo archivo llamado `HelloWorld.js`.
   - Dentro de este archivo, crea un componente funcional que renderice un mensaje "Hello World".

2. **Realiza una solicitud HTTP al servicio Spring Boot**:
   - En el mismo archivo `HelloWorld.js`, utiliza la función `fetch` o una librería como **axios** para hacer una solicitud GET al servicio Spring Boot.
   - La URL de la solicitud debe ser la misma que definimos en nuestro controlador Spring Boot (por ejemplo, `http://localhost:8080/clients`).
   
3. **Renderiza la respuesta en tu componente**:
   - Cuando recibas la respuesta del servicio, muestra el mensaje "Hello World" en tu componente React.

### 4. Ejecución del Proyecto React
1. **Inicia el servidor de desarrollo**:
   - Ejecuta el siguiente comando en la terminal:
     ```bash
     npm start
     ```
     ![](https://github.com/AlejoCNYT/cvds-lab5.1-Front/blob/main/img/Captura%20de%20pantalla%202024-02-29%20220649.png)
   - Esto abrirá automáticamente tu aplicación React en el navegador en [http://localhost:3000](http://localhost:3000).
   - ![]()

2. **Verifica que el mensaje "Hello World" se muestre correctamente**:
   - Si todo funciona correctamente, deberías ver el mensaje "Hello World" en tu aplicación React.
   - ![](https://github.com/AlejoCNYT/cvds-lab5.1-Front/blob/main/img/Captura%20de%20pantalla%202024-03-22%20074624.png)
   - ![](https://github.com/AlejoCNYT/cvds-lab5.1-Front/blob/main/img/Captura%20de%20pantalla%202024-03-22%20074637.png)
   
### 5. Empaquetado y Despliegue
1. **Empaqueta tu aplicación React**:
   - Cuando estés listo para desplegar tu aplicación, ejecuta:
     ```bash
     npm run build
     ```
     ![](https://github.com/AlejoCNYT/cvds-lab5.1-Front/blob/main/img/Captura%20de%20pantalla%202024-03-07%20223258.png)
   - Esto creará una carpeta `build` con los archivos optimizados para producción.

2. **Integra tu aplicación React con Spring Boot**:
   - Copia los archivos de la carpeta `build` generada en el directorio de recursos de tu proyecto Spring Boot (por ejemplo, `src/main/resources/static`).
   - Ahora, cuando ejecutes tu aplicación Spring Boot, también servirá la aplicación React.

¡Listo! Ahora tienes un proyecto React que consume el servicio "Hello World" de Spring Boot.

## Capítulo 3: ´Configuración del CORS en ambos proyectos.

Como desarrollador fullstack con experiencia en React y Spring Boot, puedo ayudarte a configurar el **Cross-Origin Resource Sharing (CORS)** entre tus proyectos. Aquí tienes un paso a paso para habilitar CORS en un servicio "Hello, World" creado con Spring Boot:

1. **Crear un Proyecto Spring Boot**:
   - Si aún no tienes un proyecto Spring Boot, puedes crear uno utilizando [Spring Initializr](https://start.spring.io/). Asegúrate de incluir la dependencia de **Spring Web**.

     ![](https://github.com/AlejoCNYT/cvds-lab5.1-Front/blob/main/img/Captura%20de%20pantalla%202024-03-22%20054347.png)

   - Alternativamente, puedes descargar el proyecto preconfigurado desde [este repositorio](https://github.com/spring-guides/gs-rest-service-cors).

   ![](https://github.com/AlejoCNYT/cvds-lab5.1-Front/blob/main/img/Captura%20de%20pantalla%202024-03-22%20054356.png)
   ![](https://github.com/AlejoCNYT/cvds-lab5.1-Front/blob/main/img/Captura%20de%20pantalla%202024-03-22%20054500.png)

3. **Agregar la Anotación `@CrossOrigin`**:
   - En tu controlador Spring (donde defines tus endpoints), agrega la anotación `@CrossOrigin` a los métodos que deseas habilitar para CORS.
   - Por ejemplo, si tienes un endpoint `/api/hello`, puedes hacer lo siguiente:

    ```java
    import org.springframework.web.bind.annotation.CrossOrigin;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.RestController;

    @RestController
    public class HelloController {

        @CrossOrigin
        @GetMapping("/api/hello")
        public String hello() {
            return "¡Hola, Mundo!";
        }
    }
    ```

   ![](https://github.com/AlejoCNYT/cvds-lab5.1-Front/blob/main/img/Captura%20de%20pantalla%202024-03-22%20071656.png)

   - La anotación `@CrossOrigin` le indica al navegador que este endpoint es accesible desde cualquier origen.

5. **Configurar Opciones Adicionales (Opcional)**:
   - Puedes personalizar la configuración de CORS agregando más opciones a la anotación `@CrossOrigin`. Por ejemplo:

    ```java
    @CrossOrigin(origins = "http://mi-frontend.com", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
    ```

   ![](https://github.com/AlejoCNYT/cvds-lab5.1-Front/blob/main/img/Captura%20de%20pantalla%202024-03-22%20071313.png)

   - En este ejemplo, solo se permiten solicitudes desde `http://mi-frontend.com`, se aceptan todos los encabezados y se habilitan los métodos GET y POST.

6. **Prueba tu Servicio**:
   - Inicia tu aplicación Spring Boot y accede al endpoint `/api/hello` desde tu aplicación frontend (por ejemplo, una aplicación React).
     
   - Deberías poder recibir una respuesta exitosa sin errores de CORS.

      ![](https://github.com/AlejoCNYT/cvds-lab5.1-Front/blob/main/img/Captura%20de%20pantalla%202024-03-22%20071303.png)
¡Listo! Siguiendo estos pasos, habrás configurado correctamente CORS en tu servicio "Hello, World" de Spring Boot. Si tienes alguna pregunta adicional o necesitas más detalles, no dudes en preguntar. 😊
>>>>>>> 1ed073d5c3c81c1e87edc1b960621c19880b9345
