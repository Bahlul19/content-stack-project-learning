
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Stack } from './common/contentstack-api/api'

export default class Home extends Component{
    constructor() {
      super()
      this.state = { loading : true, result: null}
    }
    componentDidMount () {
      var  Query = Stack.ContentType("posts").Query()
      .toJSON()
      .find()
      .then((result) => {
        console.log(result);
        this.setState({loading : false, result:result[0]})
      })
      .catch((error) => {
        console.log(error)
      })
    }
  
    renderList (result) {
      return (
        <main>
        <div className="media-body ">
          {
            this.state.result.map((value, index) => {
              return (
             <p key={index}>{ value.title }</p>
                 )
            })
          }
        </div>
        </main>
      )
    }
    render () {
      const {loading, result} = this.state
      return (this.state.loading) ? <h1>loading...</h1> : this.renderList(result[0])
    }
  }