import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member';

ReactDOM.render(
    <Family>
        <Member name='Natan' lastName='Silva' />
        <Member name='Jonas' lastName='Silva' />
        <Member name='Diones' lastName='Silva' />
    </Family>,
    app
)