import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { API_URL } from '../../app/components/screens/Home/Home'
import Post from '../../app/components/screens/Post/Post'
import { IPost } from '../../app/interfaces/post.interface'

const PostPage: NextPage<{ post: IPost }> = props => {
	return <Post {...props} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const data = await fetch(`${API_URL}/posts/${params?.id}`)
	const post = await data.json()

	return {
		props: {
			post
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const data = await fetch(`${API_URL}/posts`)
	const posts = await data.json()

	const paths: { params: ParsedUrlQuery; locale?: string | undefined }[] = []

	posts.map((post: IPost) => paths.push({ params: { id: `${post.id}` } }))

	return {
		paths,
		fallback: false
	}
}

export default PostPage
