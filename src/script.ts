const headerThemeBtnNode: HTMLDivElement | null = document.querySelector('.header__dark-mode-wrapper');

function isTheme(): 'theme-light' | 'theme-dark' {
	if (document.documentElement.classList.contains('theme-light')) {
		return 'theme-light';
	} else if ((document.documentElement.classList.contains('theme-dark'))) {
		return 'theme-dark';
	}
	return 'theme-light';
}

function changeTheme(lastTheme: string, nextTheme: string): void {
	document.documentElement.classList.remove(lastTheme);
	document.documentElement.classList.add(nextTheme);
}

function handlerClickEventHeaderThemeBtn(event: MouseEvent): void {
	const theme = isTheme();

	if (theme === 'theme-light') {
		changeTheme('theme-light', 'theme-dark');
	} else if (theme === 'theme-dark') {
		changeTheme('theme-dark', 'theme-light');
	}

}

headerThemeBtnNode?.addEventListener('click', handlerClickEventHeaderThemeBtn);



