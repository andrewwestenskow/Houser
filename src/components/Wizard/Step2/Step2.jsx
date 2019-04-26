import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {IMG} from './../../../store'

class Step2 extends Component {
  constructor(props){
    super(props)
    const reduxState = store.getState()
    this.state={
      reduxState: reduxState,
      img: reduxState.img
    }
  }

  handleInput = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  saveChanges = () => {
    store.dispatch({
      type: IMG, payload: this.state.img
    })
  }

  render(){
    return(
      <div>STEP 2
        <input onChange={this.handleInput} type="text" name='img' value={this.state.img} />

        <Link to='/wizard/step1'>
          <button>Go back</button>
        </Link>

        <Link to='/wizard/step3'>
          <button onClick={()=>this.saveChanges()}>Next Step</button>
        </Link>
      </div>
    )
  }
}

export default Step2