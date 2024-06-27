export default function WaveSvg() {
  return (
    <svg viewBox="0 0 120 28">
      <defs>
        <path
          id="wave"
          d="M0 10c30 0 30 5 60 5s30-5 60-5 30 5 60 5 30-5 60-5v28H0z"
        />
      </defs>

      <use className="wave wave--front" xlinkHref="#wave" x="0" y="0"></use>
      <use className="wave wave--back" xlinkHref="#wave" x="0" y="-2"></use>
    </svg>
  );
}
