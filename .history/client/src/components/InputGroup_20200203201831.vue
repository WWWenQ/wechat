<template>
    <div class="input_group">
        <label :for="name">{{label}}</label>
        <input
         :type="type"
         :value="value"
         :placeholder="placeholder"
         @input="$emit('input',$event.target.value)"

        >

    </div>
</template>
<script>
export default {
    props:{
        name:String,
        label
    }
}
</script>
<style scoped>

</style>