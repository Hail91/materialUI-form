import React from 'react';
import RecipeCard from './RecipeCard';

 const RecipeMarket = () => {
    
    return (
        <div>
            <div className="mkt-title">
                <h1>Chef Portfolio</h1>
            </div>
            <div className="recipes-container">
                <RecipeCard />
            </div>
        </div>
    );
};

export default RecipeMarket;
