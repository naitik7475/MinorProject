import { Button } from "flowbite-react";
import { HiOutlineArrowRight} from "react-icons/hi";
function HeroSection() {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')] bg-cover bg-center">
      <div className="flex h-screen items-center justify-center bg-slate-800/90">
        <div className="max-w-4xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Empowering Dreams, Enabling Success
          </h1>
          <p className="mb-8 text-lg text-gray-200 md:text-xl lg:mb-12 lg:text-2xl">
            Prime Minister's Special Scholarship Portal is designed to bridge
            the gap between scholarship providers and seekers, empowering more
            students to benefit from the system.
          </p>
          <div className="flex flex-col items-center justify-center">
            <Button className="mb-5">Check Your Eligibility<HiOutlineArrowRight className="ml-2 size-5" /></Button>
            <div className="text-sm text-gray-300 md:text-base">
              <p className="font-semibold">PMSSS Scholarship</p>
              <p className="mt-2">
                PMSSS is a scholarship scheme by the All India Council for
                Technical Education (AICTE) for students domiciled in the UTs of
                J&K and Ladakh who secure admission in government
                colleges/institutions through AICTE's counseling process under the
                supernumerary quota, after passing Class 12th or equivalent
                examinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;