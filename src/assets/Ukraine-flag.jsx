const UkraineFlagIcon = ({ iconWidth }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
      <rect width={`${iconWidth}`} height={`${iconWidth/2}`} fill="#005BBB" />
      <rect width={`${iconWidth}`} height={`${iconWidth/4}`} y={`${iconWidth/4}`} fill="#FFD500" />
    </svg>
  );
};

export { UkraineFlagIcon };
