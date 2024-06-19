import React from 'react';
import styled from 'styled-components';

const Userdetails = () => {
  return (
    
      <Wrapper>
        <div className='contant'>
            <div className='admin'>
                <div className='admin-table'>user details</div>
                <button className='btn add-btn'>add the user
                <a href="https//www.google.com" src=""></a>
                </button>
            </div>
        </div>
      </Wrapper>
    
  );
}
const Wrapper = styled.div`
margin:1rem 3.2rem;

.contant {
ul{
  
    list-style-type:none!important;
    display:flex;
  }
}
`;

export default Userdetails;





