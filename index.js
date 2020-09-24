const app = new Vue({
    el: "#app",

    data: {
        networks: [
            {
                displayName: "Twitter",
                maxChar: 80,
                publishURL: "https://twitter.com/intent/tweet?text=",
                brandColor: "#1da1f2",
                brandFaCode: "fa fa-twitter",
            },
            {
                displayName: "Facebook",
                maxChar: Infinity,
                publishURL: "https://facebook.com/intent...",
                brandColor: "#3b5998",
                brandFaCode: "fa fa-facebook",
            },
        ],
        publication: "Write your post and use the links below to send it anywhere!\n\nMade with 💗 by amj311",
    },

    mounted() {
    },

    computed: {
        publicationURI() {
            let url = encodeURI(this.publication)
            return url.replace("#","%23")
        }
    }
})