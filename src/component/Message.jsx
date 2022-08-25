import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super();
        this.state={
            message:"welcome to react"
        }
    }
    changeMessage(){
      this.setState({
        message:"Thank your for your visiting"
      })
    }
  render() {
     const {name} = this.props
    return (
      <div>
        {this.state.message} {name}
        <button
         onClick={()=>this.changeMessage()}
        >Visit</button>
      </div>
    )
  }
}

export default Message
