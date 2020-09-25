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
        publication: "Write your post and use the links below to send it anywhere!\n\nMade with 🥑 by @amj311",
    },

    methods: {
        copyNetworkLink(name) {
            linktext = this.$refs['link_' + name][0];
            linktext.select();
            linktext.setSelectionRange(0, 99999); /*For mobile devices*/

            /* Copy the text inside the text field */
            document.execCommand("copy");

            /* Alert the copied text */
            alert("Copied the text: " + linktext.value);
        },

        fbPost() {
            var data =
            {
                method: 'stream.publish',
                message: "Posted using FB.api",
                display: 'iframe',
                caption: "Caption",
                name: "Name",
                // picture: 'https://www.permadi.com/permadi.png',
                href: "https://www.permadi.com/",  // Go here if user click the picture
                // description: "Description field",
                // actions: [{ name: 'action_links text!', link: 'https://www.permadi.com' }],
            }
            FB.ui(data, () => console.log("Did it!"));
        }
    },

    computed: {
        publicationURI() {
            let url = encodeURI(this.publication)
            return url
                .replaceAll("#", "%23",)
                .replaceAll("&", "%26")
        }
    }
})