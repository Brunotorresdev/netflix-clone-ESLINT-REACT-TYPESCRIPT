import styled from 'styled-components';
import theme from '../../styles/theme';

export const Body = styled.div`
	min-height: 100vh;
	height: 100%;
	background: ${theme.colors.background};
	font-family: ${theme.fonts.netflix};
	border: 1px solid;
`;

export const Header = styled.div`
	margin-left: 60px;
	padding: 25px 0;

	@media (max-width: 426px) {
		display: flex;
		margin-left: 0;
		justify-content: center;
	}
`;

export const Content = styled.div`
	max-width: 1260px;
	width: 100%;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${theme.colors.primary};
	padding-bottom: 20px;

	h1 {
		font-size: ${theme.fontSizes.large};
		font-weight: 400;
		line-height: 82px;
		letter-spacing: 0em;
		text-align: center;
	}
`;

export const ListUsers = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 30px;

	@media (max-width: 830px) {
		justify-content: center;
		gap: 30px;
	}

	@media (max-width: 426px) {
		flex-direction: column;
	}
`;

export const User = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 200px;
		height: 200px;
		cursor: pointer;
		transition: transform 0.3s ease;

		:hover {
			transform: scale(1.1);
		}
	}

	p {
		font-size: ${theme.fontSizes.medium};
		font-weight: 400;
		line-height: 33px;
		letter-spacing: 0em;
		text-align: center;
		margin-top: 20px;
		color: ${theme.colors.second};
	}
`;

export const ImgAddUser = styled.img`
	width: 120px !important;
	height: 120px !important;
	margin-bottom: 33px;
	margin-top: 46px;
	transform: none !important;
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	height: calc(100% - 200px);
`;

export const Button = styled.button`
	font-size: ${theme.fontSizes.medium};
	font-weight: 400;
	line-height: 33px;
	letter-spacing: 0em;
	color: ${theme.colors.button};
	border: 1px solid ${theme.colors.button};
	outline: none;
	text-align: center;
	margin-top: 60px;
	background: transparent;
	padding: 10px 30px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: background-color 0.3s ease, color 0.3s ease;

	&:before {
		content: '';
		position: absolute;
		background-color: rgba(0, 0, 0, 0.1);
		width: 10%;
		height: 25%;
		border-radius: 50%;
		z-index: 1;
		top: 35%;
		left: 45%;
		-webkit-transform: scale(0);
		transform: scale(0);
	}

	&:hover:before {
		-webkit-transform: scale(12);
		transform: scale(12);
		-webkit-transition: border-radius 0.5s 0.5s, -webkit-transform 0.5s;
		transition: border-radius 0.5s 0.5s, -webkit-transform 0.5s;
		transition: transform 0.5s, border-radius 0.5s 0.5s;
		transition: transform 0.5s, border-radius 0.5s 0.5s, -webkit-transform 0.5s;
	}

	&:hover::after {
		content: '';
		position: absolute;
		z-index: 2;
		left: 50%;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
	}
`;
