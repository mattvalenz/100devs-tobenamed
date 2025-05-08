import Image from 'next/image';
import type { AvatarCompactProps } from '@/types/profile';

export default function AvatarCompact({ userData }: AvatarCompactProps) {
  return (
    <>
      <Image src={userData.profilePicURI} alt={`${userData.username}`} width={50} height={50} />
      <h2>{userData.username}</h2>
      <p title={`Level ${userData.level}`}>{userData.level}</p>
      <p title={`${userData.xp} Experience Points`}>
        {userData.xp}
        {' '}
        XP
      </p>
    </>
  );
}
