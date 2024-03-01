<template>
  <div class="subscription-container">
    <header>
      <BaseAuthHeading />
      <button class="premium-access-button">Access Premium</button>
    </header>

    <section class="plans">
      <h2>It's easy to get started</h2>
      <p>Choose the best plan to enjoy the best movies and series</p>

      <div class="plan" id="free-trial">
        <h3>Free Trial</h3>
        <p class="price">$0/Month</p>
        <ul class="features">
          <li>Streaming in high quality</li>
          <li>With the best audio quality</li>
          <li>Stream on multiple devices</li>
          <li>Ad-free viewing experience</li>
          <li>Download to watch later</li>
        </ul>
        <button class="get-started-button">Get Started</button>
      </div>

      <div class="plan" id="monthly-subscription">
        <h3>Monthly Subscription</h3>
        <p class="price">$4.99/Month</p>
        <ul class="features">
          <li>Streaming in high quality</li>
          <li>With the best audio quality</li>
          <li>Stream on multiple devices</li>
          <li>Ad-free viewing experience</li>
          <li>Download to watch later</li>
        </ul>
        <button class="get-started-button">Get Started</button>
      </div>

      <div class="plan" id="yearly-subscription">
        <h3>Yearly Subscription</h3>
        <p class="price">$49.99/Month</p>
        <ul class="features">
          <li>Streaming in high quality</li>
          <li>With the best audio quality</li>
          <li>Stream on multiple devices</li>
          <li>Ad-free viewing experience</li>
          <li>Download to watch later</li>
        </ul>
        <button class="get-started-button">Get Started</button>
      </div>
    </section>
  </div>
</template>