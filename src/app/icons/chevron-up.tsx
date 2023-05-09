function ChevronUp({ size = "1em" }: { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.175 13.0875L10 9.27083L13.825 13.0875L15 11.9125L10 6.9125L5 11.9125L6.175 13.0875Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ChevronUp;
