import crown from 'assets/crown.png';
import icon from 'assets/icon.png';
import medal from 'assets/medal.png';
import axios from 'api/axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { orangeColor } from 'utils/colors';

export type ScoreType = {
  ban: string;
  message: string;
  nickname: string;
  rank: number;
  score: string;
  status: boolean;
  url: string;
};

const Grade = () => {
  const initData = {
    ban: '',
    message: '',
    nickname: '',
    rank: 0,
    score: '',
    status: false,
    url: '',
  };

  const [myRecord, setMyRecord] = useState<ScoreType>(initData);
  const [medalRecord, setMedalRecord] = useState([]);
  const [myImg, setmyImg] = useState('');

  const getMyData = async () => {
    await axios
      .get('game/score/1')
      .then(res => {
        setMyRecord(res.data);
      })
      .catch(err => console.log(err));

    await axios
      .get(`download/img/member/승지`)
      .then(res => {
        console.log('이미지', res.request.responseURL);
        setmyImg(res.request.responseURL);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getMyData();
  }, []);

  const getMedalData = async () => {
    await axios
      .get('game/score/total/1')
      .then(res => {
        console.log(res.data.list);
        setMedalRecord(res.data.list);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getMedalData();
  }, []);

  const navigate = useNavigate();
  const stampHandler = () => {
    navigate('/stampgif');
  };
  // const orderSecond = 'order-2';
  // const orderFirst = 'order-1';
  // const orderThrid = 'order-3';
  // const [od, setOd] = useState('');
  // const order = () => {
  //   if (medalRecord[0]) {
  //     setOd(orderSecond);
  //   } else if (medalRecord[1]) {
  //     setOd(orderFirst);
  //   } else {
  //     setOd(orderThrid);
  //   }
  //   return od;
  // };
  // console.log(od);

  return (
    <>
      <div className='flex flex-col justify-center items-center w-full '>
        {/* 전체성적 */}
        <div className='flex justify-center gap-6 pb-4'>
          {medalRecord.map((member: ScoreType, index) => (
            <div key={index}>
              <div className='flex flex-col justify-center items-center gap-3'>
                {member.rank === 1 ? (
                  <div className='flex flex-col justify-center items-center'>
                    <img src={crown} alt='' className='w-[27px] h-[22px] ' />
                    <div className='w-[70px] h-[70px] border rounded-full overflow-hidden'>
                      <img src={icon} alt='' className='w-full h-full ' />
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col justify-center items-center'>
                    <span className='text-[14px] font-semibold'>
                      {member.rank}
                    </span>
                    <div className='w-[50px] h-[50px] border rounded-full overflow-hidden'>
                      <img src={icon} alt='' className='w-full h-full ' />
                    </div>
                  </div>
                )}
                <div className='flex flex-col items-center'>
                  <span className='font-bold text-[17px]'>
                    {member.nickname}
                  </span>
                  <span className='text-zinc-400 text-[10px]'>
                    {member.ban}
                  </span>
                </div>
                <div className='border rounded-xl bg-slate-700 text-[10px] py-1 px-2 text-gray-200'>
                  {member.score}초
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 내성적 */}
        <div className='bg-[#fcfafadc] w-full px-10 py-4'>
          <span className='pl-3 text-[14px] flex font-semibold'>
            <img src={medal} alt='' className='w-[16px] h-[14px] mr-1 ' /> 내
            성적
          </span>
          <div className='flex justify-around items-center w-[313px] h-[70px] border shadow-lg rounded-full mt-3 text-zinc-400 text-[14px] pr-2'>
            <div className='w-[43px] h-[41px] border rounded-full overflow-hidden'>
              <img src={myImg} alt='' />
            </div>
            <div className='flex flex-col text-[8px] items-center pr-5'>
              <b className='text-black text-[16px]'>{myRecord.nickname}</b>
              <span>{myRecord.ban}</span>
            </div>
            <span>
              <b className='text-black text-[18px]'>{myRecord.rank}</b>등
            </span>
            <span>
              <b className='text-black text-[18px]'>{myRecord.score}</b>초
            </span>
          </div>
          <div className='flex flex-col justify-center items-center mt-5 text-center'>
            <span className='text-[15px] font-bold'>
              <b className={`text-[${orangeColor}] text-[19px]`}>
                {myRecord.nickname}
              </b>
              님은
              <br />
              상위 3% 입니다.
            </span>
            <p className='text-[8px] text-[#bbb] pt-4'>
              1, 2, 3 등 스탬프 기회 5번 | 상위 10% 스탬프 기회 3번 | 상위
              11~30% 스탬프 기회 2번 | 나머지 1번 | 자격 미달 0번
              <br />
              <span className='text-[#777777]'>
                * 일주일 내 게임 참여자에 한함
              </span>
            </p>
          </div>
        </div>
        {/* 스탬프 bt */}
        <div className='flex flex-col justify-center items-center text-[#5C5C5C] pt-4'>
          <span className='text-[15px]'>스탬프 3번의 기회가 있어요!</span>
          <span className='text-[20px] font-bold'>
            지금 스탬프 찍으러 가기!
          </span>
          <button
            className='w-[68px] h-[36px] font-extrabold text-white text-[20px] bg-[#ff8339] rounded-lg mt-3'
            onClick={stampHandler}
          >
            GO
          </button>
        </div>
      </div>
    </>
  );
};

export default Grade;
