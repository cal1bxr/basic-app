import React from 'react';
import Nav from './Nav';
import { useState } from 'react';
// Example of a class component
// class Header extends React.Component {

//   state = {
//     name : 'Awesome'
//   };

//   render(){
//     return (
//       <header>
//         A header in a class
//         <br />
//         {this.state.name}
//       </header>
//     )
//   }
// }

const Header = (props) => {
  let [active, setActive] = useState('active');
  // let [keywords, setKeywords] = useState('');

  // const onChangeHandler = (event) => {
  //   setKeywords(event.target.value);
  //   const value = event.target.value === '' ? 'active' : 'notActive';
  //   setActive(value);
  // };

  return (
    <header className={active}>
      <div className='logo'>Awesome News</div>
      <input type='text' onChange={props.getKeywords} />
      <Nav />
    </header>
  );
};

export default Header;
