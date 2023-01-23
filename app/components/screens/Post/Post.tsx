import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import { IPost } from '../../../interfaces/post.interface'
import ParallaxText from '../../../ui/parallax-text/ParallaxText'
import PostItem from '../../../ui/post-item/PostItem'

const Post: FC<{ post: IPost }> = ({ post }) => {
	return (
		<div>
			<Head>
				<title>{`Post page | ${post.id}`}</title>
			</Head>
			<header style={{ marginBottom: 15 }}>
				<Link href="/">Home</Link>
			</header>
			<PostItem post={post} />

			<ParallaxText baseVelocity={2}>WE ARE</ParallaxText>
			<ParallaxText baseVelocity={-2}>The best</ParallaxText>
			<div style={{ height: 1000 }}></div>
		</div>
	)
}

export default Post
