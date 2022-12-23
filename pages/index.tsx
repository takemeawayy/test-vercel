import { GetStaticProps, NextPage } from 'next'
import Home, { API_URL } from '../app/components/screens/Home/Home'
import { IPost } from '../app/interfaces/post.interface'

const HomePage: NextPage<{ posts: IPost[] }> = ({ posts }) => {
	return <Home posts={posts} />
}

export const getStaticProps: GetStaticProps = async context => {
	const data = await fetch(`${API_URL}/posts`)
	const posts = await data.json()

	return {
		props: {
			posts
		}
	}
}

export default HomePage
