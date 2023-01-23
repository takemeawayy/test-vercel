import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Head from 'next/head'
import { FC, useEffect, useRef } from 'react'
import { IPost } from '../../../interfaces/post.interface'
import PostItem from '../../../ui/post-item/PostItem'
import styles from '../../../ui/post-item/PostItem.module.scss'

export const API_URL = process.env.API_URL
export const tabs = ['tomato', 'lettuce', 'cheese']

const Home: FC<{ posts: IPost[] }> = ({ posts }) => {
	const ref = useRef(null)
	const { scrollY } = useScroll({})
	const rotate = useTransform(scrollY, [0, 1000], [0, 360])
	const y = useTransform(scrollY, [1000, 1500], [1000, 1500])
	const y2 = useTransform(scrollY, [0, 500], [400, 0])
	const y3 = useTransform(scrollY, [0, 700], [500, 0])
	const y4 = useTransform(scrollY, [0, 300], [450, 0])
	const opacity = useTransform(scrollY, [0, 500, 700], [1, 0, 1])

	const { scrollYProgress } = useScroll()

	const boxRef = useRef(null)

	const { scrollYProgress: boxY } = useScroll({
		target: boxRef,
		offset: ['end', 'start']
	})

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	})

	useEffect(() => {
		return scrollY.onChange(latest => console.log(latest))
	}, [])

	/* 	const backgroundColor = useTransform(
		scrollYProgress,
		[0, 1],
		['#f00', '#00f']
	) */

	const yRel = useTransform(scrollY, [6440, 7700], [0, 1260])

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
				whileHover={{ scale: 1.3 }}
				whileTap={{ scale: 0.8 }}
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
			<div>
				<div className={styles.box_targ} ref={boxRef}></div>
			</div>
			<motion.div className={styles.progress} style={{ scaleX }} />
			{posts.map(post => (
				<PostItem post={post} key={post.id} />
			))}
			<div style={{ height: 2000 }}>
				<motion.div className={styles.box_rel} style={{ y: yRel }}></motion.div>
			</div>
		</motion.div>
	)
}

export default Home
