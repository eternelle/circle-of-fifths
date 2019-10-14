import React from 'react';
import TableHeader from './TableHeader/TableHeader';
import TableContent from './TableContent/TableContent';

const Table = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <TableHeader header={props.data.tableHeader}/>
                </tr>
            </thead>
            <tbody>
                <TableContent content={props.data.tableContent} click={props.click}/>
            </tbody>
        </table>
    );
}

export default Table;