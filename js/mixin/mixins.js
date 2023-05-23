var mixin = {
    methods: {
        toPx: function(obj) {
            const newObj = {
                ...obj
            }
            Object.entries(newObj).forEach(([k, v]) => {
                if (Object.prototype.toString.call(v) == '[object Number]') newObj[k] += "px"
            })
            return newObj
        }
    }
}
var mixinSetting = {
    methods: {
        mixinSetting: function(data) {
            console.log("mixinSetting", data)
        }
    }
}

var mixinMask = {
    data() {
        return {
            mask: null
        }
    },
    created() {
        this.mask = new Mask()
    }
}