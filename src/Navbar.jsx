import React from 'react';

const Navbar = () => {
  return(
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
      <img style={styles.cartIcon} src="https://cdn-icons.flaticon.com/png/512/3145/premium/3145827.png?token=exp=1635426012~hmac=e135fb21361717bd5149cf1399ab572a" />
      <span style={styles.cartCount}>3</span>
      </div>
    </div>
  )
}

const styles={
  cartIcon:{
    height:32,
    marginRight:20
  },
  nav:{
    height:70,
    backgroundColor:'#4267b2',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  cartIconContainer:{
    position:'relative'
  },
  cartCount:{
    background:'yellow',
    borderRadius:'50%',
    padding:'4px 8px',
    position:'absolute',
    right:0,
    top:-8
  }
}

export default Navbar;