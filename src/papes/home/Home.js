import React from 'react';
import { useCookies } from 'react-cookie';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Sidebar from '../../components/sidebar/Sidebar';

function Home(props) {
    const[cookies,setCookies]=useCookies(['access_token','user_name'])
    return (
       <Main>
           Xin chào {cookies.user_name}
       </Main>
    );
}

export default Home;