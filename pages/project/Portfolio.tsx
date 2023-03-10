import Link from "next/link";
import { useRouter } from "next/router";

const Portfolio = () => {
  const route = useRouter();
  return (
    <div className='animate-fade-in-up'>
      <div className='mb-12 mt-8 text-5xl'>
        <p className='mb-4 font-appleSemiBold'>{route.query.title}</p>
      </div>
      <hr className='mb-8' />
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>๐ Summary</div>
        <div className='whitespace-normal font-appleMedium text-lg'>
          <p className='mb-2'>
            ์จ๋ณด์ง ์์๋ ํ๋ ์์ํฌ์ธ Next.js์ ์ฒ์ ์จ๋ณด๋ CSS์ธ tailwindCSS๋ฅผ
            ๊ฐ์ดํด์ ๋ง๋  <b>๊ฐ์ธ ํฌํธํด๋ฆฌ์ค</b>์๋๋ค.
          </p>
          <p className='mb-2'>
            ํผ์์ ์ฒ์ ๋ง๋ค์ด๋ณด๋ ์น ํ๋ก ํธ์๋ ํ๋ก์ ํธ๋ก์จ SPA์ ๋ํ ์ดํด,
            React ๋ฐ Next.js์ ๋ํ ํ์ต ๊ทธ๋ฆฌ๊ณ  CSS ์คํ์ผ๋ง์ ๋ํ ๋ด์ฉ์ ์ ์
            ์๊ฒ ๋ ๊ณ๊ธฐ๊ฐ ๋ ํ๋ก์ ํธ์๋๋ค.
          </p>
        </div>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>๐ก Meaning</div>
        <div className='whitespace-normal font-appleMedium text-lg'>
          <p className='mb-2'>
            ์น ํ๋ก์ ํธ๋ JSP์ ๋ถํธ์คํธ๋ฉ์ ์ด์ฉํด ๋ง๋  ์ ์ด ์์ง๋ง ์ค์ ๋ก ์ ๊ฐ
            ์ฒ์๋ถํฐ ๋๊น์ง ํผ์์ ํผ๋ธ๋ฆฌ์ฑ๊ณผ ์ฌ๋ฌ ๊ธฐ๋ฅ๋ค์ ๋ง๋  ๊ฒ์ ์ฒ์์ธ
            ํ๋ก์ ํธ์๋๋ค. ๋ํ, ์ด๋ฒ ํฌํธํด๋ฆฌ์ค๋ ํ์ฌ์ฌ์ง ๋น์ ํด๊ทผ ํ ํํ์ด
            ์๊ฐ์ ํ ์ ํด ๋ง๋  ํ๋ก์ ํธ์๋๋ค.
          </p>
          <p className='mb-2'>
            ์  ๋ณดํต CSS๋ styled-components๋ฅผ ์ ํธํ์ง๋ง styled-components๋ฅผ
            ์ฌ์ฉํ ๋๋ ํญ์ ํด๋์ค๋ช์ ๊ณ ๋ฏผํด์ผํ๋๋ฐ ์ด๋ฒ์ ํด๋์ค๋ช์ ๊ณ ๋ฏผ
            ์์ด ์ฝ๊ฒ ์ฌ์ฉํ  ์ ์๋ tailwindCSS๋ฅผ ํ๋ฒ ์ฌ์ฉํด ๋ณด๊ณ  ์ถ์ด์ ์ด๋ฒ
            ํ๋ก์ ํธ์ ์ ์ฉํด๋ณด์์ต๋๋ค. tailwindsCSS๋ฅผ ์ฌ์ฉํด๋ณด๋ ์ ๋ง ์ฝ๊ณ 
            ํธํ๊ฒ ์ฌ์ฉํ  ์ ์๊ณ  ๋น ๋ฅด๊ฒ ํผ๋ธ๋ฆฌ์ฑ์ ํ  ์ ์๊ฒ ๋ค๋ผ๋ ์๊ฐ์ด
            ๋ค์์ต๋๋ค. ๊ทธ๋ฌ๋ ๊ฐ๋์ฑ์ ๋ฌธ์ ๋ ๋จ์ ์ผ๋ก ๋ค๊ฐ์๋๊ฑฐ ๊ฐ์ต๋๋ค.
          </p>
          <p className='mb-2'>
            Next.js๋ ํด๋ผ์ด์ธํธ ์ฌ์ด๋ ๋ ๋๋ง๋ ์ง์ํ๋ฉด์ ๋์์ SEO๋ฅผ ์ํ
            ์๋ฒ ์ฌ์ด๋ ๋ ๋๋ง์ ์ง์ํ์ฌ ๊ฒ์ ์ฑ๋ฅํฅ์์ ๋์์ด ๋๋ค๋ ๊ฒ์
            ์ ๊ธฐํ์ต๋๋ค.
          </p>
          <p className='mb-2'>
            ๊ทธ๋ฆฌ๊ณ  ํ๋ก์ ํธ ๋ฐฐํฌ๋ฅผ ์ฒ์์ผ๋ก ํด๋ณด์๋๋ฐ Vercel๊ณผ Netlify๊ฐ
            ๋ํ์ ์ผ๋ก ์์์ผ๋ Next.js์์๋ Vercel๋ฅผ ์ด์ฉํ ๋ฐฐํฌ๋ฅผ ๊ถ์ฅํ์๊ธฐ
            ๋๋ฌธ์ ์ด๋ฒ์ Vercel๋ฅผ ์ด์ฉํด์ ๋ฐฐํฌํด๋ณด์์ต๋๋ค. ๋ฐฐํฌ๋ฅผ ์ํ ์ค์ ์
            ์๋์ผ๋ก ํด์ฃผ๊ธฐ ๋๋ฌธ์ ์ ๋ง ํธ๋ฆฌํ๊ฒ ์ฌ์ฉํ๋๊ฑฐ ๊ฐ์ต๋๋ค.
          </p>
        </div>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>๐ Github</div>
        <Link
          className='hover:text-gray-500 hover:duration-300 font-appleMedium text-lg'
          href='https://github.com/owni14/portfolio'
        >
          https://github.com/owni14/portfolio
        </Link>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>
          ๐ Deployment Link
        </div>
        <Link
          className='hover:text-gray-500 hover:duration-300 font-appleMedium text-lg'
          href='https://mins-portfolio.vercel.app/'
        >
          https://mins-portfolio.vercel.app/
        </Link>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>
          ๐ ๏ธ Technology Stacks
        </div>
        <div className='font-appleMedium text-lg'>
          <li>Front End : Next.js, TailwindCSS, Typescript</li>
          <li>Back End : -</li>
          <li>Database : -</li>
          <li>Deployment : Vercel</li>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
