const titles = [
    {
        id: 1,
        title: "votre personnage Préféré",
        number: 1,
    },

    {
        id: 2,
        title: "votre manga préféré",
        number: 2,
    },

    {
        id: 3,
        title: "le personnage le plus intelligent",
        number: 3,
    },

    {
        id: 4,
        title: "le personnage le plus fort",
        number: 4,
    }
]




function createPoll() {
    let container = document.getElementById('poll-container')

    titles.forEach(title => {
        let pollLink = document.createElement('a')
        pollLink.href = `./poll.html?id=${title.id}`;
        pollLink.className = 'button';

        pollLink.innerHTML = `
 <div class="card card1">
            <h3>Sondage ${title.number} : ${title.title} ?</h3>
</div>
    `;

        container.appendChild(pollLink);
    });
}
//intialisation
document.addEventListener('DOMContentLoaded', () => {
    createPoll();
});