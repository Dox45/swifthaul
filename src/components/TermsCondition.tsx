import termsData from '@/data/terms.json'

export default function TermsAndConditions() {
  const { title, intro, sections } = termsData

  return (
    <section className="bg-white py-16 text-gray-800">
      <div className="container mx-auto px-4 max-w-3xl pt-20">
        <h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>
        <p className="text-center text-gray-600 mb-10 leading-relaxed">
          {intro}
        </p>

        {sections.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
            <p className="text-gray-700 leading-relaxed">{section.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
