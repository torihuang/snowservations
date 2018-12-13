import React from 'react';
import {
  Table, tr, th
} from 'react-bootstrap';

const TableHeaders = (props) => (
  <thead>
    <tr>
      {props.headers.map((header, index) => <th className="center-align" key={`${props.title}-header-col${index}`}>{header}</th>)}
    </tr>
  </thead>
)

const TableRow = (props) => (
  <tr>
    {props.orderOfColumns.map((columnName, index) => <td key={`${props.title}-${props.rowCount}-col${index}`}>{props.rowValues[columnName]}</td>)}
  </tr>
)

const SnowTable = (props) => (
  <Table striped bordered condensed hover>
    <TableHeaders headers={props.headers} title={props.title} />
    <tbody>
      {
        props.rows.map((individualRow, index) => {
          return (
            <TableRow
              key={`${props.title}-row${index}`}
              rowValues={individualRow}
              rowCount={index}
              title={props.title}
              orderOfColumns={props.orderOfColumns} />
          )
        })
      }
    </tbody>
  </Table>
);

export default SnowTable;
