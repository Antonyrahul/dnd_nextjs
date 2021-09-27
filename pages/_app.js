import {
	Flex,
	ThemeProvider,
	CSSReset,
	ColorModeProvider,
} from '@chakra-ui/core';

import Navbar from '../components/Navbar';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import {Router,useRouter} from 'next/router'

import '../css/tr.css'
import '../css/tr2.css'
import '../css/tr3.css'
import '../css/main.css'

function MyApp({ Component, pageProps }) {
	var routerr=useRouter();
	console.log(routerr.pathname)
	
	return (
		routerr.pathname=="/tasks"?(
		<ThemeProvider>
			<ColorModeProvider>
				<DndProvider backend={Backend}>
					<Flex direction='column' align='center' justify='center'>
						<CSSReset />
						{/* <Navbar /> */}
						<Flex justify='center' align='center' w='100%' h='93vh'>
							<Component {...pageProps} />
						</Flex>
					</Flex>
				</DndProvider>
			</ColorModeProvider>
		</ThemeProvider>):
		(
			
				
							<Component {...pageProps} />
						
		)
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
