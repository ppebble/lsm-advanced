import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { HomeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';
import { Link, Outlet } from 'react-router-dom';
import { navigationStyles } from './styles';

function Navigation() {
	const menuItems = [
		{ id: 'works', label: '작업물 탐색' },
		{ id: 'companies', label: '업체 검색' },
		{ id: 'request', label: '의뢰하기' },
	];
	return (
		<>
			<nav className={navigationStyles.nav}>
				<div
					className={flex({
						// align: 'center',
						justify: 'space-between',
						maxW: '100%',
						mx: '0',
						gap: '8',
					})}
				>
					<Link
						to='/'
						className={flex({
							align: 'center',
							gap: '2',
							_hover: { opacity: 0.8 },
						})}
					>
						<HomeIcon className={css({ w: '10', h: '10', color: 'gray.800' })} />
						<span
							className={css({
								fontWeight: 'bold',
								fontSize: '3xl',
								color: 'gray.800',
								fontFamily: 'Lobster',
							})}
						>
							InteriorHub
						</span>
					</Link>
					<div className={navigationStyles.container}>
						{menuItems.map((menu) => (
							<Link key={menu.id} to={menu.id} className={navigationStyles.menu}>
								<p className={navigationStyles.menuText}>{menu.label}</p>
							</Link>
						))}
					</div>
					<div className={flex({ align: 'center', gap: '4' })}>
						<div
							className={css({
								position: 'relative',
								display: { base: 'none', md: 'block' },
							})}
						>
							<input
								type='text'
								placeholder='업체/스타일 검색...'
								className={navigationStyles.input}
							/>
							<MagnifyingGlassIcon
								className={css({
									position: 'absolute',
									left: '3',
									top: '50%',
									transform: 'translateY(-50%)',
									w: '5',
									h: '5',
									color: 'gray.400',
								})}
							/>
						</div>
						<Link to='/login' className={navigationStyles.login}>
							<UserIcon className={css({ w: '5', h: '5', color: 'gray.700' })} />
							<span
								className={css({
									display: { base: 'none', md: 'block' },
									color: 'gray.800',
									fontWeight: 'medium',
								})}
							>
								로그인
							</span>
						</Link>
					</div>
				</div>
			</nav>
			<div>
				<Outlet />
			</div>
		</>
	);
}

export default Navigation;
