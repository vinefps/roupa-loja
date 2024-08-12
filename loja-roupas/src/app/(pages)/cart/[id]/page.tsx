import React from "react";

export default function CartPage() {
  const products = [
    {
      id: 1,
      name: "Caneca de cerâmica rústica",
      description: "Aqui vem um texto descritivo do produto...",
      image_url:
        "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
      price: 40,
    },
    {
      id: 2,
      name: "Caneca Decaf! P&Co",
      description: "Aqui vem um texto descritivo do produto...",
      image_url:
        "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg",
      price: 32,
    },
    {
      id: 3,
      name: "Camiseta Outcast",
      description: "Aqui vem um texto descritivo do produto...",
      image_url:
        "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
      price: 89,
    },
  ];

  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const deliveryFee = 40;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col">
      <button className="text-blue-500 mb-5 flex items-center">
        <span>&larr; Voltar</span>
      </button>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-5">SEU CARRINHO</h1>
          <p className="text-lg mb-5">
            Total ({products.length} produtos) R${subtotal.toFixed(2)}
          </p>
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-5 mb-5 flex"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="ml-5 flex-1">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-3 flex items-center">
                  <select className="border rounded-md mr-5">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <span className="font-bold">
                    R$ {product.price.toFixed(2)}
                  </span>
                </div>
              </div>
              <button className="text-red-500 ml-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="lg:w-1/3 bg-white rounded-lg shadow-md p-5">
          <h2 className="text-xl font-bold mb-5">RESUMO DO PEDIDO</h2>
          <div className="flex justify-between mb-3">
            <span>Subtotal de produtos</span>
            <span>R$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-3">
            <span>Entrega</span>
            <span>R$ {deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-5">
            <span>Total</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <button className="bg-green-500 text-white w-full py-3 rounded-lg font-semibold hover:bg-green-600">
            FINALIZAR A COMPRA
          </button>
          <div className="mt-5 text-gray-600 text-sm">
            <p className="mb-2">
              <a href="#" className="underline">
                AJUDA
              </a>
            </p>
            <p className="mb-2">
              <a href="#" className="underline">
                REEMBOLSOS
              </a>
            </p>
            <p className="mb-2">
              <a href="#" className="underline">
                ENTREGAS E FRETE
              </a>
            </p>
            <p className="mb-2">
              <a href="#" className="underline">
                TROCAS E DEVOLUÇÕES
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
