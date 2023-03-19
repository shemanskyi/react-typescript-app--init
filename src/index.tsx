import { App } from './components';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Say something
console.log('[ERWT] : Renderer execution started');

const root = document.getElementById('app') as HTMLElement;

// Render application in DOM
createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>
);
