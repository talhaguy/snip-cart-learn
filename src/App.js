
function App() {
  return (
    <div>
      <header>
        <button className="snipcart-checkout">Cart</button><br />
        Items: <span className="snipcart-items-count"></span><br />
        Amount: <span className="snipcart-total-price"></span>
      </header>

      <h2>Soccer ball</h2>
      <img src="/logo192.png" />
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
