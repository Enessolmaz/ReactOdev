import React from 'react'
import '../App.css';
import  {useState} from 'react';

function List({veriler}) {

  const [filterText, setFilterText] = useState('');

  const filtered = veriler.filter((item) => {
    return Object.keys(item).some((i) => 
        item[i].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div>             
            <ul>
            <input className='filtered' 
          value={filterText} 
          onChange={(e) => setFilterText(e.target.value)} 
          type="text" 
          placeholder='Filter'/>

            <h3 className='veriSayisi'>Total :  {veriler.length} </h3>
                {
                    filtered.map((item, key) => <li key={key}>
                      <span>
                      {item.tamIsim}
                      </span>
                      <span>
                    {item.cepNum}
                    </span>                   
                    </li>)                 
                }

            </ul>
        </div>
  )
}

export default List