import * as React from 'react';
import '@app/App.scss';
import Banner from '@pages/demo/Banner';

function App() {
    return (
        <div>
            <Banner />
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                }}
            ></div>
        </div>
    );
}

export default App;
