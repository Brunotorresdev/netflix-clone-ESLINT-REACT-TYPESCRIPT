import { useEffect } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

interface NetflixLogoAnimationProps {
	setOpenPage: (value: boolean) => void;
}

// eslint-disable-next-line
const NetflixLogoAnimation: React.FC<NetflixLogoAnimationProps> = ({
	setOpenPage,
}) => {
	useEffect(() => {
		const timeline = gsap.timeline({
			onComplete: () => {
				timeline.restart();
			},
		});

		timeline.to('#left', { duration: 0.4, scaleY: 0, delay: 1 });
		timeline.to('#left', {
			duration: 0.01,
			transformOrigin: 'bottom',
			y: '100%',
			opacity: 0,
		});
		timeline.to('#center', {
			duration: 0.4,
			attr: {
				d: 'M297.846,364.016l-59,-5.113l0,0.727c19.69,0.965 39.356,2.657 59,5l0,-0.614Z',
			},
		});
		timeline.to('#center', {
			duration: 0.01,
			opacity: 0,
			attr: {
				d: 'M195.846,69.63l-59,0l0.256,0.6c14.559,-0.109 39.379,0.153 58.942,-0.027l-0.198,-0.573Z',
			},
		});
		timeline.to('#right', { duration: 0.4, scaleY: 0 });
		timeline.to('#right', {
			duration: 0.01,
			transformOrigin: 'bottom',
			y: '100%',
			opacity: 0,
		});
		timeline.to('#left', { duration: 0.01, opacity: 1, delay: 1, y: 0 });
		timeline.to('#left', { duration: 0.4, scaleY: 1 });
		timeline.to('#center', { duration: 0.01, opacity: 1 });
		timeline.to('#center', {
			duration: 0.4,
			attr: {
				d: 'M195.846,69.63l-59,0l102,290c19.69,0.965 39.356,2.657 59,5l-102,-295Z',
			},
		});
		timeline.to('#right', { duration: 0.01, opacity: 1, y: 0 });
		timeline.to('#right', { duration: 0.4, scaleY: 1 });
		setTimeout(() => {
			timeline.pause();
			setOpenPage(false);
		}, 3000);
	}, []);

	return (
		<div
			className="netflix"
			style={{
				width: '434px',
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 435 434"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				xmlSpace="preserve"
				style={{
					fillRule: 'evenodd',
					clipRule: 'evenodd',
					strokeLinejoin: 'round',
					strokeMiterlimit: 1.41421,
				}}
			>
				<g>
					<use xlinkHref="#_Image1" x="0" y="0" width="435px" height="434px" />
					<path d="M434.5,37.004c0,-20.699 -16.805,-37.504 -37.504,-37.504l-359.992,0c-20.699,0 -37.504,16.805 -37.504,37.504l0,359.992c0,20.699 16.805,37.504 37.504,37.504l359.992,0c20.699,0 37.504,-16.805 37.504,-37.504l0,-359.992Z" />
					<path
						id="right"
						d="M297.846,69.63l-59,0l0.113,290c19.574,0.542 39.203,2.204 58.887,5l0,-295Z"
						style={{ fill: '#b1060f' }}
					/>
					<path
						id="left"
						d="M195.846,69.63l-59,0l0,295c19.561,-2.714 39.16,-4.408 58.799,-5l0.201,-290Z"
						style={{ fill: '#b1060f' }}
					/>
					<path
						id="center"
						d="M195.846,69.63l-59,0l102,290c19.69,0.965 39.356,2.657 59,5l-102,-295Z"
						style={{ fill: '#e50914' }}
					/>
				</g>
			</svg>
		</div>
	);
};

NetflixLogoAnimation.propTypes = {
	setOpenPage: PropTypes.func.isRequired,
};

export default NetflixLogoAnimation;
