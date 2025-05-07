export interface ProfileProps {
  variant: 'main' | 'compact';
  userData: UserData;
}

export interface UserData {
  username: string;
  profilePicURI: string;
  level: number;
  xp: number;
}

export interface AvatarProps {
  userData: UserData;
}

export interface AvatarCompactProps {
  userData: UserData;
}

export interface CircularProgressProps {
  progress: number;
  className?: string;
}
