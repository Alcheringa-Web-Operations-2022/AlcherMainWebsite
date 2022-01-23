import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Banner from '@pages/demo/Banner';
import From_33sec from '../routes/From_33sec';

function App() {
    return (
        <Router>
            <div>
                {/* <div
                    style={{
                        width: '100vw',
                        height: '100vh',
                    }}
                ></div> */}
            </div>
            <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/from_33sec" element={<From_33sec />} />
            </Routes>
        </Router>
    );
}

export default App;
