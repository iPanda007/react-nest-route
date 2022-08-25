import React, { Component } from 'react'

 class LifeCycleMount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"John"
      }
      console.log('lifecycle constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('lifecycle getDriveStateFromProps')
         return null;
    }
    componentDidMount(){
        console.log("lifecycle componentDidMount")
    }
    render(){
        console.log("lifecycle render")
        return <div>Mounting Lifecycle methods</div>
    }
}

export default LifeCycleMount
