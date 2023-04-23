Vue.component('echarts-div', {
    props: {
        title: {
            type: String
        },
        titleIcon: {
            type: String
        },
        styleObject: {
            type: Object
        },
    },
    mixins: [mixinSetting],
    data() {
        return {
            myChart: null,
        }
    },
    methods: {
        changeOption() {
            var option = option = {
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
            };
            // 使用刚指定的配置项和数据显示图表。
            this.myChart.setOption(option);
        }
    },
    mounted() {
        // 基于准备好的dom，初始化echarts实例 
        this.myChart = echarts.init(document.getElementById('echarts-main'));
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(option);
    },
    watch: {
        styleObject: function(n, o) {
            const { width, height } = n
            this.myChart.getDom().style.width = width
            this.myChart.getDom().style.height = height
            this.myChart.resize()
        }
    },
    template: `
                <div class="mover">
                    <div class="title">
                        <div class="title-icon" @click="changeOption">
                            <span class="icon" :class="titleIcon"></span>{{title}}
                        </div>
                        <div class="title-operate icon shezhi" @click="mixinSetting('123')"></div>
                    </div>
                    <div class="main" id="echarts-main"> 
                    </div>
                </div>`
})