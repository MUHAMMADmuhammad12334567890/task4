
import React, {useState} from 'react';
import './App.css';
import Value from './components/value/Value'
 import Body from './components/body/Body';
 import products from './products'

function App() {
  const [text, setText] = useState('')
  const [brands, setBrands] = useState(products.boots)

  const text_Value = (e) => {
 
    setText(e.target.value)

    }
    const search = brands.filter(brand => brand.name.toLowerCase().indexOf(text.toLowerCase()) !== -1 )
   console.log(search)
  return (
    <>
    <div className="App">
    <Value text={text} text_Value={text_Value} />
   <Body search={search} />
    </div>

    </>
  );
}

export default App;
