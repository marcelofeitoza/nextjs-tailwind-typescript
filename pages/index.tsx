import { Layout } from '../components/Layout'
import { Vercel } from '../assets/icons/vercel'

const Home = () => {
  return (
    <Layout>
      <div className='text-white flex flex-col flex-1 justify-center items-center text-center'>
        <div className='text-3xl font-bold mb-4'>This project uses Next.js, TypeScript, TailwindCSS, Eslint, Prettier!</div>

        <Vercel className={'my-8'} width={128} color={"#fff"} />

        <div className='text-xl'>Start developing...</div>
      </div>
    </Layout>
  )

}

export default Home