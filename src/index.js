import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ProductsContextProvider } from './Store/ProductsContext';
import AuthContextProvider from './Store/AuthContext';

const theme = {
	primary: '#363636;',
	secondary: '#fdbe77',
	cart: {
		light: '#f9f9f9',
		dark: '#3c3c3c',
	},
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ProductsContextProvider>
			<AuthContextProvider>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</ThemeProvider>
			</AuthContextProvider>
		</ProductsContextProvider>
	</React.StrictMode>
);
