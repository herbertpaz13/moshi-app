import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import moshi from '../assets/images/Moshi_trans.png';

class ArtHome extends Component {
    componentDidMount(){
        (function(){
            $("#principal").ready(function(){
                $(".principal").css("z-index",0);
            });
            var li=$("#navs li"),i=li.length,n=i-1,r=150;
            $("#image").toggleClass('active');
            if($("#image").hasClass('active')){
                for(var a=0;a<i;a++){
                    li.eq(a).css({
                        'transition-delay':""+(50*a)+"ms",
                        '-webkit-transition-delay':""+(50*a)+"ms",
                        'left':(r*Math.cos(-315/n*a*(Math.PI/180))),
                        'top':(-r*Math.sin(-315/n*a*(Math.PI/180)))  
                    }); 
                }
                
            }
        })($);
        (function(){
        })($);
    }

    render(){
        return(
            <div>
                <h1 className="city-title" style={{marginTop: '-100px'}}>
                    A Crear!
                </h1>
                <br/>
                <br/>
                <ul id="navs">
                    <img id="image" src={moshi} alt="moshi" />
                    <li ></li>
                    <li className="principal" >
                        <Link to="/art" >
                            <i className="material-icons" style={{fontSize:'50px', marginTop: '25px'}}>border_color</i>
                        </Link>
                    </li>
                    <li className="principal">
                        <Link to="/art" >
                            <i className="material-icons" style={{fontSize:'50px', marginTop: '25px'}}>create</i>
                        </Link>
                    </li>
                    <li className="principal">
                        <Link to="/art" >
                            <i className="material-icons" style={{fontSize:'50px', marginTop: '25px'}}>insert_drive_file</i>
                        </Link>
                    </li>
                    <li ></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}

export default ArtHome;