export default function Hero() {
  return (
    <section className="bg-green-700 text-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">
        Transforming Health, Empowering Communities
      </h1>
      <p className="mb-6">
        DHYUPRAKH FOUNDATION works to improve healthcare, education,
        and well-being for underserved communities across India.
      </p>
      <div className="space-x-4">
        <button className="bg-white text-green-700 px-6 py-2 rounded">
          Donate Now
        </button>
        <button className="border px-6 py-2 rounded">
          Volunteer
        </button>
      </div>
    </section>
  );
}