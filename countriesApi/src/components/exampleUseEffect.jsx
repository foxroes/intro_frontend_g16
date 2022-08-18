import { useEffect, useState } from 'react'

function App () {
  const [state, setState] = useState('Mensaje de prueba')
  const [number, setNumber] = useState(0)

  // esto se ejecuta despues de que montó el componente

  // se ejecuta siempre
  /* useEffect(() => {
    setState('Mod')
  }) */

  // solo cuando se cargue la primera vez el componente
  /* useEffect(() => {
    setState('Mod 1')
  }, []) */

  // solo se ejecute cuando detecte un cambio de un estado
  /*  useEffect(() => {
    console.log('Suma')
  }, [number]) */

  return (
    <section>
      <h1>{state}</h1>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </section>
  )
}

export default App
