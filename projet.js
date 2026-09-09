const prompt = require("prompt-sync")();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = [];

let idTikt = 1;


// affichageTrajets();


let n
do {
    affichageMenu();

    n = Number(prompt("Entrer le numéro de choix : "));

    switch (n) {
    case 1 :
        affichageTrajets();
    break;
    case 2 :
        acheterTiket();
    break;
    case 3 :
        affichageTickets();
    break;
    case 4 :

    break;
    case 5 :

    break;
    case 6 :

    break;
    case 7 :

    break;
    case 0 :
        console.log("Exit...");
    break;
    default : console.log("Le numéro est invalide");
    break;
};
}while(n != 0);











































function affichageMenu () {
    console.log(`
        ======================= \n
        RAILWAY MANAGER \n
        ======================= \n
        1. Afficher les trajets \n
        2. Acheter un ticket \n
        3. Afficher les tickets \n
        4. Annuler un ticket \n
        5. Rechercher un ticket \n
        6. Filtrer les trajets \n
        7. Trier les trajets \n
        0. Quitter`)
};

function affichageTrajets () {
    console.log(`=== TRAJETS DISPONIBLES === \n`);

    for (let i = 0; i < trips.length; i++) {
        console.log(`#${trips[i].id} ${trips[i].departure} => ${trips[i].destination} \n
            Départ : ${trips[i].departureTime} \n
            Arrivée : ${trips[i].arrivalTime} \n
            Prix : ${trips[i].price} DH \n
            Places disponibles : ${trips[i].availableSeats} \n`)
    }
};







// let targetId = Number(prompt("entrer id : "));

// let rslt = trips.find((element) => element.id == targetId);


// console.log(rslt);

// if (rslt.availableSeats > 0) {
//     console.log("1")
// }else console.log("0");








function acheterTiket () {
    let nom = prompt("Entre le nom de passager : ");
    let idTrajet = Number(prompt("Entrer l'identifiant du trajet : "));

   let  rslt = trips.find((element) => element.id == idTrajet); 
   let numPlace = donnerNumeroPlace(idTrajet);


    if (rslt == undefined) console.log("Trajet introuvable");
    
    else if(rslt.availableSeats === 0){
        console.log("Train complet")
    }
    else if (rslt.availableSeats > 0) {
        let ticket = {
            id: idTikt,
            passengerName: nom,
            tripId: rslt.id,
            seatNumber: numPlace,
            price: rslt.price,
        }
        tickets.push(ticket);
        for (let i = 0; i < trips.length; i++) {
            if (trips[i].id == idTrajet) {
                trips[i].availableSeats -= 1
            }
        }

        console.log("Ticket acheté avec succès");

        console.log(`
            Ticket #${idTikt} \n
            passager : ${nom} \n
            Trajet : ${rslt.departure} => ${rslt.destination} \n
            Place : ${numPlace} \n
            Prix : ${rslt.price} DH`)

            idTikt++;
            
    }else console.log("Train complet");
}








function donnerNumeroPlace (idTrajet) {
    let isDispo
    for (let i = 1; i <= 50; i++) {
        isDispo = true;
        // if (tickets.length == 0) {
        //     return 1;
        // }
        for (let j = 0 ; j < tickets.length; j++) {

            
            if ((tickets[j].tripId == idTrajet) && (i == tickets[j].seatNumber)) {
                isDispo = !isDispo
                break;
            }
        }
    
        if (isDispo) {
            return i;
        }

    }

};






function affichageTickets () {

    console.log(`=== TICKETS === \n`);

    for (let i = 0; i < tickets.length; i++) {
        let rslt1 = trips.find((element) => element.id == tickets[i].tripId)
        console.log(`Ticket #${tickets[i].id} \n
            Passager : ${tickets[i].passengerName} \n
            Trajet : ${rslt1.departure} => ${rslt1.destination} \n
            Places : ${tickets[i].seatNumber} \n
            Prix : ${tickets[i].price} DH \n`)
    }
};

