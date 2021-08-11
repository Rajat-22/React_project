import React,{useState,useEffect} from 'react'

function UseEffectBasic() {
    const [value,setValue] = useState(0);

    useEffect(() => {
        console.log('Call UseEffect');
        if(value>=1){                       // using the condition to show msg number 
        document.title = `New Msg(${value})`;  // to write meg on the title i.e. on top of the bar
        }
    },[value]);
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
