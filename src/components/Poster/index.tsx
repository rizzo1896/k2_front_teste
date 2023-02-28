interface PosterProps {
  imageUrl: string;
}

export function Poster({ imageUrl }: PosterProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        backgroundColor: "black",

        marginLeft: "50px",
        border: "2px solid #ccc",
      }}
    >
      <img
        style={{
          width: "100%",
          objectFit: "cover",
        }}
        src={imageUrl}
      />
    </div>
  );
}
