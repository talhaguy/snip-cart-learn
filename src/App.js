
function App() {
  return (
    <div>
      <h2>Soccer ball</h2>
      <img src="/logo512.png" />
      <p>This is a wonderful soccer ball.</p>
      <p>$19.99</p>
      <button className="snipcart-add-item"
        data-item-id="P000001"
        data-item-price="19.99"
        data-item-url="/"
        data-item-description="This is a wonderful soccer ball."
        data-item-image="/logo512.png"
        data-item-name="Soccer ball">
        Add to cart
      </button>
    </div>
  );
}

export default App;
