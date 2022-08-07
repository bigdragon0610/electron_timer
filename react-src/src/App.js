import TimerButtons from "./components/TimerButtons";

function App() {
  return (
    <main className="w-screen h-screen bg-blue-50">
      <section className="text-center relative top-1/2 -translate-y-1/2">
        <section className="text-8xl font-light">
          <span>00</span>
          <span>:</span>
          <span>00</span>
        </section>
        <TimerButtons />
      </section>
    </main>
  );
}

export default App;
