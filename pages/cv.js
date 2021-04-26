import AppHead from '../components/Head';
import Content from '../components/Content/index'
import Main from '../components/Main/index'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

export default function Home() {
  return (
    <>
      <AppHead />
      <Main>
        <Header />
        <Content>
          <h1>CV</h1>
        </Content>
        <Footer />
      </Main>
    </>
  )
}
