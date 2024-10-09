import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Restaurante as RestauranteTypes } from '../../types/Restaurante'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Cardapio from '../../components/Cardapio'

const Restaurante = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<RestauranteTypes>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) return <h3>Carregando...</h3>

  return (
    <>
      <Header type="internal" />
      <Banner
        type={restaurante.tipo}
        title={restaurante.titulo}
        background={restaurante.capa}
      />
      <div className="container">
        <Cardapio cardapio={restaurante.cardapio} />
      </div>
    </>
  )
}

export default Restaurante
