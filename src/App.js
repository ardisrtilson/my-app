import React, {useContext, useEffect, useState} from 'react';
import {
    Line,
    SteppedLine,
    PolyLine,
    Circle,
    Rectangle
} from 'draw-shape-reactjs';
function App() {
    return (
        <div className='App'>
            <div
                style={{
                    left: '500px',
                    height: '100vh',
                    width: '50vw',
                    position: 'relative'
                }}>
                <PolyLine
                    position='fixed'
                    points={[[45, 60], [36, 120], [400, 500], [45, 60]]}
                    color='#ff8f00'
                />
            </div>
        </div>
    );
}
 
export default App;