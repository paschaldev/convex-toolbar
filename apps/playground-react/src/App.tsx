import { Toolbar } from '@convex-toolbar/react';
import '@convex-toolbar/react/dist/index.css'; // Assuming tsup outputs css here, or we import from src if not built yet. 
// Actually, for dev we might want to import the css directly if we are not building.
// But let's assume we want to test the build or dev flow.
// For now, let's import the css from the package if possible or just rely on the package's side effects if it injects styles (it doesn't).
// Let's try importing the css from the package source for now to avoid build steps for dev.
import '@convex-toolbar/react/dist/index.css'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Convex Toolbar Playground</h1>
      <p className="mb-8">
        This is a playground to test the Convex Toolbar. The toolbar should appear at the bottom of the screen.
      </p>
      <div className="p-4 border rounded bg-white shadow">
        <p>Content of the app goes here...</p>
      </div>
      <Toolbar />
    </div>
  );
}

export default App;
