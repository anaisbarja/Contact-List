import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
    {/* use a ternary to conditionally render contactlist or selectedContact 
    don't worry about testing yet!*/}
    {selectedContactId?<p>{selectedContactId}</p>:
    <ContactList setSelectedContactId={setSelectedContactId}/>}

    {/* // if we are showing all, render ContactList
      <ContactList/>
    // otherwise, if we click on contact, render selectedContact
    // <SelectedContact/> */}
    </>
  )
}

export default App
