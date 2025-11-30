export function renderHomePage() {
    const homeContainer = document.createElement('div');
    homeContainer.className = 'home-page';

    const title = document.createElement('h1');
    title.textContent = 'Welcome to the Home Page';
    homeContainer.appendChild(title);

    const description = document.createElement('p');
    description.textContent = 'This is the main entry point of the application.';
    homeContainer.appendChild(description);

    return homeContainer;
}