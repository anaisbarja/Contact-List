import { useState, useEffect } from "react"

/* 
props={
    selectedContactId:5
}
*/

export default function SelectedContact({setSelectedContactId,selectedContactId}){
    const [contact, setContact] = useState(null)

    // use useEffect
    // get the single contact
    // console log it
    useEffect(()=>{
        async function getSingleContact(){
            try{
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const result = await response.json()
                console.log(result)
                // save the contact in the state variable
                setContact(result)
                // in your return, if there is a contact, display a contact card <h2>

            }catch(err){
                console.error("oh nose, couldn't fetch single contact!",err)
            }
        }
        getSingleContact()
    },[])

    return(
        <>
            <p>selected contact!</p>
            {
                contact?
                <div>
                    <p>name: {contact.name}</p>
                    <p>email: {contact.email}</p>
                    <p>username: {contact.username}</p>
                    <p>city: {contact.address.city}</p>

                    <button onClick={()=>setSelectedContactId(null)}>Go Back</button>
                    
                </div>:
                null
                // <p>nothing selected</p>
            }
        
        </>
    )
}