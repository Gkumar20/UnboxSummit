import React from 'react';
import { Handle, Position } from 'reactflow';

const ProcessNode = ({ data }) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-blue-500">
      <Handle type="target" position={Position.Left} className="!bg-blue-500" />
      <div className="font-bold text-sm">{data.label}</div>
      <Handle type="source" position={Position.Right} className="!bg-blue-500" />
    </div>
  );
};

export default ProcessNode;