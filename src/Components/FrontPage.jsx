import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export const FrontPage = () => {
    const styles = {
        container:
        {
            backgroundColor: 'white',
            margin: '100px',
            height: '550px',
            paddingTop: '50px',
        },
        heading:
        {
            fontWeight: 'bold',
            fontSize: '80px',
        },

        button: {
            background: "red",
            width: "250px",
            height: 60,
            fontSize: 20,
            fontWeight: "bold",
            // margin: "50px 540px",

        },
    };

    return (
        <div style={{...styles.container}}>
            <h1 style={{ ...styles.heading, marginLeft: '450px' }}>WELCOME</h1>
            <h1 style={{ ...styles.heading, marginLeft: '600px' }}>TO</h1>
            <h1 style={{ ...styles.heading, color: "red", marginLeft: '300px' }}>
                KITCHEN DELIGHT
            </h1>
            <h1 style={{ ...styles.heading, marginLeft: '500px' }}>RECIPES</h1>
            <div style={{display:"flex",margin:"50px 0px 0px 400px",gap:15}}>
            <button style={{...styles.button}}>
                <Link to="/signup" style={{ color: "white" }}>Signup
                    
                </Link>
            </button>
            <button style={{...styles.button}}>
                <Link to="/login" style={{ color: "white" }}>Login
                    
                </Link>
            </button>
            </div>
        </div>
    );
};
