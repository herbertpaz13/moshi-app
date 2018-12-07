import React, { Component } from 'react';
import $ from 'jquery';
import moshi from '../assets/images/Moshi_trans.png';
import moshi1 from '../assets/images/moshi1.png';
import moshi2 from '../assets/images/moshi2.png';
import moshi3 from '../assets/images/moshi3.png';
import moshi4 from '../assets/images/moshi4.png';
import moshi5 from '../assets/images/moshi5.png';
import moshi6 from '../assets/images/moshi6.png';
import './Picture.css'

class PicturePage extends Component {
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

        $("#image1").click(function(){
            $("#image").attr('src',moshi1);
        });
        $("#image2").click(function(){
            $("#image").attr('src',moshi2);
        });
        $("#image3").click(function(){
            $("#image").attr('src',moshi3);
        });
        $("#image4").click(function(){
            $("#image").attr('src',moshi4);
        });
        $("#image5").click(function(){
            $("#image").attr('src',moshi5);
        });
        $("#image6").click(function(){
            $("#image").attr('src',moshi6);
        });
    }

    render() {
        return (
            <div>
                <ul id="navs">
                    <img id="image" src={moshi} alt="moshi" />
                    <li ></li>
                    <li className="principal">
                        <div id="image1">
                            <i className="material-icons" style={{fontSize:'50px', marginTop: '25px'}}>looks_6</i>
                        </div>
                    </li>
                    <li className="principal">
                        <div id="image2">
                            <i className="material-icons" style={{fontSize:'50px', marginTop: '25px'}}>looks_5</i>
                        </div>
                    </li>
                    <li className="principal">
                        <div id="image3">
                            <i className="material-icons" style={{fontSize:'50px', marginTop: '25px'}}>looks_4</i>
                        </div>
                    </li>
                    <li ></li>
                    <li className="principal">
                        <div id="image4">
                            <i className="material-icons" style={{fontSize:'50px', marginTop: '25px'}}>looks_one</i>
                        </div>
                    </li>
                    <li className="principal">
                        <div id="image5">
                            <i className="material-icons" style={{fontSize:'50px', marginTop: '25px'}}>looks_two</i>
                        </div>
                    </li>
                    <li className="principal">
                        <div id="image6">
                            <i className="material-icons" style={{fontSize:'50px', marginTop: '25px'}}>looks_3</i>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default PicturePage;