import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => {
    return(
        <section id='home'>
            <img src='/images/logo.png' alt='logo' />
            <div className='welcome'>Welcome to the cofeeshop</div>
            <Link to='/menu'>Create your order</Link>
        </section>
    );
}

export default Home;
