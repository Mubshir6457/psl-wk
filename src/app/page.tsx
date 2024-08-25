  import React from 'react'

  const page = () => {
    return  (
      <div><figure className="flex full-bg-green-500 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/my-pic.jpg" alt="" width="384" height="512"/>
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Hello!I am MUBASHIR.I am AI student.AI means "Artificial intellegance".”
          </p>I love Pakistan.
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-blue-700 dark:text-red-400 font-medium">
            M.MUBASHIR
          </div>
          <div className="text-font-medium">
            From,R.Y.K.
          </div>
        </figcaption>
      </div>
    </figure></div>
    )
  }

  export default page
