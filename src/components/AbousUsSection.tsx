import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'

export const AboutUsSection = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const aboutUsDocs = await payload.find({
    collection: 'media',
    where: {
      filename: {
        equals: 'opanak-bg-1.webp',
      },
    },
  })
  const aboutUsImage = aboutUsDocs.totalDocs > 0 ? aboutUsDocs.docs[0] : null

  return (
    <div className="relative h-screen w-screen">
      {aboutUsImage && aboutUsImage.url && (
        <Image
          src={aboutUsImage.url}
          alt="Logo Image"
          fill
          className="relative top-0 left-0 object-cover"
          objectPosition="left"
        />
      )}
      <div className="relative mt-20 md:mt-0 ml-4 md:ml-0 md:absolute md:top-5 md:left-20 w-[90%] md:w-1/3 p-4 md:p-8 bg-white bg-opacity-85 backdrop-blur-sm rounded-3xl shadow-2xl">
        <p className="text-black text-base md:text-lg font-bold font-[lavishly-yours] leading-relaxed">
          <span className="text-amber-700 text-base md:text-lg">Ukusi su različiti</span>, kažu, i
          stvarno, šta bi život bio bez te raznolikosti?
        </p>
        <p className="text-black text-base md:text-lg mt-2 md:mt-4 italic">
          U srcu grada, gde se susreću tradicija i modernost, nalazi se mesto koje već generacijama
          okuplja ljude različitih ukusa -
          <span className="text-amber-700 text-base md:text-lg font-bold font-[lavishly-yours] ml-1 md:ml-2">
            ZLATNI OPANAK.
          </span>
        </p>
      </div>
      <div className="relative mt-10 md:mt-0 ml-4 md:ml-0 md:absolute md:top-25 md:right-20 w-[90%] md:w-1/3 p-4 md:p-8 bg-white bg-opacity-85 backdrop-blur-sm rounded-3xl shadow-2xl mt-4 md:mt-0">
        <p className="text-black text-base md:text-lg font-bold font-[lavishly-yours] leading-relaxed">
          <span className="text-amber-700 text-base md:text-lg">Oduvek je bio</span> nešto više od
          običnog restorana; to je kavana i kafana, krčma i mehana, svratište i pivnica,
          <span className="text-amber-700 text-base md:text-lg font-bold italic ml-1 md:ml-2">
            menza i gostionica, han i restoran
          </span>{' '}
          u isto vreme. Ovde se uvek nalazi mesto za svakoga.
        </p>
      </div>
      <div className="relative mt-10 md:mt-0 ml-4 md:ml-0 md:absolute md:bottom-5 md:left-40 w-[90%] md:w-1/2 p-4 md:p-8 bg-white bg-opacity-85 backdrop-blur-sm rounded-3xl shadow-2xl mt-4 md:mt-0">
        <p className="text-black text-base md:text-lg leading-relaxed">
          Svi znaju da o ukusima nema rasprave. Različiti ljudi, različite lične tendencije, ali
          postoji jedna stvar koja se nikada nije promenila:{' '}
          <span className="text-amber-700 font-bold font-[lavishly-yours]">UKUS HRANE</span> u{' '}
          <span className="text-amber-700 font-bold font-[lavishly-yours]">ZLATNOM OPANKU</span>. To
          je nešto posebno, nešto što se oseća u svakom zalogaju, u svakom gutljaju. Osetite taj
          ukus koji se pamti.
        </p>
      </div>
    </div>
  )
}
