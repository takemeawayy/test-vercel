import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'
import { IPost } from '../../interfaces/post.interface'

const PostItem: FC<{ post: IPost }> = ({ post }) => {
	const postVariants: Variants = {
		offscreen: {
			opacity: 0
		},
		onscreen: {
			opacity: 1,
			transition: {
				type: 'spring',
				bounce: 0.4,
				duration: 2
			}
		}
	}

	return (
		<>
			<motion.div
				variants={postVariants}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 'some' }}
			>
				<Link href={`/posts/${post.id}`}>{post.id}</Link>
				<div>{post.title}</div>
				<div>{post.body}</div>
			</motion.div>
		</>
	)
}

export default PostItem
