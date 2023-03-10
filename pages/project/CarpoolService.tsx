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
        <div className='text-4xl mb-4 font-appleSemiBold'>π Summary</div>
        <div className='whitespace-normal font-appleMedium text-lg'>
          <p className='mb-2'>
            κ°μ νμ¬ μ¬λλ€λΌλ¦¬ μΉ΄νμ μ΄μ©ν  μ μλ μΉμλΉμ€μλλ€. νμκ°μ
            μλ£ ν μμ°¨λ₯Ό μμ§νκ³  μμΌλ©΄ μ΄μ μ λ±λ‘μ΄ κ°λ₯νλ° λ©΄νμ¦μ
            μ²¨λΆνλ©΄ κ΄λ¦¬μ νμ΄μ§μμ νμΈνκ³  μΉμΈμ΄ μ΄λ£¨μ΄μ§κ² λ©λλ€. κ·Έλ κ²
            μ΄μ μ λ±λ‘μ΄ λ νμμ λ€μ λ  μΉ΄νμ μν΄ μ΄μ  λ±λ‘μ ν  μ μμΌλ©°
            μΌλ° νμμ νμΉνκΈ° νμ΄μ§μμ μ΄μ μ λ¦¬μ€νΈλ₯Ό μ§λλ₯Ό ν΅ν΄ νμΈμ΄
            κ°λ₯ν©λλ€.
          </p>
          <p className='mb-2'>
            μ΄μ μ λ° νμΉμκ° μΉ΄νμ λ§μΉκ² λλ©΄ νμΉμλ μ΄μ μμ λν νκ°λ₯Ό
            ν  μ μμΌλ©° μ΄μ μλ₯Ό νκ°μ λ°λΌ λ¦¬μλλ₯Ό λ°κ² λκ³  λ¦¬μλκ°
            μ΄λμ λ μμΌ κ²½μ° μ£Όμ κΆμ΄λ λ€λ₯Έ μνκΆμΌλ‘ κ΅ν κ°λ₯νκ²
            κ΅¬ννμμ΅λλ€.
          </p>
          <p>
            λν, λ³΄ν΅ νμ¬ μΆκ·Όμ΄ 8~10μλΌκ³  κ°μ νκ³  10μκ° λλ©΄ μΉ΄νμ΄
            μλ£λμλ€κ³  νκ³  Oracleμ Schedulerμ μ΄μ©νμ¬ νμΉνμλ₯Ό λλ¦¬λ
            λ°©μμΌλ‘ μ§ννμμ΅λλ€.
          </p>
        </div>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>π‘ Meaning</div>
        <div className='whitespace-normal font-appleMedium text-lg'>
          <p className='mb-2'>
            νμμμ μ§ν ν μ²« ννλ‘μ νΈλ‘μ¨ λ§λ§ν¨λ μμμ§λ§ νμλ€μ΄λ κ°μ΄
            μμΉ¨λΆν° μ λκΉμ§ μ½λ©μ νλ©΄μ λͺ¨λ₯΄λ κ²μ μλ‘ λ¬Όμ΄λ³΄κ³  κ°μ λ§‘μ
            λΆλΆμ λν΄μ μ±μ€νκ² μ½λ©νλκΉ λλ¦ κ΄μ°?μ νλ‘μ νΈκ° λκ±° κ°λ€λ
            μκ°μ ν©λλ€.
          </p>
          <p className='mb-2'>
            κΈ°κ°μ΄ νλ¬ λ°μ μλμ λ§μ κΈ°λ₯μ κ΅¬ννμ§ λͺ»νμμ§λ§,
            μΉ΄μΉ΄μ€μ§λAPIλ₯Ό μ¬μ©ν΄λ³΄κΈ°λ νμμ΅λλ€. μλ Java Springκ³Ό Oracleμ
            μ΄μ©ν΄ λ°±μλ μμ£Όλ‘ λ°°μ μμ§λ§ CSS μ€νμΌλ§λ μ‘°κΈ νκΈ°λ νμ΅λλ€.
          </p>
          <p className='mb-2'>
            ν νλ‘μ νΈλ₯Ό μ§ννλ©΄μ κ°μ₯ λ§μ΄ λκΌλ κ²μ€ νλκ°
            μμ¬μν΅μ΄μλκ±° κ°μ΅λλ€. μμ¬μν΅μ νμ§ μκ³  κ°μ νλ μ΄λ₯Ό νλ
            λ€λ₯Έ νμ κ²°κ³Όλ¬Όμ λ΄€μλ κ²°κ³Όκ° κ·Έλ κ² μ’μ§ μμλκ±° κ°μμ΅λλ€.
            κ·Έλ¦¬κ³  μ κ° λΉλ‘ λμ΄κ° μ μΌ μ΄λ Έμ§λ§ νμ λ¦¬λκ° λκ² λ€κ³  νμμΌλ©°,
            νμλ€μ μ΄λκΈ°λ νμμ΅λλ€.
          </p>
          <p>
            νλ‘μ νΈλ₯Ό μ§νν λ νμ μ»΄ν¨ν°μ DBμ λͺ¨λ  μ λ³΄κ° λ΄κ²¨μ Έ μμκ³ 
            νλ‘ νΈμλ κΈ°μ μΈ Reactλ Vueλ₯Ό μ¬μ©νμ§ μμκΈ° λλ¬Έμ λ°°ν¬λ₯Ό μ΄λ»κ²
            ν΄μΌνλ μκ°νμ§ λͺ»ν΄ PPTλ‘ μμ±μ νμμ΅λλ€. λ°λΌμ λ°°ν¬ λ§ν¬
            μμ΄ Githubμ£Όμλ₯Ό λ€μ΄κ°μλ©΄ PPTλ₯Ό λ€μ΄λ°μ μ μμ΅λλ€.
          </p>
        </div>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>π Github</div>
        <Link
          className='hover:text-gray-500 hover:duration-300 font-appleMedium text-lg'
          href='https://github.com/owni14/CarpoolService_TeamProject'
        >
          https://github.com/owni14/CarpoolService_TeamProject
        </Link>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold '>
          π Deployment Link
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
          π οΈ Technology Stacks
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
