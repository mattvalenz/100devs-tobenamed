import Image from 'next/image';

interface QuestProps {
  className?: string;
  questData: {
    description: string;
    goal: number;
    progress: number;
    icon: string;
    reward: number;
  };
}

export default function Quest({className, questData}: QuestProps) {
  const {description, progress, goal} = questData;
  console.log({progress, goal});
  return (
    <section className={className || 'flex items-center gap-4 py-5 px-10 rounded'}>
      <Image className={'h-20 w-20'} src="/linkedin.png" alt="" height={50} width={50} />
      <div className="w-full">
        <h3 className="font-bold">{description}</h3>
        <div className="relative text-sm text-center bg-zinc-800 rounded-full my-4 overflow-hidden">
          <div
            id="progress-bar"
            className={`absolute t-0 l-0 h-full bg-teal-600 z-1`}
            style={{
              width: Math.floor((progress / goal) * 100) + '%',
            }}
          ></div>
          <p className="relative z-1">
            {progress}/{goal}
          </p>
        </div>
      </div>
    </section>
  );
}
