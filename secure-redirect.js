const domain = "publisher.simplyoliveapps.com"
if (window.location.href.contains(domain) && window.location.protocol != "https:") {
    window.location.replace("https://"+domain);
}