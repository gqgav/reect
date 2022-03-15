import React from 'react';

const Navbar = ()=>{
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons.flaticon.com/png/512/3145/premium/3145827.png?token=exp=1647329227~hmac=8b241c177d1d4a6133af2ca7753c4eb9" alt="Picture"/>
                <span style={styles.cartCount}>3</span>
            </div>
        </div>
    )
}

const styles = {
    cartIcon:{
        height:32,
        marginRight:20,
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    cartIconContainer:{
        positiong:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:'0'
    }
}
export default Navbar