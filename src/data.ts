export const data = {
    nodes: [
      {
        id: "node1",
        shape: "edge",
        x: 40,
        y: 40,
        width: 100,
        height: 40,
        label: "hello",
        attrs: {
          // body is the selector name, and the rect element is selected
          body: {
            stroke: "#8f8f8f",
            strokeWidth: 1,
            fill: "#fff",
            rx: 6,
            ry: 6,
          },
        },
      },
      {
        id: "node2",
        shape: "circle",
        x: 160,
        y: 180,
        width: 80,
        height: 80,
        label: "world",
        attrs: {
          body: {
            stroke: "#8f8f8f",
            strokeWidth: 1,
            fill: "#fff",
            rx: 6,
            ry: 6,
          },
        },
      },
    ],
    edges: [
      {
        shape: "edge",
        source: "node1",
        target: "node2",
        attrs: {
          // line is the name of the selector, the path element of the selected side
          line: {
            stroke: "#8f8f8f",
            strokeWidth: 1,
          },
        },
      },
    ],
  };
  
  
  
  