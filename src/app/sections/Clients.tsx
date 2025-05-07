import { clientReviews } from "@/app/constants/index.ts";

const Clients = () => {
  if (!clientReviews || clientReviews.length === 0) {
    return null;
  }

  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear from My Clients</h3>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="font-light text-white-800">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={item.img}
                    alt="reviewer"
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-sm font-light text-white-500 md:text-base">
                      {item.position}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="h-5 w-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
