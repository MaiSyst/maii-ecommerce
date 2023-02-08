import Head from 'next/head'
import Navbar from './components/navbar';

export default function Home() {
  return (
      <div>
        <Navbar/>
        <h2>Hello World</h2>
      </div>
  )
}
