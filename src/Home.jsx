import { useEffect, useState } from 'react'
import { primary_dark, site_title } from './Config'
import SlideShow from './components/SlideShow'
import SheetShow from './components/SheetShow'
import { getSheets } from './API'
import Navbar2 from './components/Navbar2'

export default function Home() {
  const load = async () => {
    const data = await getSheets()
    console.log(data)
  }

  useEffect(() => {
    load()
  })

  return (
    <>
    <Navbar2 />
    Hello
    </>
  )
}
