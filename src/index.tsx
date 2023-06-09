import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { Home, AboutMe } from './pages'
import Layout from './components/Layout'

const root = createRoot(document.getElementById('root') as HTMLElement)
const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<Home />
			</Layout>
		),
	},
	{
		path: '/about-me',
		element: (
			<Layout>
				<AboutMe />
			</Layout>
		),
	},
])

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
