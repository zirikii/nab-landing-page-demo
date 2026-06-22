const AUDIENCES = [
  { label: "Personal", active: true },
  { label: "Business" },
  { label: "Corporate" },
];
const ACTIONS = ["Help & support", "Contact us", "Find us"];

export default function UtilityBar() {
  return (
    <div className="utility-bar">
      <div className="container utility-bar__inner">
        <nav className="utility-nav" aria-label="Audience">
          {AUDIENCES.map((a) => (
            <a
              key={a.label}
              href="#"
              className={`utility-nav__link${a.active ? " is-active" : ""}`}
            >
              {a.label}
            </a>
          ))}
        </nav>
        <div className="utility-actions">
          {ACTIONS.map((label) => (
            <a key={label} href="#" className="utility-actions__link">
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
