import React from 'react';
import ClippedBackground from '../ClippedBackground/ClippedBackground';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function BottomOfPage() {
    return (
        <div className='BottomOfPage' style={{position: 'relative'}}>
            <Header />
            <Footer />
            <ClippedBackground className='bottom' />
        </div>
    )
}
export default BottomOfPage;