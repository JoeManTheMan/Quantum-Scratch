import React from 'react';
import '../App.css';

function QasmText(props)
{
    return (
        <label className="qasm-output">
            <pre>
                <code>
                    {props.qasm}
                </code>
            </pre>
        </label>
        
    );
}

export default QasmText;