import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../component/common/Navbar'
import Login from './login'

export default function Home() {
  return (
    <>
      <Navbar />
      <Login />
    </>
  )
}
