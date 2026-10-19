
import RecipeCard from "@/component/recipeCard"
import { recipes } from '@/data/recipes'

export default function Home() {
  return (
    <>

      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "30px 20px",
        }}
      >

        <div style={{ marginBottom: "28px" }}>
          <p style={{ color: "grey" }}>
            Home / Recipes
          </p>

          <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
            All Recipes
          </h1>

          <p style={{ color: "grey", lineHeight: 1.6 }}>
            Discover delicious recipes for your everyday cooking.
            Find something wonderful to make today.
          </p>

          <p>{recipes.length} recipes to explore</p>
        </div>


        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "22px",
            justifyContent: "flex-start",
          }}
        >
          {recipes.map((data) => (
            <RecipeCard key={data.id} recipe={data} />
          ))}
        </div>

      </div>
    </>
  )
}