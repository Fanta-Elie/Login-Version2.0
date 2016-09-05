/*Ici je créer 5 variables pour retourner les objets HTML à partir de leurs id*/
var log = document.getElementById('email');
var pass = document.getElementById('mdp');
var nMdp = document.getElementById('newMdp');
var nEmail = document.getElementById('newUser');
var confirmedPassword = document.getElementById('reNewMdp');
/*Ensuite je creer un objet qui contiendras deux tableaux: l'un pour les emails , l'autre les passwords*/
var compte = {
	"identifiant": ["elie.bensimon@hotmail.fr", "joe@gmail.com"],
	"motDePasse": ["12345678", "78945612"]
};
/* Ici cette fonction va récuperer la valeur du mdp ainsi que l'email saisie par l'utilisateur 
   puis comparer uniquement les deux emails avec ce que contient la variable " compte ", ainsi il affiche en console log si l'identification de l'email est fausse */
function identification () {
	pass = document.getElementById('mdp');
	log = document.getElementById('email');
	login = log.value;
	password = pass.value;
	console.log("email est " + login);
	console.log("mot de passe est " + password);
	var verif = compte.identifiant.length;
	var toutVerif = verif -1;
	for (var i = 0; i < verif; i++) {
		if (compte.identifiant[i] == login) {
			var index = i;
			verifMdp(index);
			return;
		}
	}
	if (compte.identifiant[toutVerif] != login) {
		console.log("Vous n'êtes pas inscrit.");
		return;
	}
}
/*Ici la seconde partie de l'identification ce fais par la seconde vérification qui est celle du mot de passe,*/
/*et si elle est juste ainsi que celle de l'email alors la phrase de confirmation ce fait*/
/*Cette fonction prend aussi en compte si la saisie à été mal indiquer*/
function verifMdp(index) {
	if(password == compte.motDePasse[index]) {
		console.log("Vous vous êtes correctement connecté.");
		return;
	}
	else if (password != compte.motDePasse[index]) {
		console.log("Vous avez une érreur de frappe, recommencez.");
		return;
	}
	else {
		console.log("Erreur, mot de passe erroné.");

	}
}
/*Ici la fonction inscription() agis sur la partie inscription du site , elle récupure les valeur entrer par l'utilisateur pour les garder en mémoire ( tant qu'on rafraichis pas la page)*/
/*elle prend en compte que l'idendifiant doit obligatoirement être une adresse éléctronique*/ 
function inscription () {
	nEmail = document.getElementById('newUser');
	nMdp = document.getElementById('newMdp');
	confirmedPassword = document.getElementById('reNewMdp');
	nId = nEmail.value;
	nPass = nMdp.value;
	nConfirm = confirmedPassword.value;
	console.log("Votre nouveaux nom d'utilisateur est " + nId);
	console.log("Votre nouveaux mot de passe est " + nPass);
	compte.identifiant.push(nId);
	compte.motDePasse.push(nPass);
	var newVerif = compte.identifiant.length;
	var newToutVerif = newVerif -1;
	console.log(newToutVerif);
	for (var i = 0; i < newVerif; i++) {
		if (compte.identifiant[i] == nId) {
			var nIndex = i;
			newVerifMdp(newToutVerif);
			return;
		}
	}
	if (compte.identifiant[newToutVerif] != nId) {
		console.log("Vous n'êtes toujours pas inscrit.");
		return;
	}
}
/*Ici cette fonction permet ensuite de verifier si le nouveaux mot de passe contient au minimum 4 caractères 
   et qu'il sois conforme à ce que j'ai indiquer dans la partie HTML de mon code*/
function newVerifMdp(newIndex) {
	if(nPass == compte.motDePasse[newIndex]) {
		console.log("Vous avez choisis correctement votre mot de passe.");
		confirmationMotDePasse();
		return;
	}
	else {
		console.log("Erreur, mauvais mot de passe.");
	}
}
/*Enfin cette fonction ci permet de vérifier si la confirmation du nouveaux mot de passe est bonne ou non*/
function confirmationMotDePasse () {
	if (nConfirm != nPass ) {
		console.log("Vous n'avez pas correctement remis votre mot de passe");
		return;
	}
	else if (nConfirm == nPass){
		console.log("Mot de passe confirmé");
		retour();
		return;
	}
	else {
		alert("Error !");
	} 
}