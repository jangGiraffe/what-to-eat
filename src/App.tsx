import { useState } from 'react';
import './App.css';

// TODO1 : 만든음식 저장 & 좋아요
// TODO2 : 내 재료 저장 DB 연동

interface Recipe {
  dishName: string;
  steps: string[];
}

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(false);

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

    // 백엔드 API 호출 시뮬레이션
    // 실제로는 여기서 fetch나 axios를 사용하여 백엔드에 ingredients를 보냅니다.
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 백엔드로부터 받은 가상의 데이터
    const mockRecipe: Recipe = {
      dishName: '김치찌개',
      steps: [
        '1. 김치와 돼지고기를 냄비에 넣고 볶습니다.',
        '2. 물을 붓고 끓입니다.',
        '3. 두부, 파, 마늘을 넣고 한소끔 더 끓입니다.',
        '4. 소금이나 국간장으로 간을 맞춥니다.'
      ]
    };
    
    setRecipe(mockRecipe);
    setLoading(false);
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

        {recipe && (
          <div className="recipe-result">
            <h2>추천 요리: {recipe.dishName}</h2>
            <ol>
              {recipe.steps.map((step, index) => (
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