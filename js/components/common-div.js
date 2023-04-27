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
        this.commonMsgDiv = JSON.parse(JSON.stringify(this.msgDiv))
    },
    template: `<div>
                <title-div :title="title" :title-icon="titleIcon" />
                <div class="main">
                    <div class="img-div" v-if="imgData.show">
                        <div class="img" :type="imgData.type">
                        </div>
                        <div class="msg">
                            <div v-for="(item, index) in imgData?.data" :key="index">
                                {{item}}
                            </div> 
                        </div>
                    </div>
                    <div class="progress" v-if="progress.show">
                        <div class="item">
                            <div :style="{width: progress.pace }"></div>
                            <span>{{progress.pace}}({{progress.name}})</span>
                        </div>
                        <div class="icon shezhi"></div>
                    </div>
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