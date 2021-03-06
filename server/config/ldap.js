module.exports = {
    "ldap": {
    "url": "ldap://ldap.forumsys.com:389",
        "bindCredentials": "password",
        "searchBase": "dc=example,dc=com",
        "searchFilter": "(uid={{username}})",
        "timeout": 5000,
        "connectTimeout": 10000,
        "reconnect": true
},
    "jwt": {
    "secret": "test_secret"
}
}
