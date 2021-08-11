import React,{useState} from 'react'

function UsestateCounter() {
    const [value,setValue] = useState(0);
    const complexIncrease = () => {
        setTimeout(() => {
            setValue((prevState) =>
            {
                return prevState +1;  // passing a function through the setvalue of use state
            });

            // setValue(value + 5000);  Passing hard value through the setvalue of use state
        }, 5000)
    }
    return (
        <>
         <section style={{margin: '4rem 0'}}>
             <h2>A Regular Counter</h2>
             <h1>{value}</h1>
             <button className='btn' onClick={() => setValue(value-1)}>Decrease</button>
             <button className='btn' onClick={() => setValue(value+1)}>Increase</button>
             <button className='btn'onClick={() => setValue(0)}>Reset</button>
             </section>   
             <section style={{margin: '4rem 0'}}>
                <h2>A more complex Counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={complexIncrease}>Increase Later</button>
             </section>
        </>
    )
}

export default UsestateCounter
