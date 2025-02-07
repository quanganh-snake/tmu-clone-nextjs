"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";
import { logoutUser } from "@/actions/auth";
import { useRouter } from "next/navigation";

const AnnouncementBar = () => {
	return (
		<div className="w-full bg-black py-2">
			<div className="container mx-auto flex items-center justify-center px-8">
				<span className="text-center text-sm font-medium tracking-wide text-white">FREE SHIPPING ON ORDERS OVER $15.00 * FREE RETURNS</span>
			</div>
		</div>
	);
};

type HeaderProps = {
	user: Omit<User, "passwordHash"> | null;
};

const Header = ({ user }: HeaderProps) => {
	const [isOpen, setIsOpen] = useState(true);
	const [prevScrollY, setPrevScrollY] = useState(0);
	const router = useRouter();

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const isScrollUp = currentScrollY < prevScrollY;

			if (isScrollUp) {
				setIsOpen(true);
			} else if (currentScrollY > 100) {
				setIsOpen(false);
			}

			setPrevScrollY(currentScrollY);
		};

		setPrevScrollY(window.scrollY);

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollY]);

	return (
		<header className="w-full sticky top-0 z-50">
			<div className={`w-full transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
				<AnnouncementBar />
				<div className="w-full flex justify-between items-center py-3 sm:py-4 bg-white/80 shadow-sm border-b border-gray-100 backdrop-blur-sm">
					<div className="flex justify-between items-center container mx-auto px-8">
						<div className="flex flex-1 justify-start items-center gap-4 sm:gap-6">
							<button className="text-gray-700 hover:text-gray-900 md:hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-menu"
								>
									<line x1="4" x2="20" y1="12" y2="12" />
									<line x1="4" x2="20" y1="6" y2="6" />
									<line x1="4" x2="20" y1="18" y2="18" />
								</svg>
							</button>
							<nav className="hidden md:flex gap-4 lg:gap-6 text-sm font-medium">
								<Link href={"/"}>Home</Link>
								<Link href={"/"}>New Arrivals</Link>
								<Link href={"/"}>Sale</Link>
							</nav>
						</div>
						{/* END: Navbar */}
						<Link href={"/"} className="absolute left-1/2 -translate-x-1/2">
							<span className="text-gray-700 text-xl font-bold tracking-tight">TMU</span>
						</Link>
						{/* END: LOGO */}
						<div className="flex flex-1 justify-end items-center gap-2 sm:gap-4">
							<button className="text-gray-700 hover:text-gray-900 hidden sm:block">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-search"
								>
									<circle cx="11" cy="11" r="8" />
									<path d="m21 21-4.3-4.3" />
								</svg>
							</button>
							{user ? (
								<div className="flex items-center gap-2 sm:gap-4">
									<span className="text-xs sm:text-sm text-gray-700 hidden md:block">{user.email}</span>
									<Link
										href={"/"}
										className="text-xs sm:text-sm font-medium text-gray-70 hover:text-gray-900"
										onClick={async (e) => {
											e.preventDefault();
											await logoutUser();
											router.refresh();
										}}
									>
										Sign Out
									</Link>
								</div>
							) : (
								<>
									<Link href={"/auth/sign-in"} className="text-xs sm:text-sm font-medium text-gray-70 hover:text-gray-900">
										Sign In
									</Link>
									<Link href={"/auth/sign-up"} className="text-xs sm:text-sm font-medium text-gray-70 hover:text-gray-900">
										Sign Up
									</Link>
								</>
							)}

							<button className="text-gray-700 hover:text-gray-900 relative">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-shopping-bag"
								>
									<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
									<path d="M3 6h18" />
									<path d="M16 10a4 4 0 0 1-8 0" />
								</svg>
								<span className="absolute -top-1 -right-1 bg-black text-white text-[10px] sm:text-xs w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center">0</span>
							</button>
						</div>
						{/* END: RightPanel */}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
