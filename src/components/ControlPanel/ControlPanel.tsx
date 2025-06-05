import { useState } from "react";
import Select, { type SingleValue } from "react-select";
import styles from "./ControlPanel.module.css";

type ControlPanelProps = {
  cities: { value: string; label: string }[];
  onFindPath: (source: string, target: string) => void;
  onFindAllPaths: (source: string, target: string) => void;
};

const ControlPanel = ({
  cities,
  onFindPath,
  onFindAllPaths,
}: ControlPanelProps) => {
  const [source, setSource] = useState<{ value: string; label: string } | null>(
    null
  );
  const [target, setTarget] = useState<{ value: string; label: string } | null>(
    null
  );

  const handleClick = () => {
    if (source && target && source.value !== target.value) {
      onFindPath(source.value, target.value);
    }
  };

  return (
    <div className={styles.panel}>
      <div className={styles.selectContainer}>
        <Select
          value={source}
          onChange={(option: SingleValue<{ value: string; label: string }>) =>
            setSource(option)
          }
          options={cities.map((city) => ({
            value: city.value,
            label: city.label,
          }))}
          placeholder="Departure City"
          isClearable
        />
        <Select
          value={target}
          onChange={(option: SingleValue<{ value: string; label: string }>) =>
            setTarget(option)
          }
          options={cities.map((city) => ({
            value: city.value,
            label: city.label,
          }))}
          placeholder="Destination City"
          isDisabled={!source}
          isClearable
        />
      </div>

      <button
        className={styles.button}
        disabled={!source || !target || source.value === target.value}
        onClick={handleClick}
      >
        Highlight Shortest Path
      </button>
      <button
        className={styles.button}
        disabled={!source || !target || source.value === target.value}
        onClick={() => {
          if (source && target && source.value !== target.value) {
            onFindAllPaths(source.value, target.value);
          }
        }}
      >
        Find All Paths
      </button>
    </div>
  );
};

export default ControlPanel;
