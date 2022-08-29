import PropTypes from "prop-types";
import JSConfetti from "js-confetti";

function HeartIcon({ classNames }) {
  const handlerClick = () => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ["💕", "💖", "💗"],
    });
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Capa 2"
      className={classNames}
      viewBox="0 0 216.5 192.88"
      onClick={handlerClick}
    >
      <path
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M215 70.25c-.74 4.16-1.25 8.36-2.25 12.46-2.64 10.82-7.93 20.38-14.54 29.24-10.2 13.66-22.6 25.21-35.4 36.35-15.09 13.13-30.26 26.16-45.42 39.2-5.82 5.01-12.08 5.22-17.69.36-19.73-17.1-39.5-34.16-58.99-51.53-10.02-8.93-19.02-18.89-26.36-30.22C1.22 85.79-2.35 64.02 5.98 41.14 13.52 20.45 28.15 6.91 50.13 2.67c22.77-4.39 41.11 3.76 55.68 21.3.79.96 1.53 1.96 2.5 3.21.89-1.14 1.67-2.16 2.48-3.15 8.44-10.33 18.74-17.9 31.91-21.02 22.96-5.44 47.33 4.15 60.59 23.65 6.55 9.63 10.17 20.26 11.34 31.79.08.74.25 1.48.37 2.22v9.59z"
        data-name="Layer 1"
      ></path>
    </svg>
  );
}

HeartIcon.propTypes = {
  classNames: PropTypes.string,
};

export default HeartIcon;
