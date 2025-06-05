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
  const [error, setError] = useState<boolean>(false);
  const allPaths = new Set<string>();
  const [allPathsFound, setAllPathsFound] = useState<string[]>([]);
  const chipColors = ["red", "blue", "green", "yellow", "cyan"];
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
    setError(false);
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

    if (newPath.length <= 1) {
      setError(true);
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setPath([...newPath]);
  };

  const showAllPaths = (source: string, target: string) => {
    const path: string[] = [];
    const visited = new Set<string>();
    setError(false);

    const dfs = (currentNode: string) => {
      visited.add(currentNode);
      path.push(currentNode);
      if (currentNode === target) {
        allPaths.add(path.join("-"));
      } else {
        for (const neighbor of adjacencyList.current[currentNode]) {
          const { node: neighborNode } = neighbor;
          if (!visited.has(neighborNode)) {
            dfs(neighborNode);
          }
        }
      }
      path.pop();
      visited.delete(currentNode);
    };
    dfs(source);

    setAllPathsFound([...allPaths]);

    if (allPaths.size === 0) {
      setError(true);
    }
  };

  const initData = () => {
    const graphEdges = [
      { from: "New York", to: "London", weight: 600 },
      { from: "New York", to: "Paris", weight: 850 },

      { from: "London", to: "Paris", weight: 200 },
      { from: "Toronto", to: "Paris", weight: 1200 },

      { from: "Paris", to: "Rome", weight: 300 },
      { from: "London", to: "Rome", weight: 800 },

      { from: "Rome", to: "Moscow", weight: 500 },
      { from: "Paris", to: "Moscow", weight: 1000 },

      { from: "Moscow", to: "Dubai", weight: 600 },
      { from: "Rome", to: "Dubai", weight: 1100 },

      { from: "Dubai", to: "Mumbai", weight: 450 },
      { from: "moscow", to: "Mumbai", weight: 1000 },

      { from: "Mumbai", to: "Beijing", weight: 700 },
      { from: "Dubai", to: "Beijing", weight: 1500 },

      { from: "Beijing", to: "Tokyo", weight: 500 },
      { from: "Mumbai", to: "Tokyo", weight: 1300 },

      { from: "Tokyo", to: "Singapore", weight: 800 },
      { from: "Beijing", to: "Singapore", weight: 1000 },

      { from: "Singapore", to: "Sydney", weight: 700 },
      { from: "Mumbai", to: "Sydney", weight: 1500 },

      { from: "Mumbai", to: "Cape Town", weight: 1300 },
      { from: "Rome", to: "Cape Town", weight: 1700 },

      { from: "Cape Town", to: "Buenos Aires", weight: 1000 },
      { from: "Sydney", to: "Buenos Aires", weight: 1800 },

      { from: "New York", to: "Los Angeles", weight: 400 },
      { from: "Toronto", to: "Los Angeles", weight: 800 },
    ];
    graphEdges.forEach(({ from, to, weight }) => {
      addEdge(from, to, weight);
    });
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <div className={styles.exploreContainer}>
      <section className={styles.controlPanel}>
        <ControlPanel
          cities={cities}
          onFindPath={djikstra}
          onFindAllPaths={showAllPaths}
        />
      </section>
      <section className={styles.pathInfo}>
        <h2>Path Information</h2>
        {allPathsFound.length > 0 ? (
          <div className={styles.results}>
            <h3>All Possible Paths ({allPathsFound.length})</h3>
            <ul>
              {allPathsFound.map((path, index) => (
                <li key={index}>
                  {path.split("-").map((cities) => (
                    <span
                      className={`${styles.chip} ${
                        styles[chipColors[Math.floor(Math.random() * 5)]]
                      }`}
                    >
                      {cities}
                    </span>
                  ))}
                  <span className={styles.weight}>
                    {/* ({calculateTotalWeight(path)} km) */}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <span>
            {!error
              ? "Select a source and target city. Click on Highlight Shortest Path to see the shortest path highlighted. Click on Find All Paths to see all possible paths."
              : "Sorry! There's no direct path visualisation for this graph yet."}
          </span>
        )}
        <br />
      </section>
      <GraphVisualiser nodesToHighlight={path} />
    </div>
  );
};

export default Explore;
