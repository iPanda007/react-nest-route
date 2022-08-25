import React, { Component } from 'react'
import axios from 'axios'
export class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userId:"",
        title:"",
        body:"",
      }
    }
    changeHandler =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    
    }

    submitHandler = (e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state).
        then(response=>console.log(response.data))
    }

  render() {
    const {userId,title,body} = this.state
    return (
      <div> 
         <form onSubmit={this.submitHandler}>
              <div>
                 <input type="text" placeholder="userId" name='userId' 
                  onChange={this.changeHandler}
                  value={userId}
                 />
              </div>
              <div>
                <input type="text" placeholder="title" name="title"
                onChange={this.changeHandler}
                  value={title}
                />
              </div>
              <div >
                <input type="text" placeholder='body' name="body"
                onChange={this.changeHandler}
                 value={body}
                />
              </div>
              <button>Submit</button>
         </form>
      </div>
    )
  }
}

export default PostForm
