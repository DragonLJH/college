Vue.component('control-div', {
    inject: ['parent'],
    mixins: [mixin],
    props: {
        styleObject: {
            type: Object
        },
        isSetting: {
            type: Boolean
        },
        number: {
            type: Number
        }
    },
    model: {
        prop: "styleObject",
        event: "change"
    },
    data() {
        return {
            controlStyle: this.styleObject
        }
    },
    mounted() {},
    methods: {
        canvasMouseDown(e, direction) {
            // 获取 control-div 组件的坐标以及宽高
            const {
                x: cX,
                y: cY,
                width: cW,
                height: cH
            } = this.$refs.canvas.getBoundingClientRect()
            const move = (moveEvent) => {
                // 解构赋值 给 moveX 和 moveY 分别赋值 clientX 和 clientY
                // 移动后的坐标
                const {
                    clientX: moveX,
                    clientY: moveY
                } = moveEvent
                // 根据拖拽的节点方向（direction）重新计算
                if (direction) {
                    let mW = cW
                    let mH = cH
                    if (direction.indexOf("r") !== -1) mW += moveX - cX - mW + 20
                    if (direction.indexOf("b") !== -1) mH += moveY - cY - mH + 20
                    if (mW + 20 > this.parent.MW) mW = this.parent.MW - 20
                    if (mH + 20 > this.parent.MH) mH = this.parent.MH - 20
                    this.controlStyle = {
                        ...this.controlStyle,
                        width: mW,
                        height: mH,
                    }
                    return
                }
            }
            const up = (e) => { // 鼠标松开结束事件的监听 
                document.removeEventListener("mousemove", move);
                document.removeEventListener("mouseup", up);
                this.$emit("change", this.controlStyle)
                console.log("up", this.controlStyle)
            };
            // 鼠标按下的时候分别监听鼠标移动事件和鼠标松开事件
            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", up);
        },
        close() {
            this.$emit("index", this.number)
        }

    },
    template: `
        <div class="item control-div" :class="isSetting?'mover':''" :style='toPx(controlStyle)' ref="canvas">
            <slot></slot>
            <div class="icon icon-m guanbi_jiaobiao g-rt mover-div" @click="close"></div>
            <div @mousedown.stop="canvasMouseDown($event, direction)" class="icon icon-m guangbiao-tuozhuai mover-div" :class="direction" v-for="(direction, index) in ['r','b','rb',]" :key="index"></div> 
        </div> 
    `
})