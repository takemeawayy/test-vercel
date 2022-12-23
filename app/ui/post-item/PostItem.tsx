import Link from 'next/link'
import { FC } from 'react'
import { IPost } from '../../interfaces/post.interface'

const PostItem: FC<{ post: IPost }> = ({ post }) => {
	return (
		<div>
			<Link href={`/posts/${post.id}`}>{post.id}</Link>
			<div>{post.title}</div>
			<div>{post.body}</div>
		</div>
	)
}

export default PostItem
