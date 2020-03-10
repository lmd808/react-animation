import React from 'react'
import NavBar from './nav/navBar'

function WhyHooks (){
    return(
        <div>
            <NavBar/>
             <div className="jumbotron" >
                <h2 className="display-4" style={{textAlign:"center"}}>Understanding React Hooks</h2>
                                 
           </div>
           <div className="container">
               <div className="row">
                   <div className="col">
                       <h2>Why Hooks:</h2>
                       <hr/>
                       <p>
                        If you're like me then you probably learned how to build react application through class components. 
                        However, If you're also like me then you've 100% run into the same issues with react class components what I have. 
                        The major issues being: grabing state from nested components (yikes) and monitoring state throughout the application. The latetter issue being largely due to the former problem.
                        In addition, class components result in a ton of repeat code, resulting in a large code base. 
                        It's not to say that programmers don't <em>love</em> writing the same thing over and over again... but we would like to avoid that! 
                        Further, React pre hooks had concepts that were slowly begining to grow to unmanagable proportions (a bad thing for any library or framework). 
                        <strong>These common problems are what brought about hooks. </strong>
                       </p>

                       <p>
                           So do hooks solve these problems? Why are hooks so great? 
                       </p>

                       <p>
                           Yes! Hooks solve all these problem and then some. Let's look at how we got here. 
                       </p>
                   </div>
               </div>  
               <div className="row">
                    <div className="col">
                       <h2>How Did We Get Here:</h2>
                       <hr/>
                       <p>To understand Hooks we must understand Javascript. Javascript is a unique langage in that it can mimic the properties of 
                           an class bassed object oriented programming language such as Java, while retaining having the flexibility of not being an classs based object oriented programming langage. Weird right? </p>
                        <p>It is absolutely weird, but there inlies it's power. Javascript, arguably, offers more flexibility than any other programming language. It is so flexible that a full stack application 
                            can be built using Javascript alone. That is extremely important for a few reasons: 
                        </p>
                        <ol>
                            <li>Developers can use one langage throughout an entire stack (100% speeds up dev time)</li>
                            <li>Flexibility of Javascript allows for easy implementation of new features </li>
                            <li>Massive community of users, tons of documentation, tons of growth</li>
                        </ol>
                        <p>
                            The third point on this list is the most important and largely why React hooks came about. With React's concepts begining to grow out of managable proportions, one brave github user
                            suggested something that could only be suggested in javascript. 'Why not just use a function.' Simple. The base concept: a function can take in parameters (or not) and return <em>something</em>(or not) that can 
                         be used <em>somewhere</em> (or not). Another thing to keep in mind is what function can interupt. In ReactJS... functional components (components that can use hooks have to be functions) do not interupt class components.
                         This means legacy code will not be interupted by the addition of functional components. 

                        </p>
                    </div>
               </div>  
               <div className="row">
                    <div className="col">
                       <h2>Resources:</h2>
                   </div>                   
                </div>    
                <div className="row">
                    <div className="col">
                       <h2>Examples:</h2>
                   </div>  
                </div>
           </div>
        </div>

    )

}

export default WhyHooks