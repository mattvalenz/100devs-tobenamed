/**
 * Generates a list of XP required for each level using a curved difficulty formula:
 * `scale * level ** growthRate`.
 *
 * Details can be found in `xp-progression-system.md`.
 *
 * @param maxLevel - The maximum level to calculate XP for (default: 99).
 * @param scale - The base XP scaling factor (default: 100).
 * @param growthRate - The exponent for XP growth curve (default: 1.25).
 * @returns An array of XP required for each level from 1 to maxLevel.
 *
 * @example
 * generateXpTable(5, 100, 1.5) // returns [100, 237, 394, 565, 747]
 */
function generateXpTable(maxLevel = 99, scale = 100, growthRate = 1.25) {
  const xpTable = [];

  for (let level = 1; level <= maxLevel; level += 1) {
    const xpNeededForCurrentLevel = Math.floor(scale * level ** growthRate);
    xpTable.push(xpNeededForCurrentLevel);
  }

  return xpTable;
}

export const xpTable = generateXpTable();

/**
 * Calculates the progress toward the next level as a percentage.
 *
 * @param currentLevel - The player's current level (expected to be >= 1).
 * @param currentXp - The player's current XP.
 * @param xpMap - Array of XP thresholds for each level (default: xpTable).
 * @returns The progress percentage as a number (0 to 100).
 *
 * @example
 * getLevelProgressPercentage(2, 102) // returns 1
 */
export function getLevelProgressPercentage(
  currentLevel: number,
  currentXp: number,
  xpMap: number[] = xpTable,
): number {
  if (currentLevel === 1) return (currentXp / xpMap[0]) * 100;

  const prevLevelXp = xpMap[currentLevel - 2];
  const nextLevelXp = xpMap[currentLevel - 1];

  return Math.floor(((currentXp - prevLevelXp) / (nextLevelXp - prevLevelXp)) * 100);
}
