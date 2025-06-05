/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from "reactflow";
import { initialEdges, initialNodes } from "../../mockdata";
import "reactflow/dist/style.css";
import { useEffect } from "react";

type GraphVisualiserProps = {
  nodesToHighlight?: string[];
};

const GraphVisualiser = ({ nodesToHighlight }: GraphVisualiserProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const highlightNodes = (nodesToHighlight: string[]) => {
    if (!nodesToHighlight || nodesToHighlight.length <= 1) {
      return;
    }
    const highlightedNodes = nodes.map((node) => {
      return {
        ...node,
        style: {
          ...node.style,
          border: nodesToHighlight.includes(node.id)
            ? "2px solid #003366"
            : "1px solid #ccc",
          boxShadow: nodesToHighlight.includes(node.id)
            ? "0 0 15px #333"
            : "none",
        },
      };
    });
    setNodes(highlightedNodes);
  };

  useEffect(() => {
    highlightNodes(nodesToHighlight || []);
  }, [nodesToHighlight]);
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default GraphVisualiser;
