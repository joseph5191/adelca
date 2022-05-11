import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/Layout/Container'
import TestStyle from '../components/TestStyle'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container>

{process.env.LASAGA}
      index
    </Container>
  )
}
