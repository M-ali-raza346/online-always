import React from 'react';
import Image from 'next/image';
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/img.pk.jpeg" alt="m ali raza" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “I am a Hafiz-ul-Quran, which has been a significant accomplishment in my life, bringing me closer to my faith and spiritual fulfillment. Alongside this, I have successfully completed my matriculation, marking an important milestone in my educational journey. My dedication to both my religious and academic studies has shaped me into a disciplined and focused individual. I strive to balance my spiritual duties with my educational goals, always seeking to improve myself in all aspects. These achievements have laid a strong foundation for my future aspirations..”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          MUHAMMAD ALI RAZA
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          STUDENT OF GENERATIVE Artificial intelligence
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page