const discord = require('discord.js')
const bot = new discord.Client()
const Google = require('./commands/google')

bot.on('ready', function () {
     bot.user.setGame('Créé par Isaac | TEST').catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
      return  channel.send('Bienvenu, tu vas être confronter a un captcha, tu dois ecrire se que tu vois, si tu ne comprend pas, demande a une personne du staff. ' + member.displayName )
    }).catch(console.error)
})

bot.on('message', function (message) {
if (Google.match(message)) {
Google.action(message)
}

if (message.content === '?Spiralbot') {
    message.channel.send ('>>> si tu veux savoir des choses sur moi ecrit ?spiral config, si tu veux savoir des choses sur mon créateur ecrit ?spiral info')
}

if (message.content === '?spiral config') {
    message.channel.send ('>>> Je suis peut être le bot officiel du multicord, je suis néé le 29 aout 2019 et je suis un bot du type fun')
}

if (message.content === '?spiral info') {
    message.channel.send ('>>> Alex est le créateur de se serveur, il a créé le serveur le 22 septembre 2017 et il est néé le 8 janvier 200.. je te laisse deviner. Isaac est mon créateur, il est jeune, charismatique, bonne élève et bon je suis bon menteur XD, La v1 du SpiralBot a été abandonné, heureusement Isaac m a fait renaître de mes cendres et je le remercie')
}


if (message.content === 'Re') {
    message.channel.send ('nard')
}

});

bot.login ('NjE2NTk3NTUyNjEwOTM0ODAz.XWe6dA.lIbw_YY65aMPgmh0bvE7x_-MOdc')
