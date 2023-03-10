function LandingCoverImg() {
  const x = -40;
  const y = 10;

  const style = {
    position: "relative",
    transform: `translate(${x}px, ${y}px)`,
    left: "250px",
    opacity: 1,
    marginTop: "40px",
    zIndex: 10,
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="550"
        viewBox="0 0 1144.389 890.673"
        style={style}
      >
        <g
          id="Group_82"
          data-name="Group 82"
          transform="translate(-45.843 -308.285)"
        >
          <g
            id="Group_80"
            data-name="Group 80"
            transform="translate(45.843 308.285)"
          >
            <path
              id="Path_788"
              data-name="Path 788"
              d="M102.553,517.6c161.14-279.092,563.979-279.092,725.119,0h0l362.559,627.972H465.113c-322.272,0-523.692-348.872-362.559-627.964V517.6Z"
              transform="translate(-45.843 -308.285)"
              fill="#fff"
            />
            <g
              id="Group_79"
              data-name="Group 79"
              transform="translate(605.003 767.611)"
            >
              <path
                id="Path_789"
                data-name="Path 789"
                d="M327.136,528.2,204.075,405.134h-81.9L245.238,528.2Z"
                transform="translate(-122.176 -405.134)"
              />
              <path
                id="Path_790"
                data-name="Path 790"
                d="M343.72,528.2,220.658,405.134h-81.9L261.82,528.2Z"
                transform="translate(-7.323 -405.134)"
              />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}

export default LandingCoverImg;
