
const Newsletter = () => {
  return (
    <section id="newsletter" className="sm:px-32 px-8 sm:py-32 py-12">
      <div className="flex justify-center ">
        <h1 className="big-heading">Say Hello to Market!</h1>
      </div>

      <div className="flex justify-center text-center">
        <h2 className="font-roboto text-slate-gray text-3xl max-sm:text-lg max-md:mt-10">Sing up for Newsletter and receive</h2>
      </div>

      <div className="flex justify-center text-center">
        <h2 className="font-roboto text-3xl max-sm:text-xl">40% discount on first project</h2>
      </div>
      
      <div className="flex max-sm:flex-col justify-center align-middle">
      <input type="email" name="email" class="mt-10 lg:w-[50%]  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Email Address" />
      <button className="black-btn border-none mt-10 max-sm:mt-5">SUBSCRIBE NOW</button>
      </div>
    </section>
  )
}

export default Newsletter 