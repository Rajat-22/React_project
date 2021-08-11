import React,{useState,useEffect} from 'react'

function UseEffectBasic() {
    const [value,setValue] = useState(0);
    useEffect(() => {
        console.log('Call UseEffect');
        document.title = `New Msg(${value})`;
    });
        console.log('Render Component')
    return (
        <>
          <h1>{value}</h1>  
          <button className='btn' onClick={() => setValue(value+1)}>
              Click me
          </button>
        </>
    )
}

export default UseEffectBasic
