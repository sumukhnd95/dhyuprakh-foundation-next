export default function Projects() {
  return (
    <section className="bg-gray-100 p-10">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Our Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow">
          <h3 className="font-bold">Education for All</h3>
          <p>Providing free education resources to rural children.</p>
        </div>

        <div className="bg-white p-4 shadow">
          <h3 className="font-bold">Healthcare Camps</h3>
          <p>Free medical camps in underserved areas.</p>
        </div>

        <div className="bg-white p-4 shadow">
          <h3 className="font-bold">Women Empowerment</h3>
          <p>Skill development programs for women.</p>
        </div>
      </div>
    </section>
  );
}