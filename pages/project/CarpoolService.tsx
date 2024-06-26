import Link from "next/link";
import { useRouter } from "next/router";

const CarpoolService = () => {
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
            같은 회사 사람들끼리 카풀을 이용할 수 있는 웹서비스입니다. 회원가입
            완료 후 자차를 소지하고 있으면 운전자 등록이 가능한데 면허증을
            첨부하면 관리자 페이지에서 확인하고 승인이 이루어지게 됩니다. 그렇게
            운전자 등록이 된 회원은 다음 날 카풀을 위해 운전 등록을 할 수 있으며
            일반 회원은 탑승하기 페이지에서 운전자 리스트를 지도를 통해 확인이
            가능합니다.
          </p>
          <p className='mb-2'>
            운전자 및 탑승자가 카풀을 마치게 되면 탑승자는 운전자에 대한 평가를
            할 수 있으며 운전자를 평가에 따라 리워드를 받게 되고 리워드가
            어느정도 쌓일 경우 주유권이나 다른 상품권으로 교환 가능하게
            구현하였습니다.
          </p>
          <p>
            또한, 보통 회사 출근이 8~10시라고 가정하고 10시가 되면 카풀이
            완료되었다고 하고 Oracle의 Scheduler을 이용하여 탑승횟수를 늘리는
            방식으로 진행하였습니다.
          </p>
        </div>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>💡 Meaning</div>
        <div className='whitespace-normal font-appleMedium text-lg'>
          <p className='mb-2'>
            학원에서 진행 한 첫 팀프로젝트로써 막막함도 있었지만 팀원들이랑 같이
            아침부터 저녁까지 코딩을 하면서 모르는 것을 서로 물어보고 각자 맡은
            부분에 대해서 성실하게 코딩하니까 나름 괜찮은 프로젝트가 된거 같다는
            생각을 합니다.
          </p>
          <p className='mb-2'>
            기간이 한달 밖에 안되서 많은 기능을 구현하지 못하였지만,
            카카오지도API를 사용해보기도 하였습니다. 원래 Java Spring과 Oracle을
            이용해 백엔드 위주로 배웠었지만 CSS 스타일링도 조금 하기도 했습니다.
          </p>
          <p className='mb-2'>
            팀 프로젝트를 진행하면서 가장 많이 느꼈던 것중 하나가
            의사소통이었던거 같습니다. 의사소통을 하지 않고 각자 플레이를 하는
            다른 팀의 결과물을 봤을때 결과가 그렇게 좋지 않았던거 같았습니다.
            그리고 제가 비록 나이가 제일 어렸지만 팀의 리더가 되겠다고 하였으며,
            팀원들을 이끌기도 하였습니다.
          </p>
          <p>
            프로젝트를 진행할때 학원 컴퓨터에 DB에 모든 정보가 담겨져 있었고
            프론트엔드 기술인 React나 Vue를 사용하지 않았기 때문에 배포를 어떻게
            해야하나 생각하지 못해 PPT로 작성을 하였습니다. 따라서 배포 링크
            없이 Github주소를 들어가시면 PPT를 다운받을 수 있습니다.
          </p>
        </div>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>🔍 Github</div>
        <Link
          className='hover:text-gray-500 hover:duration-300 font-appleMedium text-lg'
          href='https://github.com/owni14/CarpoolService_TeamProject'
        >
          https://github.com/owni14/CarpoolService_TeamProject
        </Link>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold '>
          🔗 Deployment Link
        </div>
        <Link
          className='hover:text-gray-500 hover:duration-300 font-appleMedium text-lg'
          href='#'
        >
          -
        </Link>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>
          🛠️ Technology Stacks
        </div>
        <div className='font-appleMedium text-lg'>
          <li>Front End : HTML, Javascript, CSS, Bootstrap, jQuery</li>
          <li>Back End : Java, Spring</li>
          <li>Database : Oracle</li>
          <li>Deployment : -</li>
        </div>
      </div>
    </div>
  );
};

export default CarpoolService;
