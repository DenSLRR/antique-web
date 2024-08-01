<template>
    <div class="adaptive h-full w-full px-2 md:px-5">
        <TransitionGroup name="list">
            <slot></slot>
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.adaptive {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
}

@media (max-width: 1400px) {
    .adaptive {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
    }
}

@media (max-width: 900px) {
    .adaptive {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
    }
}

@media (max-width: 487px) {
    .adaptive {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 5px;
    }
}
.page {
    border: 1px solid black;
    padding: 10px;
    background-color: darkgrey;
}
</style>
