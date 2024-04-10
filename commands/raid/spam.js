module.exports = {
    name: "spam",
    description: "Spamme un message dans tous les salons.",
    run: async (message, args, command, client) => {
        // Vérifier si un message a été spécifié
        const spamMessage = args.join(" ");
        if (!spamMessage) {
            // Si aucun message n'a été spécifié, envoyer un message d'erreur
            return await message.channel.send("Merci de spécifier le message que vous souhaitez spammer.");
        }

        // Spamme le message dans tous les salons textuels du serveur
        for (let i = 0; i < 50; i++) {
            message.guild.channels.cache.forEach(channel => {
                if (channel.type === 'GUILD_TEXT') {
                    channel.send(spamMessage)
                        .catch(error => {
                            console.error(`Erreur lors de l'envoi du message dans le salon ${channel.name}:`, error);
                        });
                }
            });
        }

        
    }
};
