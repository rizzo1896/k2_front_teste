interface LegendProps {
  title: string;
  node: JSX.Element;
}

export const Legend = ({ title, node }: LegendProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "50px",
      }}
    >
      <h3>{title}</h3>
      <p
        style={{
          marginLeft: "10px",
        }}
      >
        {node}
      </p>
    </div>
  );
};
