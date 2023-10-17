import {Container, Content} from './styles'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { FiSearch } from 'react-icons/fi'

export function Home() {
  return(
    <Container>
      <header>
        <div>
          <h1>Codelândia</h1>
          <p>Blog</p>
        </div>
        <Input 
          placeholder="Pesquisar no blog"
          icon={FiSearch}
        />
      </header>
      <Content>
        <Note 
          data={
            {
              created: "02 de jul, 2021",
              title: "Agora é oficial: o Windows 11 está ativo",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
            }
          }
          
        />
      </Content>
    </Container>
  )
}