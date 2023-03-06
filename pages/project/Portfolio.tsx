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
        <div className='text-4xl mb-4 font-appleSemiBold'>📌 Summary</div>
        <div className='whitespace-normal font-appleMedium text-lg'>
          <p className='mb-2'>
            써보지 않았던 프레임워크인 Next.js와 처음 써보는 CSS인 tailwindCSS를
            같이해서 만든 <b>개인 포트폴리오</b>입니다.
          </p>
          <p className='mb-2'>
            혼자서 처음 만들어보는 웹 프론트엔드 프로젝트로써 SPA에 대한 이해,
            React 및 Next.js에 대한 학습 그리고 CSS 스타일링에 대한 내용을 알 수
            있게 된 계기가 된 프로젝트입니다.
          </p>
        </div>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>💡 Meaning</div>
        <div className='whitespace-normal font-appleMedium text-lg'>
          <p className='mb-2'>
            웹 프로젝트는 JSP와 부트스트랩을 이용해 만든 적이 있지만 실제로 제가
            처음부터 끝까지 혼자서 퍼블리싱과 여러 기능들을 만든 것은 처음인
            프로젝트입니다. 또한, 이번 포트폴리오는 회사재직 당시 퇴근 후 틈틈이
            시간을 할애해 만든 프로젝트입니다.
          </p>
          <p className='mb-2'>
            전 보통 CSS는 styled-components를 선호하지만 styled-components를
            사용할때는 항상 클래스명을 고민해야했는데 이번에 클래스명을 고민
            없이 쉽게 사용할 수 있는 tailwindCSS를 한번 사용해 보고 싶어서 이번
            프로젝트에 적용해보았습니다. tailwindsCSS를 사용해보니 정말 쉽고
            편하게 사용할 수 있고 빠르게 퍼블리싱을 할 수 있겠다라는 생각이
            들었습니다. 그러나 가독성의 문제는 단점으로 다가왔던거 같습니다.
          </p>
          <p className='mb-2'>
            Next.js는 클라이언트 사이드 렌더링도 지원하면서 동시에 SEO를 위한
            서버 사이드 렌더링을 지원하여 검색 성능향상에 도움이 된다는 것에
            신기했습니다.
          </p>
          <p className='mb-2'>
            그리고 프로젝트 배포를 처음으로 해보았는데 Vercel과 Netlify가
            대표적으로 있었으나 Next.js에서는 Vercel를 이용한 배포를 권장하였기
            때문에 이번에 Vercel를 이용해서 배포해보았습니다. 배포를 위한 설정을
            자동으로 해주기 때문에 정말 편리하게 사용했던거 같습니다.
          </p>
        </div>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>🔍 Github</div>
        <Link
          className='hover:text-gray-500 hover:duration-300 font-appleMedium text-lg'
          href='https://github.com/owni14/portfolio'
        >
          https://github.com/owni14/portfolio
        </Link>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>
          🔗 Deployment Link
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
          🛠️ Technology Stacks
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
