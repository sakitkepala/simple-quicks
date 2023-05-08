function Qna({ size = "1em" }: { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginTop: 6 }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6433 2.51453H4.29826C3.60674 2.51453 3.04095 3.08032 3.04095 3.77184V21.3742L8.07019 16.3449H20.6433C21.3348 16.3449 21.9006 15.7791 21.9006 15.0876V3.77184C21.9006 3.08032 21.3348 2.51453 20.6433 2.51453ZM19.386 5.02908V13.8302H7.02665L6.28484 14.5721L5.5556 15.3013V5.02908H19.386ZM24.4152 7.54381H26.9298C27.6213 7.54381 28.1871 8.10959 28.1871 8.80112V27.6608L23.1579 22.6315H9.32748C8.63596 22.6315 8.07017 22.0657 8.07017 21.3742V18.8596H24.4152V7.54381Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Qna;
