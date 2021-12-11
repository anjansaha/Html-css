import React from 'react'

/*function great(){
    return <h1>Hello Anjan</h1>
}*/
const Great= props =>{
    const {name, heroName}= props
    return (
    <div>
            <h1>Hello, {name}, {heroName}</h1>
            {props.children}
    </div>
     )

} 
export default Great;