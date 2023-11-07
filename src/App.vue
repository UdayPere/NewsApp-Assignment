<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");

:root {
  --pinkColor: #5557F3;
  --titleColor: #000000;
  --lightgrey: #666666;
  --bodyColor: #EDEFF9;
  --lightblueColor: #8D99FF;
  --whiteColor: #ffffff;
  --dangerColor: #D0243C;
  --inporutBgCol: #e8f0fe;
  --orangeColor: #f48982;
  --lightOrangeColor: #fdf2e9;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bodyColor);
}

.font-italic {
  font-style: italic;
}

// font Weights
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600
}
.font-bold {
  font-weight: 700;
}

// widths
.w-100 {
  width: 100%;
}
.bl-4 {
  border-left: 4px solid var(--titleColor);
  line-height: 2;
}
// text aligns
.text-center {
  text-align: center;
}

.text-uppercase {
  text-transform: uppercase;
}

// Paddings
.pt-3, .py-3 {
  padding-top: 1rem;
}
.pt-4, .py-4 {
  padding-top: 1.5rem;
}

.pb-3, .py-3 {
  padding-bottom: 1rem;
}

.pb-4, .py-4 {
  padding-bottom: 1.5rem;
}

.pl-4, .px-4 {
  padding-left: 1.5rem;
}

.pr-4, .px-4 {
  padding-right: 1.5rem;
}

// margins
.mx-auto {
  margin: auto;
}
.mt-4, .my-4 {
  margin-top: 1.5rem;
}
.mt-8 {
  margin-top: 4rem;
}
.mb-4, .my-4 {
  margin-bottom: 1.5rem;
}
.mb-8 {
  margin-bottom: 4rem;
}
.ml-2, .mx-2 {
  margin-left: 0.5rem;
}
.ml-4, .mx-4 {
  margin-left: 1.5rem;
}
.mr-4, .mx-4 {
  margin-right: 1.5rem;
}

// flex
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.items-center {
  align-items: center;
}

// bg colors
.bg-filter {
  background-color: var(--lightOrangeColor);
  width: 100%;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.selecter {
  color: var(--titleColor);
  background-color: var(--whiteColor);
  border: 1px solid var(--inputBgColor);
  border-radius: 6px;
  padding: 8px 12px;
  outline: none;
  width: 250px;
  text-transform: capitalize;
  &.btn {
    cursor: pointer;
    width: 150px;
  }
}
@media ((max-width: 576px)) {
  .container {
    max-width: 540px;
  }
  .selecter {
    &.ml-4, &.btn {
      margin: 1rem 0 0;
    }
  }
}
@media ((min-width: 768px)) {
  .container {
    max-width: 720px;
  }
  .selecter {
    width: 150px;
    &.btn {
      width: 80px;
    }
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
