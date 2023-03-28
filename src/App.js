import React from "react"
import Main from "./Main"
import data from "./data"
import Header from "./header"
export default function App(){
    const items=data.map(item=>{
        return(
        <Main
        key={item.id}
        {...item}
        />
        )
    })
    return(
        <div className="main">
        <Header />
        <section>
        {items}
        </section>
        </div>
    )
}