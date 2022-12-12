import { Layout } from '../components/Layout'
import { Vercel } from '../assets/icons/vercel'

const Home = () => {
  return (
    <Layout title={'Home'}>
      <div className='text-white flex flex-col flex-1 justify-center items-center text-center h-full w-full py-8 px-4'>
        <Vercel className={''} width={128} color={"#fff"} />

        <div className='text-3xl my-8 font-bold mb-4'>nextjs-tailwind-typescript</div>

        <p className='text-lg'>
          This project is a template for Next.js projects with TypeScript, TailwindCSS, Eslint and Prettier.
        </p>
      </div>
    </Layout>
  )

}

export default Home