module.exports = {
    name: "ban",
    description: "Bannir un utilisateur.",
    run: async (message, args, command, client) => {
        // Supprimer le message de la commande
        message.delete();

        // Fonction pour supprimer un message après un délai
        async function deleteMessage(msg) {
            setTimeout(() => {
                msg.delete();
            }, 3000);
        }

        // Vérifier si l'utilisateur a mentionné un membre à bannir
        const member = message.mentions.members.first();
        if (!member) {
            // Si aucun membre n'a été mentionné, envoyer un message d'erreur
            return await message.channel.send("Merci de mentionner l'utilisateur que vous souhaitez bannir.")
                .then(m => deleteMessage(m));
        }

        // Bannir l'utilisateur
        try {
            await member.ban();
            await message.channel.send(`L'utilisateur ${member.user.tag} a été banni.`);
        } catch (error) {
            console.error(error);
            await message.channel.send("Une erreur est survenue lors du bannissement de cet utilisateur.")
                .then(m => deleteMessage(m));
        }
    }
};
