import React from 'react';
import { MenuData } from "./MenuData"
import"./NavbarStyle.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false,};
    this.handleClicke = () =>{
      this.setState({clicked: !this.state.clicked})
    }
  }
  render() {
    return (
      <nav className="Navbaritems">
        <h2 className="logo">
          Best Mobiles <i className="fav fa-react"></i>
        </h2>
        <div className="menu-icons" onClick={this.handleClicke}>
          
          <i
            className={
              this.state.clicked ? "fas fa-times" : "fas fa-bars"
            }
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
};

export default Navbar;
