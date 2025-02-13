

import React from 'react';
import ReactDOM from 'react-dom/client';   // /client is used because of newer version



const heading2=React.createElement(
    'h2',
{
    id:'hed2'
},
' this is heading 2'
)
const heading3=React.createElement(
    'h3',
{
    id:'hed3'
},
'heading 3'
)
const div = React.createElement(
    'div',
{
    id:'innerdiv'
},
[heading2,heading3]
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)