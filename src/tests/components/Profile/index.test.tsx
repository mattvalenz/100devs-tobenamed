import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

import Profile from '@/components/Profile';

const variants = ['main', 'compact'] as const;
const mockUserData = {
  username: 'John',
  level: 7,
  xp: 3000,
  profilePicURI: 'https://picsum.photos/id/237/150/150',
};

variants.forEach((variant) => {
  describe(`<Profile variant={${variant}}/>`, () => {
    beforeEach(() => {
      render(<Profile variant={variant} userData={mockUserData} />);
    });
    afterEach(cleanup);

    it('renders the username', () => {
      const username = screen.getByText(/John/);
      expect(username).toBeInTheDocument();
    });

    it('renders the level', () => {
      const level = screen.getByTitle(/level/i);
      expect(level).toHaveTextContent('7');
    });

    it('renders the experience points', () => {
      const xp = screen.getByTitle(/Experience Points/i);
      expect(xp).toBeInTheDocument();
    });

    it("renders the user's profile picture", () => {
      const img = screen.getByRole('img');
      expect(img.src).toMatch(/237/); // matches the id in the pictureURI
    });
  });
});
