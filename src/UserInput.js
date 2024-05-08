import React, { useState } from 'react'

function App() {
    const [country, setCountry] = useState('')
    const [data, setData] = useState(null)

    const handleClick = async () => {
        try {
            setData(null)
            if(country==''){
                return;
            }
            const data = await (await fetch(`http://universities.hipolabs.com/search?country=${country}`)).json()
            setData(data)
        } catch (err) {
            console.log(err.message)
        }
    }

    function checkResponse(data) {
        if (data) {
            console.log(data)
            
        } else {
            return null;
        }

    }

    return (
        <div>
            <input required="required" placeholder='Enter Country' value={country} onChange={e => setCountry(e.target.value)} />
            <button type="submit" onClick={handleClick} >Search</button>
            {checkResponse(data)}
            <div>

        {data && data.map((university) => (
          <div key={university.alpha_two_code}>{university.name}</div>
        ))}

      </div>
      
        </div>
    )

}

export default App;