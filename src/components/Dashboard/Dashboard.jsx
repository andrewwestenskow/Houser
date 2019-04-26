import React, { Component } from 'react'
import axios from 'axios'
import House from './House/House'
import { Link } from 'react-router-dom'
import './Dashboard.css'

class Dashboard extends Component {

  state = {
    houses: []
  }

  componentDidMount() {
    axios.get('/api/houses').then(res => {
      this.setState({
        houses: res.data
      })
    }).catch(err => console.log(err))
  }

  handleDelete = (id, name) => {
    axios.delete(`/api/house/${id}`).then(
      axios.get('/api/houses').then(res => {
        this.setState({
          houses: res.data
        })
      }).catch(err => console.log(err))
    ).catch(err => console.log(err))
  }

  render() {

    let house = this.state.houses.map(house => {
      return <House
        key={house.id}
        id={house.id}
        name={house.name}
        address={house.address}
        state={house.state}
        city={house.city}
        zip={house.zip}
        img={house.img}
        mortgage={house.mortgage}
        rent={house.rent}
        handleDelete={this.handleDelete}
      />
    })

    return (
      <div className='Dashboard'>

        <div className="text-button-hold">
          <h1 className='dash-text'>
            DASHBOARD
          </h1>
          <Link to='/wizard/step1'>
            <button className='add-new'>Add new property</button>
          </Link>
        </div>
          <div className="line"></div>

        {house}
      </div>
    )
  }
}

export default Dashboard