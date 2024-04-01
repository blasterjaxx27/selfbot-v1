module.exports = {
    name: "help",
    description: "Affiche une liste des commandes disponibles.",
    run: async (message, args, command, client) => {
        // Supprimer le message de la commande
        message.delete();

        // Construire le message d'aide
        const helpMessage = `
            **Commandes disponibles :**
            +ping - Vérifiez la latence du bot.
            +ban [@mention] - Bannir un utilisateur.
            +help - Affiche une liste des commandes disponibles.
            // Ajoutez d'autres commandes ici

            Pour plus d'informations sur une commande spécifique, tapez : +help [nom de la commande]
        `;

        // Envoyer le message dans le canal
        const sentMessage = await message.channel.send(helpMessage);

        // Supprimer le message après 5 minutes
        setTimeout(() => {
            sentMessage.delete();
        }, 5 * 60 * 1000); // 5 minutes
    }
};

