import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
    <div>
      <Wrapper>
        <div>
          welcome to the page
        </div>
        <h1>admin pannel</h1>
        <section>
          <div>welcome to the page</div>
          <nav><ul className='menu-items'>
            <li><a href='/' data-item='home'>Home</a></li>
            <li><a href='/' data-item='about'>About</a></li>
            <li><a href='/' data-item='contact'>Contact</a></li>
            <li><a href='/' data-item='help'>Help</a></li>
            <li><a href='/' data-item='cart'>Cart</a></li>
            </ul></nav>
        </section>
      </Wrapper>
    </div>
  );
};
const Wrapper=styled.section`
nav{
  margin:3rem 0;
  background:#f9f9f9;
  padding:1rem 0;
}
nav .menu-items{
  list-style:none;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
}
nav .menu-items li{
  margin:1.6rem 5rem;
}
nav .menu-items li a{
  text-decoration:none;
  font-size:45px;
  font-weight:400;
  color:#8f8f8f;
  position:relative;
}
nav .menu-items li a::before{
transition:0.5s;
position:absolute;
overflow:hidden;
top:0;
left:0;
right:0;
bottom:0;
width:0;
color:#8254ff;
}

nav .menu-items li a:hover::before{
  width:100%;
  transition:all 0.5s ease-in-out;
}
@media screen and (max-width: 990px){
  nav .menu-items li{
    margin:0.6rem 0.5rem;
    color:#fff;
  }
}
`;

export default Nav;



