<script setup lang="ts">
import { VPHomeHero } from 'vitepress/theme'
import { VPHomeFeatures } from 'vitepress/theme'
import { VPHomeContent } from 'vitepress/theme'
import { useData } from 'vitepress'

const { frontmatter, theme } = useData()
</script>

<template>
  <div 
    class="VPHome" 
    :class="{
      'external-link-icon-enabled': theme.externalLinkIcon
    }">
    <div class="home-hero-background">
      <slot name="home-hero-before" />
      <VPHomeHero>
        <template #home-hero-info-before><slot name="home-hero-info-before" /></template>
        <template #home-hero-info><slot name="home-hero-info" /></template>
        <template #home-hero-info-after><slot name="home-hero-info-after" /></template>
        <template #home-hero-actions-after><slot name="home-hero-actions-after" /></template>
        <template #home-hero-image><slot name="home-hero-image" /></template>
      </VPHomeHero>
      <slot name="home-hero-after" />

      <slot name="home-features-before" />
      <VPHomeFeatures />
      <slot name="home-features-after" />
    </div>

    <VPHomeContent v-if="frontmatter.markdownStyles !== false">
      <Content />
    </VPHomeContent>
    <Content v-else />
  </div>
</template>

<style scoped>
.VPHome {
  margin-bottom: 96px;
}

@media (min-width: 768px) {
  .VPHome {
    margin-bottom: 128px;
  }
}
</style>