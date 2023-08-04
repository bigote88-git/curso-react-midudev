--ESLinter : herramienta de analisis estatico para detectar codigos errados o malas practicas
	sin ejecutar tu aplicacion.
	Parser: convierte tu codigo a un Arbol de Sintasis Abstracto o AST
	 para ser interpretado por la pc
	Reglas: Logica que ayuda a determinar si el existe algun error en el codigo
	Resultado: Los resultados de las reglas que se infringieron

--Babel : convierto codigo actual de javascript a codigo compatible con version anteriores
	Parsing: transforma el codigo a un AST.
	Transformacion: usa el AST generado anteriormente para crear un nuevo AST que represente
	el codigo soportado en antiguos navegadores.
	Generacion: con el AST "nuevo" genera el codigo js equivalente.
--Prettier: formateador de codigo

-------------------------------------------------
--React
-------------------------------------------------

  Javascript Vanilla: codigo imperativo (dar instrucciones)
  React: codigo declarativo

  JSX: extension de Ecmascript basada en XML en la que describes 
  lo que quieres crear, no es HTML es JavaScript ojo!
  Componente: una funcion que devuelve un elemento, una factoria de elementos

  ** React renderiza elementos
  ** Las props y el estado deberian ser inmutables, para evitar modificar el original
     sin haber usado la propiedad correspondiente.
  ** Lo que envuelve un elemento se le denomina children
  ** Nuestra ui debe ser componetizable
  ** Se recomienda usar la prop especial children cuando queremos que el componente 
     sea mas reutilizable (agregar mas contenido)

  useState : Estado: un objeto que puede cambiar sus datos en el tiempo.
  **Un estado es un valor que cada vez que cambie va a renderizar nuevamente el 
  componente.
  **La actualizacion de los estados son asincronos
  El estado es interno a cada componente.
  useState devuelve un arreglo de dos valores:
    [0]: el valor del estado
    [1]: una funcion para actualizar el estado, se pasa solo la funcion y no la 
  ejecucion de la funcion porque solo la ejecutaremos cuando la necesitemos en el
  componente, no cuando se renderiza.
  El callback dentro del useState es basicamente una funcion que tiene que regresar
  el valor inicial del estado.
  Hook: son utilidades que añaden comportamiento/funcionalidad a tus componentes.
  **Los hook no pueden estar dentro de un condicional**

  Leer del local storage es lento, sincrono y bloquea

  DOM Virtual: React solo vuelve a renderizar la parte que que se actualizo del la UI.
  Cada vez que se actualiza el estado interno de un componente React entiende que tiene
  que volver a renderizar el componente, pero solo aquellas partes que tuvieron algun
  cambio. Otra forma de que se renderice nuevamente un componente es cuando su componente
  padre se cambia, y los hijos se vuelven a renderizar independientemente que sus props
  hayan cambiado.
  **El estado inicial solo se inicializa una vez**
  **Cuando se renderiza una lista de componentes es necesario indicarle una key

  useEffect: Nos permite ejecutar codigo arbitrario cuando el componente se monta
  en el DOM y cada vez que cambian las dependencias que le indiquemos.
  Se declara en el cuerpo del componente, se ejecuta cada vez que se renderiza el 
  componente.
  Con el useEffect controlamos cuando nos suscribimos a un efecto (evento/codigo arbitrario).
  Se hace un return de una funcion dentro del useEffect si hay que limpiar alguna suscripcion a un evento
  antes de que se vuelva a aplicar nuevamente el efecto. La funcion cleanup se ejecuta
  antes de que se desmonta el componente, antes de ejecutar nuevaemnte el efecto y cuando 
  cambian las dependencias antes de ejecutar el efecto de nuevo.

  <StrictMode> : ejecuta el componente y sus efectos para probar posibles errores. en 
  produccion no se ejecutra el StrictMode.

  Cuando se ejecuta el efecto segun las dependencias?:
  [] = array vacio, se ejecuta cuando se monta el componente.
  [a, b, ...] = cuando cambian las dependencias y se monta el componente.
  undefined = cada vez que se renderiza el componente.

  ** La funcion del useEffect siempre tiene que se sincrona.
  

  SWC: es como Babel para compilar Javascript pero mas rapido.
  Configurar Linter Standard.js
    1. npm install standard -D
    2. agregar en el packages.json la configuracion del linter:
	"eslintConfig": {
		"extends": "./node_modules/standard/eslintrc.json"
	}

  PRUEBA TECNICA REACT #1
  1. Configurar proyecto vite manualmente para react:
    1.1. Vanilla + Javascript
    1.2. Instalar el plugin de vite para react : npm install @vitejs/plugin-react -E
    1.3. Instalar las dependencias de react y react-dom: npm install react react-dom -E
    1.4. Definir la configuracion para vite:
      1.4.1. Crear el archivo vite.config.js:
          
          import { defineConfig } from 'vite'
          import react from '@vitejs/plugin-react'

          export default defineConfig({
            plugins: [react()]
          })

    1.5. Instalar el linter y configurarlo
      1.5.1. npm install standard -D
      1.5.2. en el packages.json hay que agregar lo siguiente:

          "eslintConfig": [
            "extends": "./node_modules/standard/eslintrc.json"
          ]

  ## EXPLICACIONES CANON: el punto de entrada de mi app: 
    index.html: en el index tengo el script es donde cargo el punto de entrada de mi app (main.js).
    Como el main es el primer archivo que se va a cargar de mi app
    importamos primeramente el createRoot de react-dom, con el createRoot le indico donde quiero renderizar mi aplicacion.
    Se renombra el archivo main.js a main.jsx porque en vite los archivos .js no estan preparados para transpilar el codigo jsx

  ## CONSEJOS: 
    1. Siempre en el useEffect colocar las dependencias o el array vacio en su defecto [].
    2. Nuestra aplicacion tiene que ser incremental (es decir que se vaya viendo el progreso)
    3. Analizar los datos que nos dan antes de empezar a codear.


