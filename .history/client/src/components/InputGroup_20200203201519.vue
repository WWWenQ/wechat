<template>
    <div class="input_group">
        <label :for="name">{{label}}</label>
        <input
         :type="type"
         :value="value"
         :placeholder="placeholder"
         @input="$emit(''"

        >

    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>