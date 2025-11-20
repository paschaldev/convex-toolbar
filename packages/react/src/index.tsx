import './styles.css';

export const Toolbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-64 bg-background border-t border-border flex text-foreground font-sans">
      <div className="w-1/2 border-r border-border p-4">
        <h2 className="text-sm font-bold mb-2">Function Input</h2>
        {/* Input components will go here */}
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-sm font-bold mb-2">Output</h2>
        {/* Output components will go here */}
      </div>
    </div>
  );
};
