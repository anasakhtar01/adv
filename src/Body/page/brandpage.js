import React, { Component } from 'react'
import brandscreen1 from './brandscreen1.js'
import brandscreen2 from './brandscreen2.js'
import Modal from 'react-modal';
import './modalstyle.css';
import $ from 'jquery';
import brandpagedata from './brandpagedata.js'
import branddata from './brandpagedatajson.js'


export default class brandpage extends Component {
    constructor(props){
        super(props)
        const { params } = this.props.match
        console.log(params.number)
        var brands = branddata.data
        console.log(brands)
        let brand = brands.filter(function(brand){ console.log(brand); return brand.title==params.number});
       console.log(brand[0].showroom)
       console.log(brandpagedata)
        this.backgrounds = brand[0].photos
        this.state = { modalActive: true, imgsrc : brand[0].showroom,backgroundIndex: 0, animDuration: 1 }
      
        console.log(this.state.imgsrc)
        this.changeBackground = this.changeBackground.bind(this)
       }

       componentWillMount(){
         
        //this.setState({imgsrc: "/assets/Desigual/showroomorg.pn"})
       }

       componentDidMount(){
       // console.log(branddata.data.desigual)
        
        this.timeout = setTimeout(
          this.changeBackground,
          this.state.animDuration * 3000
        )
$(document).ready(function () {
    //select the POPUP FRAME and show it
    $("#popup").hide().fadeIn(1000);

    //close the POPUP if the button with id="close" is clicked
    $("#close").on("click", function (e) {
        e.preventDefault();
        
    });
});
        // Start counting when the page is loaded
        this.timer = setInterval(function(){ $("#popup").fadeOut(1000); }, 3000);
   }
   
   componentWillUnmount(){
    if (this.timeout) clearTimeout(this.timeout)
    // clearInterval(this.timer);
   }

   changeBackground () {
    this.setState(function ({ backgroundIndex }) {
      const nextBackgroundIndex = ++backgroundIndex % this.backgrounds.length

      return { backgroundIndex: nextBackgroundIndex }
    }, function () {
      this.timeout = setTimeout(
        this.changeBackground,
        this.state.animDuration * 3000
      )
    })
  }

  render() {
    console.log(brandpagedata)
    const { value } = this.state;
    const { params } = this.props.match
    console.log(this.state.modalActive)
    
    return (
      <div>
          {/* <h1>Hi {params.number}</h1>
        {this.state.component} */}
        <div style={{paddingLeft: 0}}>
        <img src={ this.backgrounds[this.state.backgroundIndex] } width="1366px" height="516px" />
        </div>
          <div id="popup" className="popup panel panel-primary">
        
       
          <img src={this.state.imgsrc} alt="popup" width="1300px" />
              
             
          
             </div>
       
      </div>
    )
  }
}
