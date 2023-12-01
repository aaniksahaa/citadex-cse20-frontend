import { useEffect, useState } from 'react'
import { primary_dark, site_title } from './Config'
import { getSheets } from './API'
import Navbar2 from './components/Navbar2'
import OptionSelector from './components/OptionSelector'
import { Center, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import SheetShow from './components/SheetShow'

export default function Citadex() {

  const [url, setUrl] = useState("")
  const [data, setData] = useState([])

  const load = async () => {
    const d = await getSheets()
    console.log(d)
    setData(d)
  }

  const handleChange = (option) => {
    setUrl(data[option])
  }

  useEffect(() => {
    load()
  })

  return (
    <>
    <Navbar2 />
    <br/>
    {/* <Center>
    <OptionSelector options={Object.keys(data)} onOptionChange={handleChange}/>
    </Center> */}
    <Tabs isLazy={false} p={2} isFitted variant='enclosed' colorScheme='purple' size='lg'>
      <TabList>
        {Object.keys(data).map((key, index) => (
          <Tab key={index}>{key}</Tab>
        ))}
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="3px"
        bg="blue.500"
        borderRadius="1px"
      />
      <TabPanels>
        {Object.keys(data).map((key, index) => (
          <TabPanel key={index}>
            <SheetShow url={data[key]}/>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
    </>
  )
}
