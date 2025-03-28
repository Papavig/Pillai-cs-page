export default function Aim() {
  return (
    <section className="relative container mx-auto my-12 px-4">
      <hr className="border-dashed w-3/4 mx-auto"/>
      <div className="grid grid-cols-1 md:grid-cols-3 text-center mx-4 items-center gap-6">
        {/* Row 1 */}
        <div className="p-4 border rounded-lg shadow-md md:border-none md:shadow-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission</h3>
          <p className="text-gray-600">
            Persistently strive, to inculcate the requisite skills in the
            budding I.T. professionals, innovators and entrepreneurs. Making
            them competent professionals, enabling them to take up any kind of
            challenges in any of the industry. Also, to sensitize them towards
            their social and moral responsibilities.
          </p>
        </div>

        {/* Row 2 */}
        <div className="p-4 border rounded-lg shadow-md md:border-none md:shadow-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Vision</h3>
          <p className="text-gray-600">
            Creating competent professionals capable of taking leading role in
            the industry. To provide the community with the graduates, who will
            practice the profession with ethics, integrity and social
            responsibility.
          </p>
        </div>

        {/* Row 3 */}
        <div className="p-4 border rounded-lg shadow-md md:border-none md:shadow-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Future Plans
          </h3>
          <p className="text-gray-600">
            We aim to improve placement opportunities with alumni support, build
            stronger industry and academic linkages, and organize
            State/National-level conferences for knowledge sharing.
            Additionally, we will encourage student internships to enhance
            practical learning and career readiness.
          </p>
        </div>
      </div>
      <hr className="border-dashed mt-4 w-3/4 mx-auto"/>
    </section>
  );
}
