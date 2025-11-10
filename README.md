# UniEats

A smart recipe app for university students that turns fridge photos into meal ideas.

## The Problem

You open your fridge and stare. You have ingredients but no idea what to make. Especially as a student, you need meals that are:

- Quick to cook (you have class in 30 minutes)
- Fit your goals (gym gains, cutting, or just tasty comfort food)
- Use what you already have (no extra shopping)

## The Solution

1. **Snap a photo** of your fridge
2. **AI identifies** what ingredients you have
3. **Select what's yours** (ignore your roommate's leftovers or family's food)
4. **Get recipes** filtered by your needs: quick meals, high protein, bulking, low-cal, or just something good

## What Makes This Different

Most recipe apps assume you'll go shopping for ingredients. This one works backwards - it starts with what you have and suggests what's actually possible to make right now.

**Smart Filters:**

- Time-based: "I have 10 minutes"
- Fitness: "High protein, low carb"
- Skill: "Microwave only"
- Vibe: "Comfort food" vs "Clean eating"

**Shared Living Friendly:**

- Crop photos to your shelf
- Tap to select only your ingredients
- Future: roommate sharing features

## Planned Features

**MVP (Current Focus):**

- Camera/gallery photo capture
- Vision AI detection of fridge items
- Manual selection of available ingredients
- Recipe suggestions with niche filters

**Future Ideas:**

- Expiry tracking with "use it up" mode
- Macro calculator per recipe
- Shopping list sync
- Cost per meal tracking
- Meal prep planner
- Leftover transformer
- Social pantry for roommates

## Tech Approach

- **Mobile**: React Native + Expo
- **AI**: OpenAI Vision API for ingredient detection
- **Backend**: Express server to keep API keys secure
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npx expo start
```
