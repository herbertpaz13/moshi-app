import React, { Component } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import moshi from '../assets/images/Moshi.jpg';


class LoginPage extends Component {
    render(){
        return(
            <div className="has-text-centered">
                <img src={moshi}  alt="moshi" />
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <div class="field">
                        <div class="grid-container">
                            <input class="input is-primary" style={{marginLeft: '5px'}} placeholder="Nombre"></input>
                            <span className="button city-button is-primary" style={{height: '38px'}}>
                                <i className="material-icons">mic</i>
                            </span>
                        </div>  
                    </div>
                </div>
                <br/>
                
                <div className="buttons-container">
                    <Link to="/navigate">
                        <span onClick={this.props.login} className="button city-button is-primary">
                            Ingresar
                        </span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default LoginPage;