# Prepa

A recipe app for university students in shared housing who want to eat according to their dietary goals.

## What It Does

Snap a photo of your fridge, select only your ingredients, and get recipes filtered by your diet and time constraints.

## The Problem

University students face daily friction when cooking:

- Open the fridge, see a mess of ingredients (some yours, some not), no idea what to make
- Want recipes that fit your diet but recipe apps don't filter this way
- Have 15 minutes before class and need something fast
- Half the fridge isn't yours, and no app accounts for shared living

## User Flow

```
1. Tap "Scan Your Fridge"
2. Take photo of ingredients
3. AI detects visible items
4. Select only what's yours (tap to include/exclude)
5. Choose your diet (high protein, keto, high calorie, vegetarian, etc.)
6. Set time available (10, 20, 30+ minutes)
7. Get matched recipes with nutrition info
8. View full recipe with step-by-step instructions
```

## Features

**Fridge Photo Scanning**
Take a photo of your fridge, pantry, or counter. OpenAI Vision detects all visible ingredients and returns them with confidence scores.

**Select What's Yours**
Detected ingredients appear as selectable chips. Tap to include only what belongs to you. Manually add items the AI missed.

**Diet Filters**
- High Protein: protein-focused meals
- Keto: low carb, high fat
- High Calorie: for bulking or weight gain
- Low Calorie: for cutting or weight loss
- Balanced: no specific restrictions
- Fun/Comfort: when you just want something good

**Dietary Requirements**
Vegetarian, vegan, gluten-free, dairy-free, halal

**Time Filters**
10 minutes, 20 minutes, 30+ minutes

**Equipment Constraints**
Microwave only, no oven, one pot, beginner friendly

**Recipe Results**
Sorted by ingredient match, protein content, or cook time. Shows what you have vs what you'd need to buy.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React Native + Expo |
| Backend | Express.js |
| AI | OpenAI Vision API |
| Deployment | Vercel |

## Architecture

### Frontend Structure
```
/src
  /screens
    HomeScreen.tsx           # Main entry, "Scan Fridge" CTA
    CameraScreen.tsx         # Photo capture
    IngredientsScreen.tsx    # Select your ingredients
    FiltersScreen.tsx        # Select diet/time/constraints
    RecipesScreen.tsx        # Recipe results list
    RecipeDetailScreen.tsx   # Single recipe view
  /components
    IngredientChip.tsx       # Selectable ingredient pill
    FilterButton.tsx         # Toggle filter buttons
    RecipeCard.tsx           # Recipe preview card
    NutritionBadge.tsx       # Protein/carb/fat display
  /services
    api.ts                   # Backend API calls
    imageService.ts          # Image handling
  /hooks
    useCamera.ts
    useIngredients.ts
    useRecipes.ts
  /context
    AppContext.tsx           # Global state
```

### Backend Structure
```
/server
  /routes
    ingredients.ts           # POST image -> ingredient list
    recipes.ts               # POST ingredients + filters -> recipes
  /services
    openaiService.ts         # OpenAI Vision API calls
    recipeService.ts         # Recipe matching logic
  /data
    recipes.json             # Curated recipe database
  index.ts                   # Express server entry
```

### Data Flow
```
Photo -> Backend -> OpenAI Vision -> Ingredient list
-> User selects ingredients + filters
-> Backend matches recipes, scores by ingredient coverage
-> Sorted results returned to frontend
```

## Recipe Data Model

```typescript
interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  ingredients: Ingredient[];
  instructions: string[];
  prepTime: number;           // minutes
  cookTime: number;           // minutes
  totalTime: number;          // minutes
  servings: number;
  nutrition: {
    calories: number;
    protein: number;          // grams
    carbs: number;            // grams
    fat: number;              // grams
  };
  tags: string[];             // "high-protein", "keto", "quick"
  equipment: string[];        // "microwave", "oven", "stovetop"
  dietary: string[];          // "vegetarian", "vegan", "halal"
  difficulty: "easy" | "medium" | "hard";
}

interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  optional?: boolean;
  substitutes?: string[];
}
```

## AI Ingredient Detection

The OpenAI Vision prompt returns structured JSON:

```json
[
  {"name": "chicken breast", "confidence": 0.95, "category": "protein"},
  {"name": "brown rice", "confidence": 0.90, "category": "carbs"},
  {"name": "broccoli", "confidence": 0.85, "category": "vegetables"}
]
```

Categories: protein, carbs, vegetables, fruits, dairy, condiment, spices, other

## What Makes It Different

No other app combines:
1. Photo scanning of fridge contents
2. Ingredient selection for shared living
3. Diet-specific filtering (keto, high protein, high cal, etc.)
4. Time-based filtering
5. Student-focused simplicity

The combination is the product.

## Target User

University students who live in shared accommodation and want to cook meals that fit their specific dietary goals without the friction.
