import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div className={navigation.state === "loading" ? "loading" : ""}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;