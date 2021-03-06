import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;

    let navStyle = {
      BackgroundColor: 'black',
      color: 'black',
    }

    let profilePicStyle = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      width: '25vh',
      height: this.width,
      borderRadius: '60vh',
      marginTop: '0px',
      marginBottom: '50px',
    }

    return (
      <React.Fragment>

      <header id="home">
         <nav id="nav-wrap" style={navStyle}>
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <img style={profilePicStyle} src="images/profilepic.jpg" alt="not available"/>
            <div className="banner-text">
               <h1 className="responsive-headline">Hi, I am {resumeData.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.role}{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="#"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}
