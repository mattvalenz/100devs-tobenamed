import { getLevelProgressPercentage } from '@/lib/xpUtils';

const xpTable = [100, 237, 394, 565, 747, 939, 1138, 1345, 1558, 1778];

describe('getLevelProgressPercentage()', () => {
  it('returns correct percentage for level 1', () => {
    expect(getLevelProgressPercentage(1, 50, xpTable)).toBe(50);
  });

  it('returns 0% when xp is exactly at current level', () => {
    expect(getLevelProgressPercentage(3, 237, xpTable)).toBe(0);
  });

  it('returns 100% when xp reaches next level', () => {
    expect(getLevelProgressPercentage(2, 237, xpTable)).toBe(100);
  });

  it('returns correct percentage for values between two levels', () => {
    expect(getLevelProgressPercentage(2, 102, xpTable)).toBe(1);
    expect(getLevelProgressPercentage(2, 236, xpTable)).toBe(99);
  });
});
