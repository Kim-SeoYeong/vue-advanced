import bus from '../utils/bus.js';

//mixin
export default {
    //재사용할 컴포넌트 옵션
    mounted() {
        bus.$emit("end:spinner");
    },
    // created() {
    //     bus.$emit("start:spinner");
    //     //#1
    //     this.$store
    //         .dispatch("FETCH_LIST", this.$route.name)
    //         // #5
    //         .then(() => {
    //             console.log("5");
    //             console.log("fetched");
    //             bus.$emit("end:spinner");
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
}

//hoc
// export default function create() {
//     //재사용할 컴포넌트 옵션
// }