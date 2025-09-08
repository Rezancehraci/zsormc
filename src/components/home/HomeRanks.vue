<template>
    <div class="section-ranks-wrapper" id="section_ranks_wrapper">
        <div id="ranks" class="section ranks-section container">
            <div class="section-head">
                <h2 class="section-head-title">Elérhető rangjaink</h2>
            </div>
            <div class="section-body">
                <div class="section-card__list" v-for="rank in ranks" :key="rank.name">
                    <div class="card rank-card"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ranks: [
                { name: 'Paci', img: '', price: '508 Zsé', features: ['Sor 1', 'Sor 2'] },
                { name: 'Zsőr', img: '', price: '1016 Zsé', features: ['Sor 1', 'Sor 2'] },
                { name: 'Zsőr+', img: '', price: '2032 Zsé', features: ['Sor 1', 'Sor 2'] }
            ]
        }
    }
}
</script>