import React from 'react'
import CardComponent from 'js/components/customer/components/card/card';


export const Home = (props) => {
    return (
        <div>
            <div className="Home-card-align">
                <CardComponent name="Reports Sent"/>
                <CardComponent  name="Next Daily Report In"/>
                <CardComponent  name="Next Weekly Report In"/>
                <CardComponent  name="Page Views" />
                <CardComponent  name="Revenue Today"/>
                <CardComponent  name="Revenue This Month"/>
                
            </div>
            <div className="home-graph">
            <p className="">Graph</p>    
            </div>
        </div>
    )
}