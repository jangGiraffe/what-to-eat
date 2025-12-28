import { useState } from 'react';
import './App.css';

// --- Icons (SVG Components) ---
const HomeIcon = () => (
  <svg aria-label="Home" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
);
const SearchIcon = () => (
  <svg aria-label="Search" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
);
const AddIcon = () => (
  <svg aria-label="New Post" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
);
const ReelsIcon = () => (
  <svg aria-label="Reels" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fillRule="evenodd"></path></svg>
);
const HeartIcon = () => (
  <svg aria-label="Like" color="currentColor" fill="none" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.956-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
);
const CommentIcon = () => (
  <svg aria-label="Comment" color="currentColor" fill="none" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
);
const ShareIcon = () => (
  <svg aria-label="Share Post" color="currentColor" fill="none" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
);
const BookmarkIcon = () => (
  <svg aria-label="Save" color="currentColor" fill="none" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
);
const MoreIcon = () => (
  <svg aria-label="More" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
);

interface Recipe {
  id: number;
  dishName: string;
  cookingTime: string;
  recipe: string;
  timestamp: string;
  imageUrl?: string;
  imageLoading?: boolean;
  usedIngredients?: string[];
}

const getIngredientType = (name: string): string => {
  const meats = ['고기', '돼지', '소고기', '닭', '양고기', '햄', '소시지', '베이컨', '오리', '삼겹살', '목살', '갈비', '한우', '차돌박이', '안심', '등심', '스팸', '참치'];
  const vegetables = ['양파', '파', '마늘', '당근', '감자', '고구마', '상추', '깻잎', '시금치', '배추', '무', '오이', '호박', '버섯', '고추', '피망', '브로콜리', '콩나물', '숙주', '토마토', '가지', '양배추', '청경채'];
  const seafoods = ['새우', '오징어', '낙지', '문어', '조개', '게', '생선', '고등어', '갈치', '전복', '굴'];
  const dairy = ['계란', '달걀', '우유', '치즈', '버터', '두부', '요거트'];
  const grains = ['쌀', '밥', '면', '빵', '떡', '국수', '파스타', '밀가루'];
  
  if (meats.some(meat => name.includes(meat))) return 'meat';
  if (vegetables.some(veg => name.includes(veg))) return 'vegetable';
  if (seafoods.some(sea => name.includes(sea))) return 'seafood';
  if (dairy.some(d => name.includes(d))) return 'dairy';
  if (grains.some(g => name.includes(g))) return 'grain';
  return 'etc';
};

const getBadgeStyle = (type: string) => {
  switch (type) {
    case 'meat': return { backgroundColor: '#FFEBEE', color: '#C62828', border: '1px solid #FFCDD2' };
    case 'vegetable': return { backgroundColor: '#E8F5E9', color: '#2E7D32', border: '1px solid #C8E6C9' };
    case 'seafood': return { backgroundColor: '#E3F2FD', color: '#1565C0', border: '1px solid #BBDEFB' };
    case 'dairy': return { backgroundColor: '#FFFDE7', color: '#F9A825', border: '1px solid #FFF9C4' };
    case 'grain': return { backgroundColor: '#EFEBE9', color: '#4E342E', border: '1px solid #D7CCC8' };
    default: return { backgroundColor: '#F5F5F5', color: '#616161', border: '1px solid #E0E0E0' };
  }
};

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [feed, setFeed] = useState<Recipe[]>([]);
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
      alert('재료를 추가해주세요!');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ingredients,
          exclude: feed.map(r => r.dishName) 
        }),
      });

      if (!response.ok) {
        throw new Error('레시피를 가져오지 못했어요.');
      }

      const data = await response.json();
      
      const newRecipe: Recipe = {
        ...data,
        id: Date.now(), 
        timestamp: '방금 전'
      };
      
      setFeed(prevFeed => [newRecipe, ...prevFeed]);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : '오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateImage = async (recipeId: number, dishName: string) => {
    setFeed(prevFeed => prevFeed.map(item => 
      item.id === recipeId ? { ...item, imageLoading: true } : item
    ));

    try {
      const response = await fetch('http://localhost:3001/api/genFoodImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dishName }),
      });

      if (!response.ok) throw new Error('Failed to generate image');

      const data = await response.json();
      
      setFeed(prevFeed => prevFeed.map(item => 
        item.id === recipeId ? { ...item, imageUrl: data.imageUrl, imageLoading: false } : item
      ));

    } catch (error) {
      console.error('Image generation error:', error);
      setFeed(prevFeed => prevFeed.map(item => 
        item.id === recipeId ? { ...item, imageLoading: false } : item
      ));
      alert('이미지를 생성하지 못했습니다.');
    }
  };

  return (
    <div className="insta-layout">
      {/* Header */}
      <header className="insta-header">
        <h1 className="logo-text">WhatToEat</h1>
        <div className="header-actions">
          <HeartIcon />
          <ShareIcon />
        </div>
      </header>

      {/* Ingredients Badge Area */}
      <div className="ingredients-scroll-container">
        {ingredients.length === 0 && (
          <div style={{ color: '#888', fontSize: '14px' }}>냉장고 속 재료를 추가해보세요! 🥕🥩</div>
        )}
        {ingredients.map((ing, idx) => {
          const type = getIngredientType(ing);
          const badgeStyle = getBadgeStyle(type);
          return (
            <div key={idx} className="ingredient-badge" style={badgeStyle}>
              <span>{ing}</span>
              <button className="remove-btn" onClick={() => handleRemoveIngredient(idx)} style={{ color: 'inherit' }}>
                ×
              </button>
            </div>
          );
        })}
      </div>

      {/* Main Feed */}
      <main className="insta-feed">
        {/* Input Section */}
        <div className="input-section">
          <input
            id="ing-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddIngredient()}
            placeholder="냉장고에 뭐가 있나요?"
          />
          <button className="text-btn" onClick={handleAddIngredient}>추가</button>
        </div>

        {/* Action Button */}
        <div className="action-row">
           <button 
            className={`primary-btn ${loading ? 'loading' : ''}`}
            onClick={handleGetRecipe}
            disabled={loading}
          >
            {loading ? (
              <div className="spinner-container">
                <div className="spinner"></div>
                <span>요리법 생각 중...</span>
              </div>
            ) : '레시피 추천받기'}
          </button>
        </div>

        {error && <div className="error-banner">{error}</div>}

        {/* Feed Posts */}
        <div className="feed-posts">
          {feed.length > 0 ? (
            feed.map((recipe) => (
              <article key={recipe.id} className="insta-card">
                <div className="card-header">
                  <div className="user-profile">
                    <div className="avatar-small">AI</div>
                    <div className="user-info">
                      <span className="username">🧑‍🍳WHAT-TO-EAT</span>
                      <span className="location">우리집 주방</span>
                    </div>
                  </div>
                  <MoreIcon />
                </div>
                
                {/* Image Area */}
                <div className="card-image-container">
                  {recipe.imageLoading ? (
                    <div className="card-image-placeholder">
                      <div className="spinner-container">
                        <div className="spinner" style={{borderColor: '#555', borderTopColor: 'transparent'}}></div>
                        <span>이미지 생성 중...</span>
                      </div>
                    </div>
                  ) : recipe.imageUrl ? (
                    <>
                      <img src={recipe.imageUrl} alt={recipe.dishName} className="card-image" />
                      <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '14px',
                        fontWeight: '600',
                        zIndex: 2
                      }}>
                        {recipe.dishName}
                      </div>
                    </>
                  ) : (
                    <div className="card-image-placeholder">
                      <span>🍽️ {recipe.dishName}</span>
                      <button 
                        className="gen-image-btn"
                        onClick={() => handleGenerateImage(recipe.id, recipe.dishName)}
                      >
                        📷 예시 이미지
                      </button>
                    </div>
                  )}
                </div>

                <div className="card-actions">
                  <div className="left-actions">
                    <HeartIcon />
                    <CommentIcon />
                    <ShareIcon />
                  </div>
                  <BookmarkIcon />
                </div>

                <div className="card-content">
                  <div className="likes">좋아요 1,234개</div>
                  <div className="caption">
                    <span className="username">chef_ai</span> {recipe.dishName} 레시피입니다! 😋
                    <br />
                    ⏱️ <strong>조리 시간:</strong> {recipe.cookingTime}
                    {recipe.usedIngredients && recipe.usedIngredients.length > 0 && (
                      <div className="ingredients-list" style={{ marginTop: '8px' }}>
                        <strong>🥣 재료:</strong> {recipe.usedIngredients.join(', ')}
                      </div>
                    )}
                  </div>
                  <div className="recipe-text">
                    {recipe.recipe.split('\n').map((step, i) => (
                      <div key={i} className="recipe-step">{step}</div>
                    ))}
                  </div>
                  <div className="timestamp">{recipe.timestamp}</div>
                </div>
              </article>
            )) 
          ) : (
            !loading && (
              <div className="empty-state">
                <div className="empty-icon">🍳</div>
                <p>재료를 넣고 추천을 받아보세요!</p>
              </div>
            )
          )}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item active"><HomeIcon /></div>
        <div className="nav-item"><SearchIcon /></div>
        <div className="nav-item"><AddIcon /></div>
        <div className="nav-item"><ReelsIcon /></div>
        <div className="nav-item profile-pic">
           <div className="nav-avatar">Me</div>
        </div>
      </nav>
    </div>
  );
}

export default App;
