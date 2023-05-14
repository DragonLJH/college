Vue.component('leibie-div', {
    inject: ['parent'],
    mixins: [mixin],
    template: `
<div class="leibie-div" :style="{'--padding-r':openR?'300px':'20px'}">
    <div class="search-div">
        <div class="search-div-item">
            <input type="text" placeholder="客户名称" />   
        </div> 
        <div class="search-div-item">
            <input type="text" placeholder="地域" />
        </div> 
        <div class="search-div-item">
            <input type="text" placeholder="性质" />
        </div> 
        <div class="search-div-item">
            查找
        </div> 
        <div class="search-div-item">
            增加
        </div> 
    </div> 
    <control-div v-for="(item, index) in mainItems" :key="item.id" v-model='item.style' :is-setting="false">
        <template v-if="item.is == 'common-div'">
            <common-div :img-data="item.imgData" :progress="item.progress" :title="item.title" :title-icon="item.titleIcon" :msg-div="item.msgDiv"></common-div>
        </template>
        <template v-if="item.is == 'kjfw-div'">
            <kjfw-div :title="item.title" :title-icon="item.titleIcon" :main="item.main" ></kjfw-div>
        </template>
        <template v-if="item.is == 'echarts-div'">
            <echarts-div :id="item.id" title="" title-icon="leibie" :style-object="item.style" :option="item.option" />
        </template>
        <template v-if="item.is == 'img-msg-div'">
            <img-msg-div :id="item.id" :style-object="item.style" :option="item.option" />
        </template>
    </control-div>
    <div class="leibie-div-right" :style="{'--width':openR?'300px':'20px'}">
        <div class="leibie-div-right-button">
            <div class="button-div" @click="openR = true">
                <
            </div> 
            <div class="button-div" @click="openR = false">
                >
            </div> 
        </div> 
        <div class="leibie-div-right-main" v-show="openR"></div> 
    </div>
</div>
`,
    data() {
        return {
            openR: false,
            mainItems: [{
                is: "echarts-div",
                id: 0,
                style: {
                    width: 450,
                    height: 300,
                },
                title: "类别",
                titleIcon: "",
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
            }, {
                is: "echarts-div",
                id: 1,
                style: {
                    width: 450,
                    height: 300,
                },
                title: "",
                titleIcon: "",
                option: {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }]
                }
            }, {
                is: "echarts-div",
                id: 2,
                style: {
                    width: 450,
                    height: 300,
                },
                title: "",
                titleIcon: "",
                option: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            // Use axis to trigger tooltip
                            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                        }
                    },
                    legend: {},
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    series: [{
                            name: 'Direct',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [320, 302, 301, 334, 390, 330, 320]
                        },
                        {
                            name: 'Mail Ad',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: 'Affiliate Ad',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: 'Video Ad',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [150, 212, 201, 154, 190, 330, 410]
                        },
                        {
                            name: 'Search Engine',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [820, 832, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                }
            }, {
                is: "common-div",
                id: 3,
                title: "",
                titleIcon: "",
                style: {
                    width: 400,
                    height: 150,
                },
                imgData: {
                    show: true,
                    type: "rectangle",
                    img: "",
                    data: ["小菲，上午好！", "最近登录时间：2022年/08/08 13:03", "明天有暴雨，记得出门带伞噢！"]
                },
                progress: {
                    show: true,
                    pace: "40%",
                    name: "4/10"
                },
            }, {
                is: "img-msg-div",
                id: 4,
                title: "",
                titleIcon: "",
                style: {
                    width: 400,
                    height: 120,
                }
            }]

        }
    },
    methods: {}
})