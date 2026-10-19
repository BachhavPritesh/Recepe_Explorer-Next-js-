
import RecipeCard from "@/component/recipeCard"
import {recipes} from '@/data/recipes'

export default function Home(){
  return(
    <>
   
       <div style={{ padding: "40px 20px" }}>
      <h1 style={{ marginBottom: "24px" }}>
        Recipe Card Preview
      </h1>

      <RecipeCard recipe={recipes[0]} />
    </div>

    </>
  )
}