import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../component/common/Navbar'
import Login from './login'
import ProductCard from '../component/product/ProductCard'
import ProductList from '../component/product/ProductList'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecom site</title>
      </Head>
      <Navbar />
      {/* <Login /> */}
      <ProductList />
    </>
  )
}
