# XP Progression System

This document outlines the XP progression system used to determine user levels in the application, as well as how progress towards the next level is calculated.

## Overview

Users earn experience points (XP) for actions within the app. As they accumulate XP, they level up. The system uses a **polynomial formula** to define how much XP is required for each level. This allows early levels to be reached quickly while higher levels become increasingly difficult.

## XP Formula

We use a polynomial progression formula to calculate the XP required to reach a specific level:

---
XP(n) = a * n^b
---

Where:
- `n` is the level number
- `a` controls the scale of XP
- `b` controls the growth rate

### Example Constants

---
a = 100  
b = 2  
---

So for:
- Level 1: `XP(1) = 100 * 1^2 = 100`
- Level 2: `XP(2) = 100 * 2^2 = 400`
- Level 3: `XP(3) = 100 * 3^2 = 900`
- And so on.

## Progress to Next Level

To calculate the percentage progress towards the next level:

---
progress = (currentXP - XP(currentLevel)) / (XP(nextLevel) - XP(currentLevel)) * 100
---

This returns a value between 0 and 100 that can be used to render a progress bar.

### Example

- User's XP: 3000  
- XP for Level 5: 2550  
- XP for Level 6: 3650

---
progress = (3000 - 2550) / (3650 - 2550) = 450 / 1100 ≈ 0.409 → 40.9%
---

## Notes

- Adjust `a` and `b` to tune the pace and difficulty of levelling.
- An implementation of these formulas can be found in `./src/lib/xpUtils.ts`
