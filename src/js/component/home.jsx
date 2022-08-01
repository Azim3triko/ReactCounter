import React from "react";
import PropTypes from "prop-types";

//include images into your bundle

//create your first component

export const Home = () => {
	return (
		<React.Fragment>
			<Counter />
		</React.Fragment>
	);
};

export function Counter(props) {
	return (
		<div className="Container d-flex bg-dark">
			<div className="align-content-center col-3 fs-1" id="Clock">
				<p className="text-light text-center">
					<i className="fas fa-clock"></i>
				</p>
			</div>
			<div className="justify-content-center col-2 fs-1">
				<p className="text-light">{props.numberFive % 10}</p>
			</div>
			<div className="justify-content-center col-2 fs-1">
				<p className="text-light">{props.numberFour % 10}</p>
			</div>
			<div className="justify-content-center col-2 fs-1">
				<p className="text-light">{props.numberThree % 10}</p>
			</div>
			<div className="justify-content-center col-2 fs-1">
				<p className="text-light">{props.numberTwo % 10}</p>
			</div>
			<div className="justify-content-center col-2 fs-1">
				<p className="text-light">{props.numberOne % 10}</p>
			</div>
		</div>
	);
}

Counter.propTypes = {
	numberFive: PropTypes.number,
	numberFour: PropTypes.number,
	numberThree: PropTypes.number,
	numberTwo: PropTypes.number,
	numberOne: PropTypes.number,
};
