import React, { Component } from 'react';
import pdf from '/Users/rileyneher/my-app/src/Riley Neher Cover Letter.pdf';
import pdf2 from '/Users/rileyneher/my-app/src/Riley Neher Resume1 (1).pdf';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>My name is Riley Neher and I'm an undergraduate student at NYU, studying Data Science and Mathematics. I'm passionate about using data science and tech for social good, most recently through founding Hack4Impact NYU and getting involved in research involving algorithmic fairness. I would love the opportunity to work with you as a Fall 2021 intern. I'll be spending the Fall semester at NYU London, which I'm really excited for (except the rain).</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Riley Neher</span><br />
						   <span>133 East 7th Street<br />
						         New York New York, 10009
                   </span><br />
						   <span>646-706-3456</span><br />
                     <span>rn50@nyu.edu</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={pdf} target= "_blank" className="button"><i className="fa fa-download"></i>Download Cover Letter</a>
                     <a href={pdf2} target= "_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
