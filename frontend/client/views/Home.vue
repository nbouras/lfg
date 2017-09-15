<template>
  <div class="page">
    <Counter></Counter>
    <Navigation></Navigation>
    <p>
      To get started, edit files in <code>./client</code> and save.
    </p>
  </div>
</template>

<script>
import Counter from 'components/Counter'
import Navigation from 'components/Navigation'

export default {
  components: {
    Counter,
    Navigation
  }
}
</script>
