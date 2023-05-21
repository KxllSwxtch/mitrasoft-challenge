import { useEffect, useState } from 'react'
import axios from 'axios'
import { IPost } from '../components/Post'
import Posts from '../components/Posts'
import Loader from '../components/Loader'

const Home = () => {
	const [posts, setPosts] = useState<IPost[]>([])
	const [isLoading, setIsLoading] = useState<Boolean>(true)

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
			setPosts(res.data)
			setIsLoading(false)
		}

		fetchPosts()
	}, [])

	return <div>{isLoading ? <Loader /> : <Posts />}</div>
}
export default Home
