import React, { useState } from 'react'
const Question = (props) => {
    const { title } = props;

    return (
        <div>
            <h2>{title}</h2>
            <h2>something is going on</h2>
        </div>
    )
}

export default Question