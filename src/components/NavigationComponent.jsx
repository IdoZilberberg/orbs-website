import React from 'react';
import { NavLink } from 'react-router-dom';
import textContent from 'textContentLocalisation';

const NavigationComponent = () => {
    return (
        <nav className='defaultNavigationContainer'>
            <NavLink
                className='defaultNavigationMenuItem'
                activeStyle={{
                    color: 'rgb(84, 96, 149)'
                }}
                to='/about'
            >
                {textContent.navigation.about}
            </NavLink>
            <NavLink
                className='defaultNavigationMenuItem'
                activeStyle={{
                    color: 'rgb(84, 96, 149)'
                }}
                to='/vision'
            >
                {textContent.navigation.vision}
            </NavLink>
            <NavLink
                className='defaultNavigationMenuItem'
                activeStyle={{
                    color: 'rgb(84, 96, 149)'
                }}
                to='/technology'
            >
                {textContent.navigation.technology}
            </NavLink>
            <NavLink
                className='defaultNavigationMenuItem'
                activeStyle={{
                    color: 'rgb(84, 96, 149)'
                }}
                to='/clients'
            >
                {textContent.navigation.clients}
            </NavLink>
            <NavLink
                className='defaultNavigationMenuItem'
                activeStyle={{
                    color: 'rgb(84, 96, 149)'
                }}
                to='/careers'
            >
                {textContent.navigation.careers}
            </NavLink>
            <NavLink
                className='defaultNavigationMenuItem'
                activeStyle={{
                    color: 'rgb(84, 96, 149)'
                }}
                to='/team'
            >
                {textContent.navigation.team}
            </NavLink>
            <NavLink
                className='defaultNavigationMenuItem'
                activeStyle={{
                    color: 'rgb(84, 96, 149)'
                }}
                to='/news'
            >
                {textContent.navigation.news}
            </NavLink>
        </nav>
    );
};

export default NavigationComponent;
