import {
	Body,
	Content,
	Header,
	ListUsers,
	User,
	Container,
	ImgAddUser,
	Button,
} from '@/pages/home/style';
import LogoNetflix from '@/assets/netflix.png';
import ImgUser1 from '@/assets/user1.jpg';
import ImgUser2 from '@/assets/user2.jpg';
import ImgUser3 from '@/assets/user3.jpg';
import ImgUser4 from '@/assets/user4.jpg';
import AddUser from '@/assets/add-img.png';
import { useEffect, useState } from 'react';
import NetflixLogoAnimation from '@/components/NetflixLogoAnimation';

interface User {
	image: string;
	name: string;
}

function Home() {
	const users: User[] = [
		{
			image: ImgUser1,
			name: 'Murat',
		},
		{
			image: ImgUser2,
			name: 'Umut',
		},
		{
			image: ImgUser3,
			name: 'Kemal',
		},
		{
			image: ImgUser4,
			name: 'Çocuk',
		},
	];

	const [openPage, setOpenPage] = useState<boolean>(true);

	useEffect(() => {
		// alert('pagina iniciando...');
	}, []);

	return (
		<Body>
			{openPage ? (
				<NetflixLogoAnimation setOpenPage={setOpenPage} />
			) : (
				<>
					<Header>
						<img src={LogoNetflix} alt="" />
					</Header>
					<Container>
						<Content>
							<h1>Kim izliyor?</h1>
							<ListUsers>
								{users.map((user) => (
									<User key={user.name}>
										<img src={user.image} alt={user.name} />
										<p>{user.name}</p>
									</User>
								))}
								<User>
									<ImgAddUser src={AddUser} alt="" />
									<p>Profil Ekle</p>
								</User>
							</ListUsers>
							<Button>PROFİLLERİ YÖNET</Button>
						</Content>
					</Container>
				</>
			)}
		</Body>
	);
}

export default Home;
