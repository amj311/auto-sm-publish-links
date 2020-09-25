const domain = "publisher.simplyoliveapps.com"
if (window.location.href.indexOf(domain)>=1 && window.location.protocol != "https:") {
    window.location.replace("https://"+domain);
}