<template>
    <div>
        <button class="app-button button">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
  name: 'AppButton',
};
</script>

<style lang="scss" src="../AppButton/index.scss" />
