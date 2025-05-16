import Quest from '@/components/Quest';
import {render, screen} from '@testing-library/react';

const dailyQuest = {
  description: 'Add 3 people to your histlist',
  goal: 3,
  progress: 2,
  icon: './clock.jpg',
  reward: 10,
};

describe('<Quest />', () => {
  it('renders the description', () => {
    render(<Quest className="test-class" questData={dailyQuest} />);
    const description = screen.getByRole('heading');
    expect(description.textContent).toBe(dailyQuest.description);
  });

  it('renders the goal', () => {
    render(<Quest className="test-class" questData={dailyQuest} />);
    const goalSpan = screen.getByText('3');
    expect(goalSpan.textContent).toBe('3');
  });

  it('renders the progress', () => {
    render(<Quest className="test-class" questData={dailyQuest} />);
    const progressSpan = screen.getByText('2');
    expect(progressSpan.textContent).toBe('2');
  });
});
