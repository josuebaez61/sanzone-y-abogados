export const Banner = () => {
  const backgroundImage =
    process.env.NODE_ENV === "production"
      ? "/sanzone-y-abogados/assets/images/banner-1.jpeg"
      : "/assets/images/banner-1.jpeg";

  return (
    <div
      style={{
        height: "600px",
        background: `url('${backgroundImage}') no-repeat center center`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};
