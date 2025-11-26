export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to Mobile Zone
      </h1>
      <p className="text-lg md:text-2xl mb-6">
        Discover the best products at great prices.
      </p>
      <a
        href="/products"
        className="btn bg-white text-blue-600 hover:text-white hover:bg-blue-600 transition"
      >
        Shop Now
      </a>
    </section>
  );
}
