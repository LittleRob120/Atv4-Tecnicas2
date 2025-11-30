// src/app.ts

import { initializeRouter } from './router';

class App {
    constructor() {
        this.init();
    }

    init() {
        this.setupRouter();
        this.renderHomePage();
    }

    setupRouter() {
        initializeRouter();
    }

    renderHomePage() {
        // Logic to render the home page
        console.log('Home page rendered');
    }
}

const app = new App();