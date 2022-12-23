import Head from 'next/head'
import { FC } from 'react'
import { IPost } from '../../../interfaces/post.interface'
import PostItem from '../../../ui/post-item/PostItem'

export const API_URL = process.env.API_URL

const Home: FC<{ posts: IPost[] }> = ({ posts }) => {
	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<div>Home page:</div>
			{posts.map(post => (
				<PostItem post={post} key={post.id} />
			))}
		</div>
	)
}

export default Home
