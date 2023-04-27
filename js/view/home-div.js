Vue.component('home-div', {
    inject: ['parent'],
    mixins: [mixin],
    template: `
    <draggable class="home-div" v-model="mainItems" handle=".mover>div:first-child" group="control-div" @start="onStart" @end="onEnd">
        <transition-group>
            <control-div v-for="(item, index) in mainItems" :key="item.id" v-model='item.style' :is-setting="isSetting">
                <template v-if="item.is == 'common-div'">
                    <common-div :img-data="item.imgData" :progress="item.progress" :title="item.title" :title-icon="item.titleIcon" :msg-div="item.msgDiv"></common-div>
                </template>
                <template v-if="item.is == 'kjfw-div'">
                    <kjfw-div :title="item.title" :title-icon="item.titleIcon" :main="item.main" ></kjfw-div>
                </template>
                <template v-if="item.is == 'echarts-div'">
                    <echarts-div title="" title-icon="leibie" :style-object="item.style" :option="item.option" />
                </template>
            </control-div>
        </transition-group>
    </draggable>
`,
    data() {
        return {
            mainItems: [{
                is: "common-div",
                id: 0,
                title: "",
                titleIcon: "",
                style: {
                    width: 400,
                    height: 300,
                },
                imgData: {
                    show: true,
                    type: "round",
                    img: "",
                    data: ["小菲，上午好！", "最近登录时间：2022年/08/08 13:03", "明天有暴雨，记得出门带伞噢！"]
                },
                progress: {
                    show: true,
                    pace: "40%",
                    name: "课时"
                },
                msgDiv: [{
                    icon: "huiyi",
                    msg: {
                        title: "《关于公司全面预算规划会议》",
                        time: "08/10 18:12",
                        data: []
                    }
                }, {
                    icon: "yikatong",
                    msg: {
                        title: "一卡通余额:**************",
                        time: "08/10 18:12",
                        data: []
                    }
                }, {
                    icon: "wangzhan",
                    msg: {
                        title: "个人网站:xxx.xxx.xxx",
                        time: "08/10 18:12",
                        data: []
                    }
                }, ]
            }, {
                is: "common-div",
                id: 1,
                title: "待办",
                titleIcon: "daiban",
                style: {
                    width: 400,
                    height: 300,
                },
                imgData: {
                    show: false,
                },
                progress: {
                    show: false,
                },
                msgDiv: [{
                    isGroup: false,
                    icon: "folderShare",
                    msg: {
                        title: "草稿",
                        time: "08/10 18:12",
                        data: []
                    }
                }, {
                    isGroup: true,
                    icon: "olderOpen",
                    active: true,
                    unAIcon: "folderShare",
                    AIcon: "olderOpen",
                    msg: {
                        title: "被退回",
                        time: "08/10 18:12",
                        data: [{
                            text: "项目立项申请",
                            time: "08/10 18:12"
                        }, {
                            text: "报销申请",
                            time: "08/10 18:12"
                        }, {
                            text: "资产领用申请",
                            time: "08/10 18:12"
                        }]
                    }
                }, {
                    isGroup: true,
                    icon: "folderShare",
                    active: false,
                    unAIcon: "folderShare",
                    AIcon: "olderOpen",
                    msg: {
                        title: "被退回",
                        time: "08/10 18:12",
                        data: [{
                            text: "项目立项申请",
                            time: "08/10 18:12"
                        }, {
                            text: "报销申请",
                            time: "08/10 18:12"
                        }, {
                            text: "资产领用申请",
                            time: "08/10 18:12"
                        }]
                    }
                }, ],
            }, {
                is: "common-div",
                id: 2,
                title: "催办",
                titleIcon: "cuiban",
                imgData: {
                    show: false,
                },
                progress: {
                    show: false,
                },
                style: {
                    width: 350,
                    height: 200,
                },
                msgDiv: [{
                    isGroup: false,
                    icon: "folderShare",
                    msg: {
                        title: "草稿",
                        time: "08/10 18:12",
                        data: []
                    }
                }, {
                    isGroup: true,
                    icon: "olderOpen",
                    active: true,
                    unAIcon: "folderShare",
                    AIcon: "olderOpen",
                    msg: {
                        title: "被退回",
                        time: "08/10 18:12",
                        data: [{
                            text: "项目立项申请",
                            time: "08/10 18:12"
                        }, {
                            text: "报销申请",
                            time: "08/10 18:12"
                        }, {
                            text: "资产领用申请",
                            time: "08/10 18:12"
                        }]
                    }
                }, {
                    isGroup: true,
                    icon: "folderShare",
                    active: false,
                    unAIcon: "folderShare",
                    AIcon: "olderOpen",
                    msg: {
                        title: "被退回",
                        time: "08/10 18:12",
                        data: [{
                            text: "项目立项申请",
                            time: "08/10 18:12"
                        }, {
                            text: "报销申请",
                            time: "08/10 18:12"
                        }, {
                            text: "资产领用申请",
                            time: "08/10 18:12"
                        }]
                    }
                }, ],
            }, {
                is: "kjfw-div",
                id: 3,
                style: {
                    width: 350,
                    height: 200,
                },
                title: "待办",
                titleIcon: "kuaijiefangwen",
                main: [{
                    title: "待办",
                    titleIcon: "kuaijiefangwen",
                }, {
                    title: "待办",
                    titleIcon: "kuaijiefangwen",
                }, {
                    title: "待办",
                    titleIcon: "kuaijiefangwen",
                }, {
                    title: "待办",
                    titleIcon: "kuaijiefangwen",
                }, {
                    title: "待办",
                    titleIcon: "kuaijiefangwen",
                }, {
                    title: "待办",
                    titleIcon: "kuaijiefangwen",
                }, {
                    title: "待办",
                    titleIcon: "kuaijiefangwen",
                }, {
                    title: "待办",
                    titleIcon: "kuaijiefangwen",
                }, {
                    title: "待办",
                    titleIcon: "kuaijiefangwen",
                }, ]
            }, {
                is: "echarts-div",
                id: 4,
                style: {
                    width: 350,
                    height: 200,
                },
                title: "类别",
                titleIcon: "leibie",
                option: {
                    title: {
                        text: 'AAA'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    toolbox: {
                        feature: {
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            magicType: {
                                show: true,
                                type: ['line', 'bar']
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    legend: {
                        data: ['Evaporation', 'Precipitation', 'Temperature']
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisPointer: {
                            type: 'shadow'
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        name: 'Precipitation',
                        min: 0,
                        max: 250,
                        interval: 50,
                        axisLabel: {
                            formatter: '{value} ml'
                        }
                    }, {
                        type: 'value',
                        name: 'Temperature',
                        min: 0,
                        max: 25,
                        interval: 5,
                        axisLabel: {
                            formatter: '{value} °C'
                        }
                    }],
                    series: [{
                        name: 'Evaporation',
                        type: 'bar',
                        tooltip: {
                            valueFormatter: function(value) {
                                return value + ' ml';
                            }
                        },
                        data: [
                            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                        ]
                    }, {
                        name: 'Precipitation',
                        type: 'bar',
                        tooltip: {
                            valueFormatter: function(value) {
                                return value + ' ml';
                            }
                        },
                        data: [
                            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                        ]
                    }, {
                        name: 'Temperature',
                        type: 'line',
                        yAxisIndex: 1,
                        tooltip: {
                            valueFormatter: function(value) {
                                return value + ' °C';
                            }
                        },
                        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                    }]
                }
            }]

        }
    },
    methods: {
        onStart() {
            this.drag = true;
        },
        onEnd() {
            this.drag = false;
        }

    },
    computed: {
        isSetting() {
            return this.parent.isSetting
        }
    },

})