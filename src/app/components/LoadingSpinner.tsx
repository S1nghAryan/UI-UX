export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        <div 
          className="absolute inset-0 border-4 border-transparent rounded-full animate-spin"
          style={{ 
            borderTopColor: 'var(--learnflow-cta)',
            borderRightColor: 'var(--learnflow-cta)'
          }}
        ></div>
      </div>
    </div>
  );
}
