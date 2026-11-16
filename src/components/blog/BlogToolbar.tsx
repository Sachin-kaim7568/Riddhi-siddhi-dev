export const categories = [
  { label: "All", value: "all" },
  { label: "Oral Care", value: "Oral Care" },
  { label: "Treatments", value: "Treatments" },
  { label: "Cosmetic Dentistry", value: "Cosmetic" },
  { label: "Kids Dentistry", value: "Kids" },
];

type Props = {
  category: string;
  onCategory: (value: string) => void;
  query: string;
  onQuery: (value: string) => void;
};

const BlogToolbar = ({ category, onCategory, query, onQuery }: Props) => {
  return (
    <div className="rsb-toolbar">
      <div className="rsb-filters">
        {categories.map((c) => (
          <button
            key={c.value}
            type="button"
            className={`rsb-chip${category === c.value ? " active" : ""}`}
            onClick={() => onCategory(c.value)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="rsb-search">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8a4a33"
          strokeWidth="2.2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input
          type="search"
          placeholder="Search articles..."
          aria-label="Search articles"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BlogToolbar;