/*

  const handlePayment = async () => {
    const response = await fetch('http://localhost:8080/api/stripe/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 1000 }), // Replace with actual amount
    });

    const data = await response.json();
    setClientSecret(data.clientSecret);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <button
        onClick={handlePayment}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-lg font-semibold mb-4"
      >
        Pay Now
      </button>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
}*/