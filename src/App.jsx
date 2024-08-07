import Footer from './components/Footer'
import SideBar from './components/SideBar'
import Main from "./components/MainPage"
import { useState } from 'react'

// build a project out of subconents, where each component is of related logic
// each component returns a jsx element - html that allows js to be written into it
// each component is a function
// wrap in {} to make this java script interactive
// can insert java script into html
// need to render all the components in this component, to 
//difference between self closing tag and ...
function App() {
  // state is a variable used for managing interactivity
  // props allow components to interact
  // handle toggle model is passed down as a prop
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal(){
    setShowModal(!showModal)
  }
  return (
    <>
    <Main /> 
    {showModal && (
    <SideBar/>
    )} 
    <Footer handleToggleModal={handleToggleModal}/> 
    </>
  )
}

export default App
