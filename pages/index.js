import AppHead from '../components/Head';
import About from '../components/About'
import Content from '../components/Content/index'
import Main from '../components/Main/index'
import Header from '../components/Header/index'
import Hero from '../components/Hero/index'
import Footer from '../components/Footer/index'
import WorkedWith from '../components/WorkedWith/index'


import styles from '../styles/app.module.scss'
import WorkWithMe from '../components/WorkWithMe';

export default function Home() {
  return (
    <>
      <AppHead />
      <Main>
        <Header />
        <Content className={styles.page}>
          <Hero />
          <WorkedWith />
          <About />
          <WorkWithMe />
        </Content>
        <Footer />
      </Main>
    </>
  )
}
