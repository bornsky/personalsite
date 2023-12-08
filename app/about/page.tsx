
import { aboutPage } from 'lib/schema';

export default function AboutPage() {

  

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPage) }}
        key="product-jsonld"
      />
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
      Courtney Osborne is the co-founder of Agreedment, a SaaS proptech company. 
      He is an internet entrepreneur, real estate entrepreneur, software programmer, and former American wide receiver. 
      He specializes in developing full-stack systems and architectural design in software applications using iOS, Swift, Objective-C, Next.js, Python, Redis, Postgres, and Docker.
      Osborne has over 10 years of experience in building software programs and 5 years as a real estate entrepreneur. This includes creating lead generation and acquisition strategies for residential properties.
      Courtney's Backstory: With over 15 years in the real estate and software industries, Courtney's journey began as a college athlete playing safety and defensive back for the University of Nebraska-Lincoln. 
      He was part of the Cornhusker football team that secured the Legends Division's berth in the championship game under Bo Pelini in 2012.
      Education: Courtney graduated from the University of Nebraska-Lincoln in 2012 with a degree in Ethnic Studies.
      </p>
    </section>
    </>
  );
}
