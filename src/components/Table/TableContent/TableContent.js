import React from 'react';

const TableContent = (props) => {
    return (
        props.content.map(item => 
            <tr>
                <td>{item}</td>
            </tr>
        )
    );
}

export default TableContent;
