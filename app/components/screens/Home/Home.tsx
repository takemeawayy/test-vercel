import {
	motion,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform
} from 'framer-motion'
import Head from 'next/head'
import { FC, useRef, useState } from 'react'
import { IPost } from '../../../interfaces/post.interface'
import PostItem from '../../../ui/post-item/PostItem'
import styles from '../../../ui/post-item/PostItem.module.scss'

export const API_URL = process.env.API_URL
export const tabs = ['tomato', 'lettuce', 'cheese']

const Home: FC<{ posts: IPost[] }> = ({ posts }) => {
	const [selectedTab, setSelectedTab] = useState(tabs[0])

	const sss = useMotionValue(700)

	const ref = useRef(null)
	const { scrollY } = useScroll({})
	const rotate = useTransform(scrollY, [0, 1000], [0, 360])
	const y = useTransform(scrollY, [1000, 1500], [1000, 1500])
	const y2 = useTransform(scrollY, [0, 500], [400, 0])
	const y3 = useTransform(scrollY, [0, 700], [500, 0])
	const y4 = useTransform(scrollY, [0, 300], [450, 0])
	const opacity = useTransform(scrollY, [0, 500, 700], [1, 0, 1])

	const { scrollYProgress } = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	})

	/* 	const backgroundColor = useTransform(
		scrollYProgress,
		[0, 1],
		['#f00', '#00f']
	) */

	return (
		<motion.div ref={ref} /* style={{ backgroundColor }} */>
			<Head>
				<title>Home</title>
			</Head>
			<motion.div>Home page:</motion.div>
			<motion.div
				className={styles.box}
				transition={{
					ease: 'easeInOut'
				}}
				style={{ y, rotate, opacity }}
			></motion.div>
			<motion.div
				className={styles.box}
				transition={{
					ease: 'easeInOut'
				}}
				style={{ y: y2 }}
			></motion.div>
			<motion.div
				className={styles.box}
				transition={{
					ease: 'easeInOut'
				}}
				style={{ y: y3, x: 400 }}
			></motion.div>
			<motion.div
				className={styles.box}
				transition={{
					ease: 'easeInOut'
				}}
				style={{ y: y4, x: -250 }}
			></motion.div>
			<motion.div className={styles.progress} style={{ scaleX }} />
			{posts.map(post => (
				<PostItem post={post} key={post.id} />
			))}
		</motion.div>
	)
}

export default Home
