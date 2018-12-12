import React from 'react';
import { SnowTable } from '../index';

const LayersTable = (props) => {
  const layersList = {
    headers: ['Height', 'Hardness', 'Temperature'],
    orderOfColumns: ['height', 'hardness', 'temperature'],
    rowValues: props.layers,
  };

  return (
    <SnowTable
      headers={layersList.headers}
      rows={layersList.rowValues}
      title="compress-text"
      orderOfColumns={layersList.orderOfColumns} />
  )
};

export default LayersTable;
