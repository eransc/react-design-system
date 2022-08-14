import React from 'react';
import ReactDOM from 'react-dom';

import { Text, Margin, Select } from '@cgweb/react';

import '@cgweb/scss/lib/Utilities.css';
import '@cgweb/scss/lib/Margin.css';
import '@cgweb/scss/lib/Select.css';
import '@cgweb/scss/lib/Text.css';
import '@cgweb/scss/lib/global.css';

// ReactDOM.render(
//     <Color hexCode="#000"/>,
//     document.querySelector('#root')
// )



const options = [
    {
        label: 'Strict Black',
        value: 'strict-black'
    },
    {
        label: 'Heavenly Green',
        value: 'heavenly-green'
    },
    {
        label: 'Sweet Pink',
        value: 'pink'
    }
]
// React 18
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<div style = {{padding: '40px'}}>
//          <Select options={options} />
//      </div>)

ReactDOM.render(
    <div style = {{padding: '40px'}}>
        <Select options={options} />
    </div>
    ,
    document.querySelector('#root')
)