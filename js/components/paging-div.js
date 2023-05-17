Vue.component('paging-div', {
    props: {
        lines: {
            type: Number
        },
        currently: {
            type: Number
        },
        numberOfPieces: {
            type: Number
        },
    },
    model: {
        prop: 'currently',
        event: 'change'
    },
    data: function() {
        return {
            flag: 0,
        }
    },
    methods: {
        prev() {
            if (this.flag > 1) {
                this.flag--;
                this.$emit("change", this.flag)
            }
        },
        next() {
            if (this.flag < this.itemsPerPage) {
                this.flag++;
                this.$emit("change", this.flag)
            }
        }
    },
    mounted() {
        this.flag = this.currently
    },
    computed: {
        itemsPerPage() {
            return parseInt((this.lines / this.numberOfPieces).toFixed(0))
        },

    },
    template: `
    <div class="paging-div">
        <div class="text">
            <span>共</span>
            <span>{{lines}}</span>
            <span>条，</span>
        </div>
        <div class="text">
            <span>第</span>
            <span>{{flag}}/{{itemsPerPage}}</span>
            <span>页</span>
        </div>
        <div class="event">
            <span class="prev" @click="prev">上一页</span>
            <span class="next" @click="next">下一页</span>
        </div>
    </div>
    `
})
