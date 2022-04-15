import React,{useState, useEffect} from 'react'
import './App.css';

import Form from './Components/Form'
import List from './Components/List'

function App() {

    const [veriler, setVeriler] = useState ([
      {
          tamIsim : 'Enes',
          cepNum : '  053545352'
    },
    {
      tamIsim : 'Ali',
      cepNum : '  053546324'
},
{
  tamIsim : 'Ayse',
  cepNum : '053235133'
},
{
  tamIsim : 'Asli',
  cepNum : '  054523514'
},
  
  ])

    useEffect(() => {
        
    }, [veriler])

  return (
    <div>

        <Form addVeriler={setVeriler} veriler={veriler} />
        <List veriler={veriler}/>
      
      </div>
  )
}

export default App