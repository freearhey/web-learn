<template lang="pug">
.control
  span.select
    select(v-model="selected",:class="{ 'is-disabled': disabled }",:aria-label="ariaLabel")
      option(v-if="placeholder",value="") {{ placeholder }}
      option(
        v-for="option in options",
        :value="option.value"
      ) {{ option.title }}
</template>

<script>
export default {
  props: {
    options: Array,
    disabled: Boolean,
    placeholder: String,
    default: String,
    ariaLabel: String
  },
  data() {
    return {
      selected: this.default || ''
    }
  },
  watch: {
    selected() {
      this.$emit('option-selected', this.selected)
    }
  }
}
</script>