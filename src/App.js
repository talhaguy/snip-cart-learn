
const API_KEY = "Y2MwYjQ0ZjQtMGZjMS00ZjdlLWI3ZmYtYjU5N2M4MmEwYjUxNjM3NDAzMzA4NjU5NzYwNjky";

const customizations = `
<div hidden id="snipcart" data-api-key=${API_KEY}>
  <cart-header>
    <div class="root">
      title: My Custom Cart Title<br>
      items:  {{ itemsCount }}<br>
      curr: {{ cart.currency }}<br>
      <span v-if="cart.currency">
        amount: {{ cart.total | money(cart.currency) }}
      </span>

      <close-cart-action>
        Close cart
      </close-cart-action>

    </div>
  </cart-header>

  <item-line>
    <div class="root">
      <img v-bind:src="item.image" width="50"><br>
      item: {{item.name}}<br>
      qty: {{item.quantity}}<br>
      price: {{item.unitPrice}}

      <item-quantity>
      </item-quantity>
    </div>
  </item-line>

  <cart-button>
    <div class="root">
      Checkout btn
    </div>
  </cart-button>

  <featured-payment-methods>
    <div class="root">
      Payment methods...
    </div>
  </featured-payment-methods>
</div>
`;

/*

*/

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

      <div dangerouslySetInnerHTML={{ __html: customizations }}></div>
    </div>
  );
}

export default App;

