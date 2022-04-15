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
            
            <div className='todoBar'>
              <span className='red'></span>
              <span className='yellow'></span>
              <span className='green'></span> 
              <span className='logo'>
              
                <a target="_blank" href="https://github.com/raidenx">
                <ion-icon className='logo' name="logo-github" size="large"/>
                </a>
              
              </span>
                                    
                          </div>

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