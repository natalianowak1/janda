import React from "react";
import "./About.css";
import about from '../../../img/about.jpg';

const About = () => {
  return (
    <div className="about" id="about">
      <h3>O mnie</h3>
            <div className='aboutBox'>
                <div className='aboutPhoto'>
                    <img alt='Agnieszka Janda' src={about}></img>
                </div>
                <div className='aboutDesc'>
                    <h2>Agnieszka JANDA<br/> <br/></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum expedita veritatis in neque fugit, consequuntur, iste similique laboriosam quaerat eaque eveniet quos soluta illo doloremque tempora corrupti tenetur? Fuga!</p>
                    <br/>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum expedita veritatis in neque fugit, consequuntur, iste similique laboriosam quaerat eaque eveniet quos soluta illo doloremque tempora corrupti tenetur? Fuga!</p> 
                    <br/>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum expedita veritatis in neque fugit, consequuntur, iste similique laboriosam quaerat eaque eveniet quos soluta illo doloremque tempora corrupti tenetur? Fuga!</p>
                </div>
            </div>
    </div>
  );
};

export default About;
