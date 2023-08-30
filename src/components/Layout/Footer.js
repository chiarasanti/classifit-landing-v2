import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo-600 text-white">
      <div className="max-w-[1110px] mx-auto px-4 md:px-12 lg:px-0">
        <section>
          <div className="text-center">
            <h1 className="font-semibold">
              Porta il tuo studio al prossimo livello
            </h1>
            <div className="my-4" />
            <p className="text-white">
              Possiamo gestire solo cinque istruttori al mese.{" "}
              <strong>Sarai tu il prossimo?</strong>
            </p>
            <div className="py-6" />
            <Link
              href="https://calendly.com/classifit/presentazione-classifit"
              target="_blank"
              className="button inline-block"
            >
              <div className="flex gap-2 hover:gap-4 transition-all duration-200 ease-in-out">
                <span className="text-black text-base">
                  Prenota una chiamata
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </section>
        <div className="md:flex justify-between py-10 items-center text-center md:text-left">
          <div className="md:flex gap-12 items-center">
            <svg
              width="96"
              height="22"
              viewBox="0 0 96 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4 lg:mb-0 mx-auto md:mx-0"
            >
              <path
                d="M7.567 21.8033C3.47285 21.8033 0.773737 18.9525 0.773737 14.2215C0.773737 9.49048 3.47285 6.63974 7.59733 6.63974C11.2062 6.63974 13.4808 8.76263 14.057 11.7044L12.1464 12.5232C11.8431 10.0667 10.3874 8.2774 7.59733 8.2774C4.71625 8.2774 2.80565 10.3396 2.80565 14.2215C2.80565 18.073 4.71625 20.1353 7.59733 20.1353C10.3874 20.1353 11.8431 18.3763 12.1464 15.9198L14.057 16.7387C13.4808 19.6804 11.2062 21.8033 7.567 21.8033ZM19.3803 21.5H17.3787V1.18087H19.3803V21.5ZM26.4785 21.8033C24.0827 21.8033 22.718 20.4992 22.718 18.5583C22.718 16.6477 24.1433 15.4346 26.1753 14.5248L31.6948 12.0076V11.8863C31.6948 9.70277 30.6637 8.42904 28.2981 8.42904C26.1146 8.42904 24.5376 9.67245 23.7794 11.2798L22.3844 9.88474C23.2942 8.36838 25.4171 6.63974 28.5104 6.63974C31.9071 6.63974 33.666 8.611 33.666 11.856V18.6796C33.666 19.4378 33.9996 19.7107 34.6972 19.7107H35.5463V21.5H34.1816C32.7259 21.5 31.7554 20.8631 31.7554 19.0132V17.4665C31.2702 19.5591 29.3899 21.8033 26.4785 21.8033ZM24.7196 18.2853C24.7196 19.4984 25.6294 20.1353 27.0547 20.1353C29.7538 20.1353 31.7554 18.0427 31.7554 16.0715V13.4937L27.0244 15.7379C25.4474 16.4657 24.7196 17.1936 24.7196 18.2853ZM43.8976 21.8033C40.9256 21.8033 38.1355 20.4689 37.256 17.6181L38.742 16.496C39.1969 18.4673 41.0166 20.105 43.9583 20.105C45.8992 20.105 47.173 19.3165 47.173 17.8001C47.173 16.2837 45.8689 15.7379 43.8976 15.283L41.9264 14.828C39.8338 14.3125 37.6806 13.342 37.6806 10.7339C37.6806 8.21675 39.6822 6.63974 42.6845 6.63974C45.7779 6.63974 47.8098 8.18642 48.5377 10.2487L47.0213 11.3708C46.3541 9.3995 44.8378 8.30773 42.5632 8.30773C40.8043 8.30773 39.5609 9.12656 39.5609 10.6429C39.5609 12.1593 40.6526 12.7052 42.7755 13.2207L44.7165 13.7059C47.7492 14.4641 48.9622 15.7075 48.9622 17.7698C48.9622 20.5599 46.5967 21.8033 43.8976 21.8033ZM57.5507 21.8033C54.5787 21.8033 51.7886 20.4689 50.9091 17.6181L52.3951 16.496C52.85 18.4673 54.6697 20.105 57.6114 20.105C59.5523 20.105 60.8261 19.3165 60.8261 17.8001C60.8261 16.2837 59.522 15.7379 57.5507 15.283L55.5795 14.828C53.4869 14.3125 51.3337 13.342 51.3337 10.7339C51.3337 8.21675 53.3353 6.63974 56.3376 6.63974C59.431 6.63974 61.4629 8.18642 62.1908 10.2487L60.6744 11.3708C60.0072 9.3995 58.4909 8.30773 56.2163 8.30773C54.4574 8.30773 53.214 9.12656 53.214 10.6429C53.214 12.1593 54.3057 12.7052 56.4286 13.2207L58.3696 13.7059C61.4023 14.4641 62.6153 15.7075 62.6153 17.7698C62.6153 20.5599 60.2498 21.8033 57.5507 21.8033ZM67.9806 4.33488H65.979V1.18087H67.9806V4.33488ZM67.9806 21.5H65.979V6.94301H67.9806V21.5ZM75.2305 21.5H73.2592V8.48969H70.8634V6.94301H73.2592V5.2447C73.2592 2.30297 75.0788 0.8776 77.7779 0.8776C80.0221 0.8776 81.6295 2.06035 82.2967 2.90951L81.2049 4.33488C80.5377 3.39475 79.2033 2.54559 77.687 2.54559C76.1706 2.54559 75.2305 3.36442 75.2305 5.30535V6.94301H83.2671V21.5H81.2655V8.48969H75.2305V21.5ZM91.8272 21.8336C89.6133 21.8336 87.8847 20.4386 87.8847 17.8001V8.48969H85.5191V6.94301H87.8847V4.85044L89.8559 3.36442V6.94301H94.7386V8.48969H89.8559V17.2542C89.8559 19.3468 90.9477 19.923 92.2214 19.923C93.5255 19.923 94.5869 18.9829 95.0722 17.9517L95.7697 19.8927C95.1328 20.9541 93.7075 21.8336 91.8272 21.8336Z"
                fill="white"
              />
            </svg>
            <Link
              href="https://www.iubenda.com/privacy-policy/40888749/legal"
              target="_blank"
              className="text-white/60 hover:text-white text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://www.iubenda.com/privacy-policy/40888749/cookie-policy"
              target="_blank"
              className="text-white/60 hover:text-white text-sm ml-4 md:ml-0"
            >
              Cookie Policy
            </Link>
          </div>
          <Link
            href="https://www.instagram.com/app.classi.fit/"
            target="_blank"
            className="text-white/60 hover:text-white text-sm block mt-2 md:mt-0"
          >
            @app.classi.fit
          </Link>
        </div>
      </div>
    </footer>
  );
}
