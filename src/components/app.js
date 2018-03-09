import React from 'react';
import List from './list';
import Form from './form';

// Sintax () => () return literal object
const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2> Articles </h2>
            <List />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new Artciel </h2>
            <Form />
        </div>
    </div>
);

export default App;