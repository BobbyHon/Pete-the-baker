function cakes(recipe, available) {
    let recipeRequire = Object.keys(recipe)
    let canStillMake = true
    let canMake = -1
    
    do {
      for (let i = 0; i < recipeRequire.length; i++){
        if (available[recipeRequire[i]] == undefined) canStillMake = false
        
        available[recipeRequire[i]] -= recipe[recipeRequire[i]]
        
        if (available[recipeRequire[i]] < 0)
        {
          canStillMake = false
        }
      }
      ++canMake
    }  while(canStillMake)
    
    return canMake
}