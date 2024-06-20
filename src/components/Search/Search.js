import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import './Search.css';
import { FaSearch } from 'react-icons/fa';

function Search() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [nutritionInfo, setNutritionInfo] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const API_KEY = 'f8zmBkfwODgKdj3Q96xQpkyRUhvcNDfVr9oBpANO';

  useEffect(() => {
    setNotFound(false);
    setError(null);
  }, [query]);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError('Please enter a food item to search.');
      return;
    }

    if (/^\d+$/.test(query)) {
      setError('Please enter a valid food item name, not just numbers.');
      return;
    }

    if (/^-/.test(query)) {
      setError('Negative numbers are not allowed.');
      return;
    }

    setLoading(true);
    setNutritionInfo(null);
    setNotFound(false);
    setError(null);

    try {
      const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&api_key=${API_KEY}`);

      const getNutrientValue = (nutrients, id) => {
        const nutrient = nutrients.find(n => n.nutrientId === id);

        if (nutrient) {
          return `${nutrient.value} ${nutrient.unitName || ''}`.trim();
        }
        return 'Not available';
      };

      const data = await response.json();

      if (data.foods && data.foods.length > 0) {
        const foodItem = data.foods[0];
        setNutritionInfo({
          name: foodItem.description,
          protein: getNutrientValue(foodItem.foodNutrients, 1003),
          carbohydrate: getNutrientValue(foodItem.foodNutrients, 1005),
          energy: getNutrientValue(foodItem.foodNutrients, 1008),
          fat: getNutrientValue(foodItem.foodNutrients, 1004),
          fiber: getNutrientValue(foodItem.foodNutrients, 1079),
          calcium: getNutrientValue(foodItem.foodNutrients, 1087),
          iron: getNutrientValue(foodItem.foodNutrients, 1089),
          vitaminA: getNutrientValue(foodItem.foodNutrients, 1104),
          vitaminC: getNutrientValue(foodItem.foodNutrients, 1162),
          cholesterol: getNutrientValue(foodItem.foodNutrients, 1253)
        });
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error("An error occurred while fetching the data", error);
    }

    setLoading(false);
  };

  return (
    <div className="search-container">
      <h1 className="page-heading">Food Nutritional Values At A Glance</h1>
      <div className="search-form">
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter food item"
        />
        <button className="search-button" onClick={handleSearch} disabled={loading}>
          {loading ? <Spinner /> : <FaSearch />}
        </button>
      </div>
      <br />

      {error && <p className="error">{error}</p>}
      {notFound && <p>No results found for "{query}". Please try another search.</p>}

      {nutritionInfo && (
        <div className="result-container">
          <h2 className="result-title">{nutritionInfo.name}</h2>
          <table className="result-table">
            <tbody>
              <tr>
                <td className="result-label">Protein:</td>
                <td>{nutritionInfo.protein}</td>
              </tr>
              <tr>
                <td className="result-label">Carbohydrates:</td>
                <td>{nutritionInfo.carbohydrate}</td>
              </tr>
              <tr>
                <td className="result-label">Energy:</td>
                <td>{nutritionInfo.energy}</td>
              </tr>
              <tr>
                <td className="result-label">Fat:</td>
                <td>{nutritionInfo.fat}</td>
              </tr>
              <tr>
                <td className="result-label">Fiber:</td>
                <td>{nutritionInfo.fiber}</td>
              </tr>
              <tr>
                <td className="result-label">Calcium:</td>
                <td>{nutritionInfo.calcium}</td>
              </tr>
              <tr>
                <td className="result-label">Iron:</td>
                <td>{nutritionInfo.iron}</td>
              </tr>
              <tr>
                <td className="result-label">Vitamin A:</td>
                <td>{nutritionInfo.vitaminA}</td>
              </tr>
              <tr>
                <td className="result-label">Vitamin C:</td>
                <td>{nutritionInfo.vitaminC}</td>
              </tr>
              <tr>
                <td className="result-label">Cholesterol:</td>
                <td>{nutritionInfo.cholesterol}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Search;
