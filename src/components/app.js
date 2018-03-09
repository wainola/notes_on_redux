import React from 'react';
import List from './list';

// Sintax () => () return literal object
const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2> Articles </h2>
            <List />
        </div>
    </div>
);

export default App;