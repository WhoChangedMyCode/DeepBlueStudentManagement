import { createStore } from "vuex";
import persistedState from "vuex-persistedstate";
export default createStore({
    state: {
        defaultActive: {
            path: "",
            title: "",
        },
        routerList: "",
        username: "",
        news: {},
        tableData: [
            {
                name: "张三",
                department: "信息部",
                iphone: "13878794323",
                address: "康华药业大厦",
                time: "2023-10-20",
            },
            {
                name: "李四",
                department: "后勤部",
                iphone: "13878797337",
                address: "康华药业大厦",
                time: "2023-10-21",
            },
            {
                name: "王五",
                department: "技术部",
                iphone: "13878796565",
                address: "康华药业大厦",
                time: "2023-10-22",
            },
            {
                name: "赵六",
                department: "销售部",
                iphone: "13878797888",
                address: "康华药业大厦",
                time: "2023-10-23",
            },
            {
                name: "钱七",
                department: "人事部",
                iphone: "13878798777",
                address: "康华药业大厦",
                time: "2023-10-24",
            },
            {
                name: "孙八",
                department: "财务部",
                iphone: "13878799666",
                address: "康华药业大厦",
                time: "2023-10-25",
            },
            {
                name: "李九",
                department: "研发部",
                iphone: "13878792222",
                address: "康华药业大厦",
                time: "2023-10-26",
            },
            {
                name: "周十",
                department: "市场部",
                iphone: "13878793333",
                address: "康华药业大厦",
                time: "2023-10-27",
            },
            {
                name: "吴十一",
                department: "客服部",
                iphone: "13878794444",
                address: "康华药业大厦",
                time: "2023-10-28",
            },
            {
                name: "郑十二",
                department: "运营部",
                iphone: "13878795555",
                address: "康华药业大厦",
                time: "2023-10-29",
            },
            {
                name: "王十三",
                department: "品牌部",
                iphone: "13878796666",
                address: "康华药业大厦",
                time: "2023-10-30",
            },
            {
                name: "陈十四",
                department: "采购部",
                iphone: "13878797777",
                address: "康华药业大厦",
                time: "2023-10-31",
            },
            {
                name: "刘十五",
                department: "法务部",
                iphone: "13878798888",
                address: "康华药业大厦",
                time: "2023-11-01",
            },
            {
                name: "黄十六",
                department: "品控部",
                iphone: "13878799999",
                address: "康华药业大厦",
                time: "2023-11-02",
            },
            {
                name: "许十七",
                department: "生产部",
                iphone: "13878791111",
                address: "康华药业大厦",
                time: "2023-11-03",
            },
            {
                name: "何十八",
                department: "物流部",
                iphone: "13878792222",
                address: "康华药业大厦",
                time: "2023-11-04",
            },
            {
                name: "宋十九",
                department: "服务部",
                iphone: "13878793333",
                address: "康华药业大厦",
                time: "2023-11-05",
            },
            {
                name: "张二十",
                department: "安全部",
                iphone: "13878794444",
                address: "康华药业大厦",
                time: "2023-11-06",
            },
        ],
    },
    getters: {},
    mutations: {
        addtableData: function (state, obj) {
            state.tableData.push(obj);
        },
        deltableData: function (state, n) {
            state.tableData.splice(n, 1);
        },
        edittableData: function (state, obj) {
            state.tableData.splice(obj.idx, 1, obj.row);
        },
        editdefaultActive: function (state, obj) {
            state.defaultActive = obj;
        },
        savarouterList: function (state, arr) {
            state.routerList = arr;
        },
        savausername: function (state, name) {
            state.username = name;
        },
        savanews: function (state, obj) {
            state.news = obj;
        },
        cleardata(state) {
            (state.defaultActive = {
                path: "",
                title: "",
            }),
                (state.routerList = ""),
                (state.username = "");
        },
    },
    actions: {},
    modules: {},
    plugins: [persistedState({ storage: window.localStorage })],
});
