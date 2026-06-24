// Reproduces the .container wrapper (max-width 1200px, 24px side padding).
export default function Container({ className = "", children }) {
  return (
    <div className={`w-full max-w-container mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}
