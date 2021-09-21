import React, { Component } from 'react'
import image from './img.jpeg'
import './App.css'
    
    class App extends Component {
      state={
        name:'Mahmoud',
        imgSrc: image,
        profession:'frontEnd developper',
        skills:'HTML5 CSS3 Javascript',
        isShow: false
      }
      render() {
      const change = () => {
        this.setState({isShow:!this.state.isShow})
      } 
      const mouve=this.state.isShow;
      
        return (
          <div className="App">
            <img src={this.state.imgSrc} alt='img'></img>
            <h2>Hey... I'm {this.state.name}</h2>
            {
            mouve &&
            <div>
              <h3>I'm {this.state.profession}</h3>
              <h4>Skills: {this.state.skills}</h4> 
            </div>
            }
            <button onClick={change}>{mouve ? 'Hide' : 'Show'}</button>
          </div>
        )
      }
 }
export default App;
