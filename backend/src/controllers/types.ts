export interface recipeRequest {
  ingredients: string[];
  filters?: {
    vegetarian?: boolean;
    vegan?: boolean;
    glutenFree?: boolean;
    dairyFree?: boolean;
  };
  maxTime?: number;
}

export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: number;
  dietary: string[];
  matchPercentage?: number;
}