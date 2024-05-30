import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
    {/* use a ternary to conditionally render contactlist or selectedContact 
    don't worry about testing yet!*/}
    {selectedContactId?<SelectedContact selectedContactId={selectedContactId}/>:
    <ContactList setSelectedContactId={setSelectedContactId}/>}

    {/* // if we are showing all, render ContactList
      <ContactList/>
    // otherwise, if we click on contact, render selectedContact
    // <SelectedContact/> */}
    </>
  )
}

export default App
