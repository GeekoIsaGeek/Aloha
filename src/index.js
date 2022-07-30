import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ProductsContextProvider } from './Store/ProductsContext';

const theme = {
	primary: '#363636;',
	secondary: '#fdbe77',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ProductsContextProvider>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</ProductsContextProvider>
	</React.StrictMode>
);
