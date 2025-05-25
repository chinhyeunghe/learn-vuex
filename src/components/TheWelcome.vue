<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import {useStore} from 'vuex'
import {computed} from 'vue'
const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')

const myStore = useStore();
const heading1 = computed(() => myStore.getters['a/getListWelcome'].item1);
const heading2 = computed(() => myStore.getters['a/getListWelcome'].item2);
const heading3 = computed(() => myStore.getters['a/getListWelcome'].item3);
const heading4 = computed(() => myStore.getters['a/getListWelcome'].item4);
const heading5 = computed(() => myStore.getters['a/getListWelcome'].item5);
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ heading1 }}</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{ heading2 }}</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>{{ heading3 }}</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>{{  heading4 }}</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>{{ heading5 }}</template>
  </WelcomeItem>
</template>
