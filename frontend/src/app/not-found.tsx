
export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "80px auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "48px", color: "#c64a2d" }}>
        404
      </h1>

      <h2>Page Not Found</h2>

      <p style={{ color: "#777777" }}>
        Sorry, we couldn't find the page you are looking for.
      </p>

      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: "16px",
          padding: "12px 20px",
          backgroundColor: "#c64a2d",
          color: "#ffffff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Back to Recipes
      </a>
    </div>
  );
}
