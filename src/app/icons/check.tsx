function Check({ size = "1em" }: { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 20.8576 7.4365 L 22.985 9.579 L 10.9148 21.6491 L 4.8797 15.6291 L 7.0222 13.5018 L 10.9148 17.3793 L 20.8576 7.4365"
        fill="currentColor"
      />
    </svg>
  );
}

export default Check;
