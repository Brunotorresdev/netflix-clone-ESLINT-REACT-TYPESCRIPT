import styled from 'styled-components';

export const Body = styled.body`
	height: 100vh;
`;

export const Header = styled.header`
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
	color: #fff;

	h1 {
		font-family: Netflix Sans;
		font-size: 64px;
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
`;

export const User = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 200px;
		height: 200px;
		cursor: pointer;
	}

	p {
		font-family: Netflix Sans;
		font-size: 26px;
		font-weight: 400;
		line-height: 33px;
		letter-spacing: 0em;
		text-align: center;
		margin-top: 20px;
		color: #6d6d6eb2;
	}
`;

export const ImgAddUser = styled.img`
	width: 120px !important;
	height: 120px !important;
	margin-bottom: 33px;
	margin-top: 46px;
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	height: calc(100% - 200px);
`;

export const Button = styled.button`
	font-family: Netflix Sans;
	font-size: 26px;
	font-weight: 400;
	line-height: 33px;
	letter-spacing: 0em;
	text-align: left;
	color: #808080;
	border: 1px solid #808080;
	outline: none;
	text-align: center;
	margin-top: 60px;
	background: transparent;
	padding: 10px 30px;
	cursor: pointer;
`;
