import React, { Component } from 'react';
// import Axios from 'axios';

//Css + images
import './Login.css';
import Logo from '../../assets/logoMasang.png'

class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      senha: "",
      erro: ""
    }
  }

  loginEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  loginSenha = (event) => {
    this.setState({ senha: event.target.value })
  }

  efetuarLogin = (event) => {
    //Api SpaceNeedle
  }



  render() {
    return (
      <div className="App" >
        <div style={{alignSelf:'end', position:'absolute',marginRight:'0px'}}>
          <img src={Logo} width='224' height='100' />
        </div>
      </div>
    );
  }
}

export default Login