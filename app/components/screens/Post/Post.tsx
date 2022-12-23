import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import { IPost } from '../../../interfaces/post.interface'
import PostItem from '../../../ui/post-item/PostItem'

const Post: FC<{ post: IPost }> = ({ post }) => {
	console.log(post)

	return (
		<div>
			<Head>
				<title>{`Post page | ${post.id}`}</title>
			</Head>
			<header style={{ marginBottom: 15 }}>
				<Link href="/">Home</Link>
			</header>
			<PostItem post={post} />
		</div>
	)
}

export default Post
