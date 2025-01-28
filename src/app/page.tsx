import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="text-center mt-14">
        <p className="text-gray-600">
          Trusted by more than <b>100,000</b> of the world’s leading organizations
        </p>
        <div className="flex items-center gap-6 justify-center mt-6 h-6">
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/18dCY8kGkSbfdNB2Eod1Pp/4768154e8873caa4c1574499dc4e2aab/Microsoft_Logo.svg"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/7hhEfCdZPI7mPC24fFsC94/adf392604ef673a224307e48ac87bd96/Adobe.svg"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/7EHGsWMc29UoHErPsvRAsi/0f8210b12ada1e9faa313b4d56274572/Panasonic.svg"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/1F2mq86JzeTrvpY7QdJZmh/b29471d788aabbc36a27d5dea6dae917/Nintendo.svg"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
