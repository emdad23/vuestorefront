<template>
<div class="row center-xs">
    <div class="col-sm-4 pb15" v-for="(tile, index) in social_tiles" :key="index">
        <div class="tile center-xs middle-xs">
            <img class="tile-image" v-lazy="tile.image" :alt="tile.alt">
        </div>
        <div class="card-body">
            <h4 class="card-title">Vans Sk8-Hi MTE Shoes</h4>
            <h6 class="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
            <p class="card-text">
                The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool. </p>
            <div class="options d-flex flex-fill">
                <select class="custom-select mr-1">
                    <option selected>Color</option>
                    <option value="1">Green</option>
                    <option value="2">Blue</option>
                    <option value="3">Red</option>
                </select>
                <select class="custom-select ml-1">
                    <option selected>Size</option>
                    <option value="1">41</option>
                    <option value="2">42</option>
                    <option value="3">43</option>
                </select>
            </div>
            <div class="buy d-flex justify-content-between align-items-center">
                <div class="price text-success">
                    <h5 class="mt-4">$125</h5>
                </div>
                <button v-on:click="warn('Form cannot be submitted yet.', $event)" class="button-outline no-outline py15 bg-cl-transparent h4 no-underline sans-serif fs-medium dark brdr-darkgray cl-secondary px40"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'TileLinks',
    data() {
        return {
            social_tiles: [{
                    image: 'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png',
                    alt: 'Man practicing on the beach'
                },
                {
                    image: 'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png',
                    alt: 'Man practicing on the beach'
                },
                {
                    image: 'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png',
                    alt: 'Man practicing on the beach'
                },
                {
                    image: 'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png',
                    alt: 'Man practicing on the beach'
                },
                {
                    image: 'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png',
                    alt: 'Man practicing on the beach'
                },
                {
                    image: 'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png',
                    alt: 'Man practicing on the beach'
                },
            ]
        }
    },
    methods: {
        warn: function (message, event) {
            // now we have access to the native event
            if (event) {
                event.preventDefault()
            }
            alert(message)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/animations/transitions';

.tile {
    display: flex;
    overflow: hidden;
    padding: 10px;
    border: 2px solid;
    border-color: black;
}

.tile-image {
    width: 100%;
    height: 100%;
    transition: transform 0.3s $motion-main;

    &:hover,
    &:focus {
        transform: scale(1.2);
    }
}

.pb15 {
    padding: 20px;
    border: 2px solid;
    border-color: black;
}
</style>
