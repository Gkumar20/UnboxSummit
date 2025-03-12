import React from 'react';
import { Handle, Position } from 'reactflow';

const ProcessNode = ({ data }) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white/90 border-2 border-blue-200 hover:border-blue-400 transition-colors">
      <Handle type="target" position={Position.Left} className="!bg-blue-400" />
      <div className="font-medium text-sm text-gray-700">{data.label}</div>
      <Handle type="source" position={Position.Right} className="!bg-blue-400" />
    </div>
  );
};

export default ProcessNode;