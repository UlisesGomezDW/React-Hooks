import React, {useState} from 'react'

function page() {
  const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <div>
        <p>useState with Object</p>
        <form>
        <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value})}/>

        <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value})}/>

        <p>Your first name is: {name.firstName}</p>
        <p>Your last name is: {name.lastName}</p>
        <h2>{JSON.stringify(name)}</h2>
        </form>
        </div>
    )
}

export default page
