import { useParams } from 'react-router-dom'

import { useGetRestauranteQuery } from '../../services/api'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Cardapio from '../../components/Cardapio'

const Restaurante = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestauranteQuery(id!)

  if (restaurante) {
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

  return <h4>Carregando...</h4>
}

export default Restaurante
