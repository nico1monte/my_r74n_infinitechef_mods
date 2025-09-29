// Nico1Monte's Mod
// cook+

addIngredient("sunflower_cake",{
    color:["#FFBE00", "#6d701d", "#d0d1b1"],
    type:"decor",
    shape:"circle",
    keywords:"sunflower,cake",
    broken:"broken_sunflower_cake"
});

addIngredient("cooked_sunflower_cake",{
    color:["#ffffff", "#bfc0a4", "#edeed5", "#fffff6"],
    type:"decor",
    shape:"circle",
    keywords:"sunflower,cake,cooked",
    broken:"broken_sunflower_cake"
});

addIngredient("broken_sunflower_cake",{
    color:["#989973", "#787d41"],
    type:"thick_liquid",
    shape:"blob_short",
    keywords:"broken,sunflower,cake",
    broken:"wheat"
});

addIngredient("pasta_with_cheese_pocket",{
    color:"#1481d4",
    type:"decor",
    shape:"bar_vertical",
    keywords:"pocket",
    broken:"pasta_with_cheese"
});

addIngredient("pasta_with_cheese",{
    color:["#a09c32ff", "#c5d912ff"],
    shape:"rectangle_thin",
    keywords:"pasta,cheese",
    broken:"wheat"
});


// Barks are make for make black ingredients or white liquids.
addIngredient("bark",{
    color:"#000000",
    shape:"circle",
    keywords:"b",
    broken:"broken_bark"
});

addIngredient("broken_bark",{
    color:"#ffffff",
    type:"liquid",
    keywords:"bb"
});



// Made by Nico1Monte
// Helps by Mods:
// Nutrients.js and a_cooks_corner.js