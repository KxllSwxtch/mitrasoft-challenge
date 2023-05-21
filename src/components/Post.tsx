export interface IPost {
	userId: number
	id: number
	title: string
	body: string
}

const Post: React.FC<{}> = (): JSX.Element => {
	return <div>Post</div>
}

export default Post
