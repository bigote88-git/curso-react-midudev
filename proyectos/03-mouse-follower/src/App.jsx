import { useState, useEffect } from 'react'
import './App.css'

const FollowMouse = () => {

  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    console.log('effect', { enabled });

    const handledMove = (event) => {
      const { clientX, clientY } = event;

      setPosition({ x: clientX, y: clientY });
    }

    if (enabled)
      window.addEventListener('pointermove', handledMove);

    // en el useEffect se puede usar una funcion para que limpie
    // cuando el componente se desmonta/deja de ejecutarse
    // cuando cambian las dependencias antes de ejecutar el efecto nuevamente
    // limpia lo anterior antes de aplicar nuevamente el efecto
    // cuando se desmonta el componente
    return () => {
      console.log('cleanup');
      window.removeEventListener('pointermove', handledMove);
    }
  }, [enabled]);  

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.7,
        pointerEvents: 'none',
        boxShadow: '1px 5px 10px #09f',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <button onClick={() => { setEnabled(!enabled) }}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  );
}

function App() {

  const [ mounted, setMounted ] = useState(true);

  return (
    <main>
      {mounted && <FollowMouse />}
      <div style={{ marginTop: '10px'}}>
      <button onClick={()=> { setMounted(!mounted)}}>Toogle mounted follow mouse component</button>
      </div>
    </main>
  )
}

export default App
