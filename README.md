# MythBots_TDC
Repositorio para el proyecto de tecnologías de desarrollo en el cliente

## Instrucciones para instalar y ejecutar el proyecto
### Requisitos previos
1. **Node.js**: Asegurate de tener instalado Node.js
```bash
node -v
npm  -v
```

2. **Angular CLI**: Instala Angular CLI de manera global si aun no lo tienes
```bash
npm install -g @angular/cli
```

### Instalacion del proyecto
3. Clona el repositorio en tu maquina local
```bash
git clone https://github.com/LOSU028/MythBots_TDC.git
```

4. Accede a la carpeta del proyecto
```bash
cd MythBots_TDC
cd MythBots
```

5. Instala las dependencias del proyecto
```bash
npm install
```

### Ejecuta el proyecto
6. Inicia el servidor local con cualquiera de las 2 opciones(con ng serve --open se abre automáticamente el servidor)
```bash
npm start
ng serve --open 
```

7. Navega a la siguiente ruta en tu navegador
```bash
http://localhost:4200
```


## Instrucciones para ejecutar la api
1. Navega a la carpeta api
2. Asegurate de instalar las dependencias
```bash
npm i
``` 
3.Hay que agregar un archivo .env únicamente dentro de api con las siguientes variables:
PORT=
DB_URL=
JWT_SECRET=

PORT y JWT_SECRET pueden tener los valores que el usuario desee, pero PORT debe ser disinto al puerto de donde se corra Angular 
En DB_URL se debe de poner la url de mongoDB correspondiente

4.Finalmente hay que correr la api:
```bash
npm run dev
```

5. La api ahora debe estar en funcionamiento, si requiere las credenciales de un usuario de prueba para login puede ser

username = test
password = G+4s/gk<Ph6;vZe7Bm:[^f