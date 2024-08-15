<template>
    <div class="w-full flex lg:justify-between justify-center p-6">
        <div class="lg:max-w-[50%] lg:flex-1">
            <slot></slot>
        </div>

        <div class="max-w-[40%] hidden lg:block flex-1 dent rounded-xl">            
        </div>
    </div>
</template>

<style scoped>
.dent {
    background: url('/svg/dent.svg'),
    linear-gradient(to bottom, #070708, #3F434B);
    background-repeat: no-repeat;
    background-position: left 3% bottom 3%;
}
</style>