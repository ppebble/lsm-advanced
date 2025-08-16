import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { HomeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';
import { Link, Outlet } from 'react-router-dom';

function Navigation() {
	const menuItems = [
		{ id: 'works', label: '작업물 탐색' },
		{ id: 'companies', label: '업체 검색' },
		{ id: 'request', label: '의뢰하기' },
	];
	return (
		<>
			<nav
				className={css({
					position: 'sticky',
					top: '0',
					bg: 'white',
					shadow: 'sm',
					zIndex: '50',
					px: '3',
					py: '3',
					borderBottom: '1px solid token(colors.gray.200)',
				})}
			>
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
					<div
						className={css({
							display: { base: 'none', lg: 'flex' },
							flex: '1',
							gap: '6',
							justifyContent: 'space-evenly',
						})}
					>
						{menuItems.map((menu) => (
							<Link
								key={menu.id}
								to={menu.id}
								className={css({
									px: '3',
									py: '2',
									fontWeight: 'medium',
									color: 'gray.700',
									_hover: {
										color: 'blue.600',
										transform: 'scale(1.05)',
									},
									transition: 'all 0.2s',
									position: 'relative',
									_after: {
										content: '""',
										position: 'absolute',
										bottom: '0',
										left: '50%',
										transform: 'translateX(-50%)',
										width: '0',
										height: '2px',
										bg: 'blue.600',
										transition: 'width 0.3s ease',
									},
								})}
							>
								<p
									className={css({
										fontWeight: 'medium',
										color: 'gray.700',
										fontSize: 'xl',
										overflow: 'hidden',
									})}
								>
									{menu.label}
								</p>
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
								className={css({
									pl: '10',
									pr: '4',
									py: '2',
									border: '1px solid token(colors.gray.200)',
									rounded: 'full',
									width: '200px',
									transition: 'all 0.3s',
									_focus: {
										outline: 'none',
										borderColor: 'blue.500',
										width: '250px',
										boxShadow: '0 0 0 3px token(colors.blue.100)',
									},
								})}
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
						<Link
							to='/login'
							className={flex({
								align: 'center',
								gap: '2',
								px: '4',
								py: '2',
								bg: 'gray.50',
								rounded: 'lg',
								border: '1px solid token(colors.gray.200)',
								_hover: {
									bg: 'gray.100',
									transform: 'translateY(-1px)',
								},
								transition: 'all 0.2s',
							})}
						>
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
