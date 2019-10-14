import React from 'react';

const TableContent = (props) => {
    return (       
        props.content.map((item, index) => 
            <tr key={index} onClick={props.click}>
                <td>{item}</td>
            </tr>
        )
    );
}

export default TableContent;
