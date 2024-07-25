<template>
    <div>
        <h1>Enter Number</h1>
        <form>
            <div class="form-group">
                <input v-model="item" class="form-control" placeholder="Phone Number" />
            </div>
            <div class="form-group">
                <button class="btn btn-warning btn-lg" @click.prevent="pressed(item)">Press Button 2</button>
            </div>
        </form>
    </div>
</template>

<script>
import buttonMixin from '../../mixins/buttonMixin';

export default {
  name: 'myComp2',
  mixins: [buttonMixin],
};
</script>
