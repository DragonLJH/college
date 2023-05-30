Vue.component('common-div', {
    props: {
        title: {
            type: String
        },
        titleIcon: {
            type: String
        },
        imgData: {
            type: Object
        },
        progress: {
            type: Object
        },
        msgDiv: {
            type: Array
        }
    },
    data: function() {
        return {
            commonMsgDiv: []
        }
    },
    methods: {
        iconClick(index) {
            let item = JSON.parse(JSON.stringify(this.commonMsgDiv[index]))
            if (!item.isGroup) return
            item.active = !item.active
            if (item.active) {
                item.icon = item.AIcon
            } else {
                item.icon = item.unAIcon
            }
            this.$set(this.commonMsgDiv, index, item)
        }
    },
    mounted() {
        this.commonMsgDiv = this.msgDiv ? JSON.parse(JSON.stringify(this.msgDiv)) : []
    },
    template: `<div class="common-div">
                <title-div :title="title" :title-icon="titleIcon" />
                <div class="main">
                    <img-div :img-data="imgData"></img-div>
                    <progress-div :progress="progress"></progress-div>
                    <div class="icon-div" v-for="(item, index) in commonMsgDiv" :key="index" >
                        <div @click="iconClick(index)" class="icon " :class="item.icon" :data-num="item.msg.data.length?item.msg.data.length:''"></div>
                        <div class="msg">
                            <div class="msg-item">
                                <div>{{item.msg.title}}</div>
                                <div>{{item.msg.time}}</div>
                            </div>
                            <div v-show="item.isGroup && item.active" class="msg-item"  v-for="(val, index) in item.msg.data" :key="index">
                                <div>{{val.text}}</div>
                                <div>{{val.time}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
})