import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
//function component
const HomePage = () => (
    <div className='homepage'>
        <Directory />
    </div>
);

export default HomePage;