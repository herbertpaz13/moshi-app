import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
import $ from 'jquery';
import moshi from '../assets/images/Moshi_text.png';

class NavigationPage extends Component {
    componentDidMount(){
        (function(){
            var ul=$("#image"),li=$("#navs li"),i=li.length,n=i-1,r=150;
            ul.click(function(){
                $(this).toggleClass('active');
                if($(this).hasClass('active')){
                    for(var a=0;a<i;a++){
                        li.eq(a).css({
                            'transition-delay':""+(50*a)+"ms",
                            '-webkit-transition-delay':""+(50*a)+"ms",
                            'left':(r*Math.cos(-315/n*a*(Math.PI/180))),
                            'top':(-r*Math.sin(-315/n*a*(Math.PI/180)))  
                        });
                        
                        ul.ready(function(){
                            $(".principal").css("z-index",0);
                        });
                    }
                    
                }else{
                    li.removeAttr('style');
                }
            });
        })($);
    }

    render() {
        return (
            <div>
                <ul id="navs">
                    <img id="image" src={moshi} alt="moshi" />
                    <li ></li>
                    <li className="principal" style={{opacity:'0.40'}}>
                        <Link to="/navigate" >
                            <i className="material-icons" style={{fontSize:'50px', marginTop: '25px'}}>music_note</i>
                        </Link>
                    </li>
                    <li className="principal">
                        <Link to="/home" >
                            <i className="material-icons" style={{fontSize:'50px', marginTop: '25px'}}>gamepad</i>
                        </Link>
                    </li>
                    <li className="principal">
                        <Link to="/pen" >
                            <i className="material-icons" style={{fontSize:'50px', marginTop: '25px'}}>create</i>
                        </Link>
                    </li>
                    <li ></li>
                    <li className="principal">
                        <Link to="/room" >
                            <i className="material-icons" style={{fontSize:'50px', marginTop: '25px'}}>play_arrow</i>
                        </Link>
                    </li>
                    <li></li>
                    <li className="principal">
                        <Link to="/picture" >
                            <i className="material-icons" style={{fontSize:'50px', marginTop: '25px'}}>shopping_cart</i>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavigationPage;