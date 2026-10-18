export default function ProductCategoryPills({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="product-category-pills" role="tablist">
      {categories.map((cat) => {
        const isActive = selectedCategory === cat
        return (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`cat-pill-btn ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}
