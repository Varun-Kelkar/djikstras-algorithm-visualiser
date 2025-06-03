import { useEffect, useRef, useState } from "react";
import ControlPanel from "../../components/ControlPanel/ControlPanel";
import GraphVisualiser from "../../components/GraphVisualiser/GraphVisualiser";
import styles from "./Explore.module.css";
import { cities } from "../../mockdata";

type Node = {
  node: string;
  weight: number;
};

type Graph = {
  [nodeId: string]: Node[];
};

type Distances = {
  [key: string]: number;
};

type PathResult = { [key: string]: string | null };

type PriorityQueueItem = { node: string; dist: number };

const Explore = () => {
  const adjacencyList = useRef<Graph>({});
  const [path, setPath] = useState<string[]>([]);

  const addNode = (node: string) => {
    if (!adjacencyList?.current[node]) {
      adjacencyList.current[node] = [];
    }
  };

  const addEdge = (source: string, target: string, weight: number) => {
    addNode(source);
    addNode(target);
    adjacencyList.current[source].push({ node: target, weight });
    // If undirected graph, uncomment:
    // this.adjacencyList[target].push({ node: source, weight });
  };

  const djikstra = (source: string, target: string) => {
    setPath([]);
    const distances: Distances = {};
    const previous: PathResult = {};
    const visited = new Set<string>();
    const pq: PriorityQueueItem[] = [];

    for (const node in adjacencyList.current) {
      distances[node] = Infinity;
      previous[node] = null;
    }

    distances[source] = 0;
    pq.push({ node: source, dist: 0 });

    while (pq.length > 0) {
      pq.sort((a, b) => a.dist - b.dist);
      const { node: currentNode, dist: currentDist } =
        pq.shift() as PriorityQueueItem;

      if (!visited.has(currentNode)) {
        visited.add(currentNode);

        if (currentNode === target) break;

        for (const neighbor of adjacencyList.current[currentNode]) {
          const { node: neighborNode, weight } = neighbor;
          const newDist = currentDist + weight;
          if (newDist < distances[neighborNode]) {
            distances[neighborNode] = newDist;
            previous[neighborNode] = currentNode;
            pq.push({ node: neighborNode, dist: newDist });
          }
        }
      }
    }

    const newPath: string[] = [];
    let curr = target;
    while (curr !== null) {
      newPath.unshift(curr);
      curr = previous[curr] as string;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setPath([...newPath]);
  };

  const initData = () => {
    addEdge("new-york", "london", 5567);
    addEdge("london", "paris", 343);
    addEdge("paris", "berlin", 1054);
    addEdge("berlin", "moscow", 1600);
    addEdge("moscow", "beijing", 5792);
    addEdge("beijing", "tokyo", 2096);
    addEdge("tokyo", "sydney", 7830);
    addEdge("sydney", "mumbai", 10410);
    addEdge("mumbai", "dubai", 1927);
    addEdge("dubai", "london", 5500);
    // New directed edges
    addEdge("new-york", "toronto", 800);
    addEdge("toronto", "sao-paulo", 8190);
    addEdge("sao-paulo", "cape-town", 6800);
    addEdge("cape-town", "cairo", 6400);
    addEdge("cairo", "singapore", 8300);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <div className={styles.exploreContainer}>
      <div>
        <ControlPanel cities={cities} onFindPath={djikstra} />
      </div>
      <GraphVisualiser nodesToHighlight={path} />
    </div>
  );
};

export default Explore;
