const app = new Vue({
    el: "#app",

    data: {
        networks: [
            {
                displayName: "Twitter",
                maxChar: 280,
                publishURL: "https://twitter.com/intent/tweet?text=",
                brandColor: "#1da1f2",
                brandFaCode: "fa fa-twitter",
            },
            // {
            //     displayName: "Facebook",
            //     maxChar: Infinity,
            //     publishURL: "https://facebook.com/intent...",
            //     brandColor: "#3b5998",
            //     brandFaCode: "fa fa-facebook",
            // },
        ],
        publication: "Write your post and use the links below to send it anywhere!\n\nMade with 🥑 by amj311",
    },

    methods: {
        copyNetworkLink(name) {
            linktext = this.$refs['link_'+name][0];
            linktext.select();
            linktext.setSelectionRange(0, 99999); /*For mobile devices*/

            /* Copy the text inside the text field */
            document.execCommand("copy");
          
            /* Alert the copied text */
            alert("Copied the text: " + linktext.value);
        }
    },

    computed: {
        publicationURI() {
            let url = encodeURI(this.publication)
            return url.replace("#","%23")
        }
    }
})