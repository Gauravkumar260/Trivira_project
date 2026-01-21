import product1 from '@/assets/images/products/product1.svg';
import product4 from '@/assets/images/products/product4.svg';
import product11 from '@/assets/images/products/product11.svg';

import plantProtein from '@/assets/icons/product-showcase/Plant Based Protein Powder.svg';
import functionalMushroom from '@/assets/icons/product-showcase/Functional mushroom.svg';
import stevia from '@/assets/icons/product-showcase/Stevia.svg';

import heartPlusIcon from '@/assets/icons/product-showcase/solar_health-bold.svg';
import weightIcon from '@/assets/icons/product-showcase/game-icons_weight.svg';
import stomachIcon from '@/assets/icons/product-showcase/healthicons_stomach-cancer.svg';
import puzzleIcon from '@/assets/icons/product-showcase/material-symbols_extension.svg';
import bodyIcon from '@/assets/icons/product-showcase/healthicons_autoimmune-disease.svg';
import dropIcon from '@/assets/icons/product-showcase/healthicons_blood-drop.svg';
import metabolismIcon from '@/assets/icons/product-showcase/simple-icons_oxygen.svg';

const assets = {
    icons: {
        heartPlus: heartPlusIcon.src,
        weight: weightIcon.src,
        stomach: stomachIcon.src,
        puzzle: puzzleIcon.src,
        body: bodyIcon.src,
        drop: dropIcon.src,
        metabolism: metabolismIcon.src,
    },
    products: {
        protein: product4,
        mushroom: product11,
        stevia: product1,
    },
    categoryIcons: {
        protein: plantProtein,
        mushroom: functionalMushroom,
        stevia: stevia,
    }
};

import { Product } from '@/types';

export const products: Product[] = [
    {
        id: "protein", title: "Plant Based Protein Powder",
        description: "Forget about complicated process of shaking and lumps - simply put one scoop of these delicious flavors of Protein Powder into your shaker and let it work its cognitive magic.",
        image: assets.products.protein.src, categoryIcon: assets.categoryIcons.protein.src,
        benefits: [{ icon: assets.icons.heartPlus, text: "Improves heart health" }, { icon: assets.icons.weight, text: "Better weight management" }, { icon: assets.icons.stomach, text: "Enhanced digestive function" }],
        btnText: "SHOP PROTEIN POWDER", reverse: false,
        price: 0, // Required by type, dummy value
    },
    {
        id: "mushroom", title: "Functional mushroom",
        description: "Functional mushrooms are not psychedelic. Instead, they contain several medicinal compounds that strengthen gut health, immune health, and energy levels.",
        image: assets.products.mushroom.src, categoryIcon: assets.categoryIcons.mushroom.src,
        benefits: [{ icon: assets.icons.heartPlus, text: "Anti-ageing properties" }, { icon: assets.icons.puzzle, text: "Stress Relief" }, { icon: assets.icons.body, text: "Boosting Immune System" }],
        btnText: "SHOP FUNCTIONAL MUSHROOM", reverse: true,
        price: 0,
    },
    {
        id: "stevia", title: "Stevia",
        description: "Stevia is a natural sweetener extracted from the leaves of Stevia rebaudiana plant. Stevia is reported to be 200 to 400 times sweeter than table sugar but has zero calories.",
        image: assets.products.stevia.src, categoryIcon: assets.categoryIcons.stevia.src,
        benefits: [{ icon: assets.icons.drop, text: "Blood Sugar Regulation" }, { icon: assets.icons.weight, text: "Weight Management" }, { icon: assets.icons.metabolism, text: "Antioxidant Properties" }],
        btnText: "SHOP STEVIA", reverse: false,
        price: 0,
    }
];
