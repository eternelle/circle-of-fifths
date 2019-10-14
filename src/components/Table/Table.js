import React from 'react';
import TableHeader from './TableHeader/TableHeader';
import TableContent from './TableContent/TableContent';

const Table = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <TableHeader header={props.tableHeader}/>
                </tr>
            </thead>
            <tbody>
                <TableContent content={props.tableContent}/>
            </tbody>
        </table>
    );
}

export default Table;