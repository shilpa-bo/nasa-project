import Footer from './components/Footer'
import SideBar from './components/SideBar'
import Main from "./components/MainPage"
import { useEffect, useState } from 'react'
// build a project out of subconents, where each component is of related logic
// each component returns a jsx element - html that allows js to be written into it
// each component is a function
// wrap in {} to make this java script interactive
// can insert java script into html
// need to render all the components in this component, to 
//difference between self closing tag and ...
  // state is a variable used for managing interactivity
  // props allow components to interact
  // handle toggle model is passed down as a prop
//USEeffect HOOK: fetch data from API
//takes arrow function as an input, and the dependency array
//blank dependency array: run this function, when our page loads
//if we have a variable, function only gets executed when the variable changes


function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal(){
    setShowModal(!showModal)
  }

  useEffect(() => {
    //arrow function
    async function fetchAPIData(){
      const url = 'https://api.nasa.gov/planetary/apod' +`?api_key=${NASA_KEY}` 
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear() //if we get here, then the today key does not work

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
      }
      catch(err){
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
    {data ? (<Main data={data}/>) : (
        <div className="loadingState"> 
          <i className='fa-solid fa-gear'></i>
        </div> 
    )}    
    {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal}/>
      )} 
    {data && (    
        <Footer data={data} handleToggleModal={handleToggleModal}/> 
    )}    
</>
  )
}

export default App


/*
WHAT IS THIS PROJECT:
wbat can I do do 
*/