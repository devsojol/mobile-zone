import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6">Top Products</h2>
        {/* <div className="grid md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div> */}
      </section>
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">Fast Delivery</div>
          <div className="card">Best Quality</div>
          <div className="card">24/7 Support</div>
        </div>
      </section>
    </>
  );
}
