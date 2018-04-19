import React from 'react';
import Link from 'gatsby-link';

const NavigationComponent = ({ content, pathContext }) => {
    return (
        <nav className='defaultNavigationContainer'>
            <Link
                activeStyle={{ color: '#373D6B' }}
                className='defaultNavigationMenuItem'
                to={`${pathContext}about`}
            >
                {content.about}
            </Link>
            <Link
                activeStyle={{ color: '#373D6B' }}
                className='defaultNavigationMenuItem'
                to={`${pathContext}vision`}
            >
                {content.vision}
            </Link>
            <Link
                activeStyle={{ color: '#373D6B' }}
                className='defaultNavigationMenuItem'
                to={`${pathContext}technology`}
            >
                {content.technology}
            </Link>
            <Link
                activeStyle={{ color: '#373D6B' }}
                className='defaultNavigationMenuItem'
                to={`${pathContext}clients`}
            >
                {content.clients}
            </Link>
            <Link
                activeStyle={{ color: '#373D6B' }}
                className='defaultNavigationMenuItem'
                to={`${pathContext}careers`}
            >
                {content.careers}
            </Link>
            <Link
                activeStyle={{ color: '#373D6B' }}
                className='defaultNavigationMenuItem'
                to={`${pathContext}team`}
            >
                {content.team}
            </Link>
            <Link
                activeStyle={{ color: '#373D6B' }}
                className='defaultNavigationMenuItem'
                to={`${pathContext}news`}
            >
                {content.news}
            </Link>
        </nav>
    );
};


export default NavigationComponent;

