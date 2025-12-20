const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<footer className="justify-self-center">
			<p className="my-2 h-full text-secondary-content text-xs xsm:text-sm sm:text-base">
				Copyright &copy;{currentYear} Paul McJannet | v2.2 | All
				Rights Reserved
			</p>
		</footer>
	);
};

export default Footer;
