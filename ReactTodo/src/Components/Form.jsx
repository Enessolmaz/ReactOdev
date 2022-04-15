import React,{useState} from 'react'

function Form({addVeriler, veriler}) {

    const [deger, setDeger] = useState({
            tamIsim : '',
            cepNum : ''
    });

        // PROTOTURK 
    let notification = (msg) => {
       
        let old_div = document.querySelector('.alert');
        if (old_div){
            old_div.parentNode.removeChild(old_div);
        }
    
        let div = document.createElement('div');
        div.className = 'alert';
        div.innerHTML = msg;
        document.body.appendChild(div);
    
        setTimeout(() => div.classList.add('active'), 1);
        setTimeout(() => div.classList.remove('active'), 1000);
    
    }

    const inputChange = (e) => {
            setDeger({...deger, [e.target.name]: e.target.value })      
    }

    const addClick = (e) => {

        e.preventDefault();
        
        if(deger.tamIsim === '' || deger.cepNum === ''){
            notification('Lütfen Eksiksiz Doldurunuz.');
            return false
        }
       
                addVeriler([...veriler, deger])
                notification('Hoşgeldiniz' + " " + deger.tamIsim);
               setDeger({tamIsim : '', cepNum : ''})
                
       

    }

  return (
    <div className='form'>
                <div>
                    <input  
                    name='tamIsim' 
                    onChange={inputChange} 
                    type="text" 
                    value={deger.tamIsim}
                    placeholder='Fullname'/>
                </div>
                <div>
                    <input 
                     name='cepNum'
                     onChange={inputChange}
                     type="number"
                     value={deger.cepNum}
                     placeholder='Telefon Numaranız' />
                </div>
                <div className='btnClass'>
                    <button className='addClick' onClick={addClick}>Ekle</button>
                </div>
        
        </div>
  )
}

export default Form