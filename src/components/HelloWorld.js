module.exports = {
    data: function () {
        return {
            counter: 0,
        }
    },
    props: {
        msg: String,
    },
    computed: {
        reverseMsg() {
            // throw new Error('die');
            return this.msg.split("").reverse().join("");
        }
    },
    mounted()
    {
        // throw new Error('die');
    }
}
