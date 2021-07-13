import React from "react";

function Sum({ handleReset, calcTipSum, calcTotalSum }) {
  const btnDisabled = calcTotalSum() === 0 || calcTipSum() === 0 ? true : false;
  return (
    <section className="bg-cyan-verydark lg:px-10 lg:h-full lg:rounded-2xl lg:flex lg:flex-col rounded-lg p-5 pt-10 lg:mt-0 font-bold space-y-6  mt-7">
      <div className="flex  justify-between">
        <div>
          <div className="text-white lg:text-lg xl:text-xl">Tip Amount</div>
          <div className="text-cyan-darkgray2 text-sm lg:text-base">
            / person
          </div>
        </div>
        <div className="text-cyan-primary text-3xl lg:text-4xl xl:text-5xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="19"
            className="inline-block stroke-current fill-current"
            viewBox="0 2 11 16"
          >
            <path
              fill="#9EBBBD"
              d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
            />
          </svg>
          {calcTipSum()}
        </div>
      </div>
      <div className="flex justify-between lg:h-1/2">
        <div>
          <div className="text-white lg:text-lg xl:text-xl">Total</div>
          <div className="text-cyan-darkgray2 text-sm lg:text-base">
            / person
          </div>
        </div>
        <div className="text-cyan-primary text-3xl lg:text-4xl xl:text-5xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="19"
            className="inline-block stroke-current fill-current"
            viewBox="0 2 11 16"
          >
            <path
              fill="#9EBBBD"
              d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
            />
          </svg>
          {calcTotalSum()}
        </div>
      </div>
      <button
        disabled={btnDisabled}
        onClick={() => {
          handleReset();
        }}
        className={` font-bold uppercase text-xl w-full pt-3 pb-1 rounded-md text-cyan-verydark bg-cyan-primary ${
          btnDisabled
            ? ` bg-opacity-30 cursor-default`
            : `bg-opacity-100 hover:bg-cyan-hover cursor-pointer`
        }`}
      >
        reset
      </button>
    </section>
  );
}

export default Sum;
