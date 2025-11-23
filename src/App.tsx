import { useState } from 'react';
import './App.css';

// TODO1 : 만든음식 저장 & 좋아요
// TODO2 : 내 재료 저장 DB 연동

interface Recipe {
  dishName: string;
  cookingTime: string;
  recipe: string;
}

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddIngredient = () => {
    if (inputValue.trim() !== '') {
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemoveIngredient = (indexToRemove: number) => {
    setIngredients(ingredients.filter((_, index) => index !== indexToRemove));
  };

  const handleGetRecipe = async () => {
    if (ingredients.length === 0) {
      alert('식재료를 하나 이상 추가해주세요.');
      return;
    }
    setLoading(true);
    setRecipe(null);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients }),
      });

      if (!response.ok) {
        throw new Error('서버에서 레시피를 받아오는데 실패했습니다.');
      }

      const data: Recipe = await response.json();
      setRecipe(data);

    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>식재료 목록</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddIngredient()}
          placeholder="식재료를 입력하세요"
        />
        <button onClick={handleAddIngredient}>추가</button>
      </div>
      <ul className="ingredient-list">
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient}
            <button onClick={() => handleRemoveIngredient(index)}>삭제</button>
          </li>
        ))}
      </ul>

      <div className="recipe-container">
        <button onClick={handleGetRecipe} className="get-recipe-btn" disabled={loading}>
          {loading ? '레시피 찾는중...' : '오늘 뭐 먹지?'}
        </button>
        
        {loading && <p>맛있는 요리를 찾고 있습니다...</p>}
        
        {error && <p className="error-message">{error}</p>}

        {recipe && recipe.recipe && (
          <div className="recipe-result">
            <h2>추천 요리: {recipe.dishName}</h2>
            <p className="cooking-time">예상 조리 시간: {recipe.cookingTime}</p>
            <ol>
              {recipe.recipe.split('\n').map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;