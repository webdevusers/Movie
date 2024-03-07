<template>
  <div class="subscription-container">
    <header>
      <BaseAuthHeading />
    </header>

    <section class="plans ">
      <div class="plans-wrapper__head flex flex-col items-center mx-auto text-center mt-[32px]">
        <button
          class="premium-access-button bg-supernova-400 text-[14px] rounded-3xl px-[16px] py-[8px] medium w-[8%]">Access
          Premium</button>
        <h2 class="font-semibold text-[40px] my-[16px]">It's easy to get started</h2>
        <p class="text-grayscale7-700 w-[306px] font-semibold">Choose the best plan to enjoy the best movies and series
        </p>
      </div>

      <div class="wrapper__card flex justify-center mt-[63px]">
        <div class="plan w-[374px] h-[518px] bg-grayscale1-50 border athensGray-100 rounded-3xl" id="free-trial">
          <div class="plan__inner p-[40px]">
            <h3 class="text-[20px] font-semibold">Free Trial</h3>
            <p class="price text-[40px] font-semibold">$0<span class="text-[16px] text-grayscale6-500 ">/Month</span></p>
            <div class="lane w-[100%] h-[1px] bg-athensGray-100 my-[32px]"></div>
            <ul class="features font-semibold">
              <li class="mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg" alt="">
                Streaming in high quality</li>
              <li class="mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg" alt="">
                With the best audio quality</li>
              <li class="text-grayscale4-200 mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg"
                  alt="">
                Stream on multiple devices</li>
              <li class="text-grayscale4-200 mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg"
                  alt="">
                Ad-free viewing experience</li>
              <li class="text-grayscale4-200 mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg"
                  alt="">
                Download to watch later</li>
            </ul>

            <UButton variant="ghost"
              class="flex items-center justify-center py-2 px-4 w-[294px] text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-3 xl:px-8 xl:text-xl border-2 border-redOrange-500">
              Get Started</UButton>
          </div>

        </div>

        <div
          class="plan w-[374px] h-[518px] bg-redOrange-500 text-grayscale1-50 border athensGray-100 rounded-3xl mx-[32px]"
          id="free-trial">
          <div class="plan__inner p-[40px]">
            <h3 class="text-[20px] font-semibold">Monthly Subscription</h3>
            <p class="price text-[40px] font-semibold">$4.99<span class="text-[16px] text-grayscale6-500 ">/Month</span>
            </p>
            <div class="lane w-[100%] h-[1px] bg-athensGray-100 my-[32px]"></div>
            <ul class="features font-semibold">
              <li class="mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg" alt="">
                Streaming in high quality</li>
              <li class="mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg" alt="">
                With the best audio quality</li>
              <li class="mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg" alt="">
                Stream on multiple devices</li>
              <li class="mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg" alt="">
                Ad-free viewing experience</li>
              <li class="mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg" alt="">
                Download to watch later</li>
            </ul>

            <UButton variant="ghost"
              class="flex items-center justify-center py-2 px-4 w-[294px] text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-3 xl:px-8 xl:text-xl border-2 text-grayscale1-50 hover:bg-redOrange-700 border-grayscale1-50">
              Get Started</UButton>
          </div>

        </div>

        <div class="plan w-[374px] h-[518px] bg-grayscale1-50 border athensGray-100 rounded-3xl" id="free-trial">
          <div class="plan__inner p-[40px]">
            <h3 class="text-[20px] font-semibold">Yearly Subscription</h3>
            <p class="price text-[40px] font-semibold">$49.99<span class="text-[16px] text-grayscale6-500 ">/Month</span>
            </p>
            <div class="lane w-[100%] h-[1px] bg-athensGray-100 my-[32px]"></div>
            <ul class="features font-semibold">
              <li class="mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg" alt="">
                Streaming in high quality</li>
              <li class="mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg" alt="">
                With the best audio quality</li>
              <li class="mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg" alt="">
                Stream on multiple devices</li>
              <li class="mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg" alt="">
                Ad-free viewing experience</li>
              <li class="mb-[20px] flex"> <img class="mr-[12px]" src="../../public/icons/check.svg" alt="">
                Download to watch later</li>
            </ul>

            <UButton variant="ghost"
              class="flex items-center justify-center py-2 px-4 w-[294px] text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-3 xl:px-8 xl:text-xl border-2 border-redOrange-500">
              Get Started</UButton>
          </div>

        </div>
      </div>

    </section>
  </div>
</template>