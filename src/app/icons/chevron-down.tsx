function ChevronDown({ size = "1em" }: { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.825 6.91251L10 10.7292L6.175 6.91251L5 8.08751L10 13.0875L15 8.08751L13.825 6.91251Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ChevronDown;
