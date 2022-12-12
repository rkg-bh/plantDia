import { Graph } from "@antv/x6";
import { data} from './data'

export const graph = new Graph({
  container: document.getElementById("container") || undefined,
  width: 800,
  height: 600,
  background: {
    color: "#F2F7FA",
  },
});

graph.fromJSON(data); // render element 
graph.centerContent(); // center display 