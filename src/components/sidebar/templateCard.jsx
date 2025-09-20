export default function Template({heading, headingCase='uppercase', children}){
    return(
        <section className="bg-gray-100 py-10 mb-8">
            <h2 className={`font-medium text-xl mb-6 px-6 ${headingCase}`}>{heading}</h2>
            {children}
        </section>
    )
}