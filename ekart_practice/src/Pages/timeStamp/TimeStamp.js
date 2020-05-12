import React from 'react';

class Time extends React.Component {
    constructor(){
        super();
        this.state= {
            currentTime: new Date(),
        }
    }

    current () {
        this.setState({
            currentTime: new Date()
        })
    }

   componentWillMount() 
    {
        setInterval(() => this.current(),1000)
    }

    render(){
          
      

        return(
            <div>
       
             {this.state.currentTime.toLocaleTimeString()}
            </div>
        )
    }
}
export default Time;