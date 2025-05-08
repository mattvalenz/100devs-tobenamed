import Image from 'next/image';
import { getLevelProgressPercentage } from '@/lib/xpUtils';
import type { AvatarProps } from '@/types/profile';
import CircularProgress from './CircularProgress';

export default function Avatar({ userData }: AvatarProps) {
  const progressToNextLevel = getLevelProgressPercentage(userData.level, userData.xp);

  return (
    <>
      <div className="relative rounded-full">
        <div className="relative w-40 h-40">
          <Image
            src={userData.profilePicURI}
            alt={`${userData.username}`}
            width={160}
            height={160}
            className="absolute top-0 left-0 w-full h-full rounded-full object-cover"
          />
          <CircularProgress
            progress={progressToNextLevel}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
        <p
          title={`Level ${userData.level}`}
          className="flex items-center justify-center bg-white rounded-full w-8 h-8 text-black font-bold border-solid border-3 absolute bottom-0 right-5"
        >
          {userData.level}
        </p>
      </div>
      <h2 className="text-4xl mt-2">{userData.username}</h2>
      <p title={`${userData.xp} Experience Points`} className="text-xl mt-2">
        {userData.xp}
        {' '}
        XP
      </p>
    </>
  );
}
