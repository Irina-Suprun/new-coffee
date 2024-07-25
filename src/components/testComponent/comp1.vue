<template>
    <div>
        <h1>Enter Email</h1>
        <form>
            <div class="form-group">
                <label for="email">
                    <input v-model="item" type="email" class="form-control" placeholder="Email Address" />
                </label>
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-lg" @click.prevent="pressed(item)">Press Button 1</button> //#C
            </div>
        </form>
    </div>
</template>

<script>
import buttonMixin from '../../mixins/buttonMixin';

export default {
  name: 'myComp1',
  mixins: [buttonMixin],
};
</script>
