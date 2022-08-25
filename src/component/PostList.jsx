import React, { Component } from 'react'
import axios from 'axios';
class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       post:[],
       errorMsg:""
    }
  }
  
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').
        then(response=>this.setState(
            {post:response.data}
        )).
        catch(err=>this.setState({
            errorMsg:"Error retreving data"
        }))
    }
    render() {

    return (
      <div>
         {
           this.state.post.length > 0 ? this.state.post.map((post,index)=>{
                return <div key={post.id}>
                   <h2>
                   {post.title}
                   </h2>
                     <p>{post.body}</p>
                </div>
            }): null
         }
         {this.state.errorMsg}
      </div>
    )
  }
}

export default PostList
