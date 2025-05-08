import type { ProfileProps } from '@/types/profile';
import AvatarCompact from './AvatarCompact';
import Avatar from './Avatar';

const styles = {
  main: {
    section: 'flex flex-col items-center w-full mt-20',
  },

  compact: {
    section: 'flex justify-between items-center text-xl p-4 border-b-2 border-white',
  },
};

export default function Profile({ variant = 'main', userData }: ProfileProps) {
  return (
    <section aria-label="User information" className={styles[variant].section}>
      {variant === 'compact' ? <AvatarCompact userData={userData} /> : <Avatar userData={userData} />}
    </section>
  );
}
