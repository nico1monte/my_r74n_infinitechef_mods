# Cook+

Special cook ingredients. And ones secrets.

<img src="./version.svg" width="100px" height="100px">

## Content

- [x] Ingredients

On the [file](./cook+.js)

- [x] Secrets
- [x] Tooltips (//)

### Sunflower cake

The sunflower cake have variations:

- Sunflower Cake
- Cooked Sunflower Cake
- Broken Sunflower Cake

#### Sunflower Cake (Normal)

The sunflower cake can appear with this colors:

- `#FFBE00`
- `#6d701d`
- `#d0d1b1`

If the Sunflower Cake it's broken appears the "Broken Sunflower Cake"

The Sunflower Cake have a Circle shape!

You can find the sunflower cake with typing `sunflower` or `cake` on the search tab.

#### Broken Sunflower Cake

The broken sunflower cake can appear with this colors:

- `#989973`
- `#787d41`

If the Broken Sunflower Cake it's broken appears wheat seeds.

The Broken Sunflower Cake have how a broken cook element shape.

You can find the broken sunflower cake with typing `broken`, `sunflower` or `cake` on the search tab.

### Pasta with Cheese

The pasta with cheese have this variations:

- Pasta with Cheese Pocket
- Pasta with Cheese

#### Pasta with Cheese Pocket

The pasta with cheese pocket can solo appear with this color: `#1481d4`

If the Pasta with Cheese Pocket it's broken appears pasta with cheese.

You can find it with typing `pocket`

The Pasta with Cheese Pocket have a vertical-bar shape!

#### Pasta with Cheese

The pasta with cheese can appear with this colors:

- `#a09c32ff`
- `#c5d912ff`

If it's broken appears wheat seeds.

It have a thin-rectangle shape

## Code

For view the code click this arrow down (V)

<details>
<summary><b>Code</b></summary>

```javascript
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
```

</details>

# IMPORTANT TO VIEW

> [!IMPORTANT]
> Not associated with R74N, not a real product or repository, visit [R74N's GitHub](https://github.com/R74nCom) for real projects. :)